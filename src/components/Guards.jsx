import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import Layout from "./Layout";

export function RequireAuth({ children }) {
  const { user, profile, loading } = useAuth();
  const { t } = useLanguage();
  if (loading) return <div className="min-h-screen flex items-center justify-center text-mute">{t.loading}</div>;
  if (!user || !profile) return <Navigate to="/" replace />;
  return <Layout>{children}</Layout>;
}

export function RequireFacilitator({ children }) {
  const { user, profile, loading } = useAuth();
  const { t } = useLanguage();
  if (loading) return <div className="min-h-screen flex items-center justify-center text-mute">{t.loading}</div>;
  if (!user || !profile) return <Navigate to="/" replace />;
  if (profile.role !== "facilitator") return <Navigate to="/hub" replace />;
  return <Layout>{children}</Layout>;
}
