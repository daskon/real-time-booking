import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function AuthRedirect() {
  const token = useAuthStore((s)=>s.token);

  if(!token) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to="/dashboard" replace />;
}