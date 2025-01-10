import { useUser } from "@/context/hooks/useUser";
import { PublicRoutes } from "@/models/routes";
import { Navigate, Outlet } from "react-router";

function AuthGuard() {
  const { getUser } = useUser();
  const user = getUser();

  if (user.status !== "online") return <Navigate to={PublicRoutes.LOGIN} />;

  return <Outlet />;
}

export default AuthGuard;
