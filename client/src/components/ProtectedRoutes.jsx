import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useStore from "../hooks/useStore";

export default function ProtectedRoutes() {
  const userData = useAuth((state) => state.userData);
  const loading = useStore((state) => state.loading);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!userData) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
