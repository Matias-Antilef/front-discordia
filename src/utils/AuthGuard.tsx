import { PublicRoutes } from "@/models/routes";
import { Navigate, Outlet } from "react-router";

function AuthGuard() {
  const status = localStorage.getItem("status");

  if (status !== "online") return <Navigate to={PublicRoutes.LOGIN} />;

  return <Outlet />;
}

export default AuthGuard;
