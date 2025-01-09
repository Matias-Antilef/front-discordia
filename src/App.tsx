import { Navigate, Route, Routes } from "react-router";
import { PrivateRoutes, PublicRoutes } from "./models/routes";
import RegisterPage from "./views/auth/RegisterPage";
import LoginPage from "./views/auth/LoginPage";
import AuthGuard from "./utils/AuthGuard";
import PageNotFound from "./utils/PageNotFound";
import Discordia from "./views/discordia/Discordia";

function App() {
  return (
    <>
      <Routes>
        <Route path={"*"} element={<PageNotFound />} />
        <Route path={"/"} element={<Navigate to={PublicRoutes.LOGIN} />} />
        <Route path={PublicRoutes.LOGIN} element={<LoginPage />} />
        <Route path={PublicRoutes.REGISTER} element={<RegisterPage />} />
        <Route element={<AuthGuard />}>
          <Route
            path={`${PrivateRoutes.DISCORDIA}/*`}
            element={<Discordia />}
          />
        </Route>
      </Routes>
    </>
  );
}
export default App;
