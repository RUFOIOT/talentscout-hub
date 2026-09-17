import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Layout from "./Layout";

export function RequireAuth({ children }) {
  const { user, profile, loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center text-mute">Cargando…</div>;
  if (!user || !profile) return <Navigate to="/" replace />;
  return <Layout>{children}</Layout>;
}

export function RequireFacilitator({ children }) {
  const { user, profile, loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center text-mute">Cargando…</div>;
  if (!user || !profile) return <Navigate to="/" replace />;
  if (profile.role !== "facilitator") return <Navigate to="/hub" replace />;
  return <Layout>{children}</Layout>;
}
