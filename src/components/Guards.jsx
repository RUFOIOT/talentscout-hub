import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Layout from "./Layout";
import { FullPageLoader } from "./Skeleton";

export function RequireAuth({ children }) {
  const { user, profile, loading } = useAuth();
  if (loading) return <FullPageLoader />;
  if (!user || !profile) return <Navigate to="/" replace />;
  return <Layout>{children}</Layout>;
}

export function RequireFacilitator({ children }) {
  const { user, profile, loading } = useAuth();
  if (loading) return <FullPageLoader />;
  if (!user || !profile) return <Navigate to="/" replace />;
  if (profile.role !== "facilitator") return <Navigate to="/hub" replace />;
  return <Layout>{children}</Layout>;
}
