import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {

  const autenticado =
    localStorage.getItem("isAuthenticated") === "true";

  return autenticado ? <>{children}</> : <Navigate to="/" replace />;
}