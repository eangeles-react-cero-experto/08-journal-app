import { Route, Routes } from "react-router-dom";
import { LoginPage, SignUpPage } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={"login"} element={<LoginPage />}></Route>
      <Route path={"signup"} element={<SignUpPage />}></Route>
    </Routes>
  );
};
