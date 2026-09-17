import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  onAuthStateChanged, signOut, updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { auth, db, COL, COHORT_ID } from "../lib/firebase";

const AuthCtx = createContext(null);
export function useAuth() { return useContext(AuthCtx); }

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined); // undefined = loading, null = signed out
  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => onAuthStateChanged(auth, (u) => setUser(u || null)), []);

  useEffect(() => {
    if (!user) { setProfile(null); setProfileLoading(false); return; }
    setProfileLoading(true);
    const unsub = onSnapshot(doc(db, COL.users, user.uid), (snap) => {
      setProfile(snap.exists() ? snap.data() : null);
      setProfileLoading(false);
    }, () => setProfileLoading(false));
    return unsub;
  }, [user]);

  async function signup({ name, email, password, code, role }) {
    const cohortSnap = await getDoc(doc(db, COL.cohorts, COHORT_ID));
    if (!cohortSnap.exists()) throw new Error("El cohorte no está configurado todavía.");
    const cohort = cohortSnap.data();
    const expected = role === "facilitator" ? cohort.facilitatorCode : cohort.studentCode;
    if (!code || code.trim().toUpperCase() !== String(expected).toUpperCase()) {
      throw new Error("Código de cohorte inválido. Revísalo con tu facilitador.");
    }
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });
    await setDoc(doc(db, COL.users, cred.user.uid), {
      uid: cred.user.uid, name, email, role, cohortId: COHORT_ID,
      enteredCode: code.trim().toUpperCase(), createdAt: Date.now(),
    });
    return cred.user;
  }

  async function login({ email, password }) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() { await signOut(auth); }

  const value = { user, profile, loading: user === undefined || (user && profileLoading), signup, login, logout };
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}
