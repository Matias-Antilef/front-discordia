import { Navigate, Route, Routes } from "react-router";
import { PrivateRoutes, PublicRoutes } from "./models/routes";
import RegisterPage from "./views/auth/RegisterPage";
import LoginPage from "./views/auth/LoginPage";
import AuthGuard from "./utils/AuthGuard";
import PageNotFound from "./utils/page-not-found";
import { lazy, Suspense } from "react";
import SuspenseFallback from "./utils/suspense-fallback";

function App() {
  const ShibiChat = lazy(() => import("./views/shibichat/ShibiChat"));

  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path={"*"} element={<PageNotFound />} />
        <Route path={"/"} element={<Navigate to={PublicRoutes.LOGIN} />} />
        <Route path={PublicRoutes.LOGIN} element={<LoginPage />} />
        <Route path={PublicRoutes.REGISTER} element={<RegisterPage />} />
        <Route element={<AuthGuard />}>
          <Route
            path={`${PrivateRoutes.SHIBICHAT}/*`}
            element={<ShibiChat />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
