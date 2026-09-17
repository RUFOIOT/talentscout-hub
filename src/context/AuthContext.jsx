import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  onAuthStateChanged, signOut, updateProfile,
} from "firebase/auth";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
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
    // El código de cohorte se valida server-side: la colección
    // talentscout_cohorts no es legible desde el cliente a propósito
    // (para que el código de facilitador no quede expuesto), así que
    // la propia regla de creación de talentscout_users hace el
    // cruce con get(). Si el código no coincide, este setDoc falla
    // con permission-denied y limpiamos la cuenta de Auth recién
    // creada para no dejar un usuario huérfano.
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    try {
      await updateProfile(cred.user, { displayName: name });
      await setDoc(doc(db, COL.users, cred.user.uid), {
        uid: cred.user.uid, name, email, role, cohortId: COHORT_ID,
        enteredCode: (code || "").trim().toUpperCase(), createdAt: Date.now(),
      });
    } catch (e) {
      await cred.user.delete().catch(() => {});
      throw new Error("auth/invalid-cohort-code");
    }
    return cred.user;
  }

  async function login({ email, password }) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() { await signOut(auth); }

  const value = { user, profile, loading: user === undefined || (user && profileLoading), signup, login, logout };
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}
