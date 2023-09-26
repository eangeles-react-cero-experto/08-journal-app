import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage.jsx";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />

      <Route path={"/home"} element={<HomePage />}></Route>
      <Route path={"*"} element={<Navigate to={"/"} />} />
    </Routes>
  );
};
