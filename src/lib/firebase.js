/* Talent Scout Cohort Hub — Firebase (proyecto "vibramente",
   mismo usado por SALUDSA y DCD-EA). Auth (email/password) +
   Firestore (colecciones con prefijo talentscout_). */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVP4Gg-nQ_0vZNhII-LjHMpDT4mH8_PZw",
  authDomain: "vibramente-ce5b8.firebaseapp.com",
  projectId: "vibramente-ce5b8",
  storageBucket: "vibramente-ce5b8.firebasestorage.app",
  messagingSenderId: "520406145835",
  appId: "1:520406145835:web:bf748898aa53092ca5c36e",
  measurementId: "G-YKMQE5GY83",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const COHORT_ID = "cohort-3";
export const COL = {
  cohorts: "talentscout_cohorts",
  users: "talentscout_users",
  attendance: "talentscout_attendance",
  progress: "talentscout_progress",
  announcements: "talentscout_announcements",
};
