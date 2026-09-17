import { useEffect, useState } from "react";
import {
  collection, doc, onSnapshot, setDoc, query, where, orderBy, addDoc,
} from "firebase/firestore";
import { db, COL, COHORT_ID } from "./firebase";
import { useAuth } from "../context/AuthContext";

export function useProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user) { setProgress(null); setLoading(false); return; }
    const unsub = onSnapshot(doc(db, COL.progress, user.uid), (snap) => {
      setProgress(snap.exists() ? snap.data() : { stackLayers: {}, xp: 0 });
      setLoading(false);
    });
    return unsub;
  }, [user]);

  async function toggleStackLayer(layerId, value) {
    const current = progress?.stackLayers || {};
    const stackLayers = { ...current, [layerId]: value };
    await setDoc(doc(db, COL.progress, user.uid), { uid: user.uid, stackLayers, updatedAt: Date.now() }, { merge: true });
  }

  return { progress, loading, toggleStackLayer };
}

export function useMyAttendance() {
  const { user } = useAuth();
  const [attendance, setAttendance] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user) { setAttendance({}); setLoading(false); return; }
    const q = query(collection(db, COL.attendance), where("uid", "==", user.uid), where("cohortId", "==", COHORT_ID));
    const unsub = onSnapshot(q, (snap) => {
      const map = {};
      snap.forEach((d) => { const data = d.data(); map[data.sessionId] = data; });
      setAttendance(map);
      setLoading(false);
    }, () => setLoading(false));
    return unsub;
  }, [user]);
  return { attendance, loading };
}

export function useCohortAttendance() {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const q = query(collection(db, COL.attendance), where("cohortId", "==", COHORT_ID));
    const unsub = onSnapshot(q, (snap) => {
      setAttendance(snap.docs.map((d) => d.data()));
      setLoading(false);
    }, () => setLoading(false));
    return unsub;
  }, []);

  async function markAttendance({ sessionId, uid, present, participation, notes, markedBy }) {
    const docId = `${COHORT_ID}__${sessionId}__${uid}`;
    await setDoc(doc(db, COL.attendance, docId), {
      cohortId: COHORT_ID, sessionId, uid, present, participation: participation ?? 0,
      notes: notes || "", markedBy, markedAt: Date.now(),
    });
  }

  return { attendance, loading, markAttendance };
}

export function useRoster() {
  const [roster, setRoster] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const q = query(collection(db, COL.users), where("cohortId", "==", COHORT_ID));
    const unsub = onSnapshot(q, (snap) => {
      setRoster(snap.docs.map((d) => d.data()));
      setLoading(false);
    }, () => setLoading(false));
    return unsub;
  }, []);
  return { roster, loading };
}

export function useAnnouncements() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const q = query(collection(db, COL.announcements), where("cohortId", "==", COHORT_ID), orderBy("publishedAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setPosts(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    }, () => setLoading(false));
    return unsub;
  }, []);

  async function publish({ title, body, authorUid }) {
    await addDoc(collection(db, COL.announcements), {
      cohortId: COHORT_ID, title, body, authorUid, publishedAt: Date.now(),
    });
  }

  return { posts, loading, publish };
}

export function useAllProgress(uids) {
  const [byUid, setByUid] = useState({});
  useEffect(() => {
    if (!uids || !uids.length) { setByUid({}); return; }
    const unsubs = uids.map((uid) =>
      onSnapshot(doc(db, COL.progress, uid), (snap) => {
        setByUid((prev) => ({ ...prev, [uid]: snap.exists() ? snap.data() : { stackLayers: {} } }));
      })
    );
    return () => unsubs.forEach((u) => u());
  }, [JSON.stringify(uids)]);
  return byUid;
}
