import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainRoutes } from "../journal/routes/JournalRoutes.jsx";
import { AuthRoutes } from "../auth/routes/AuthRoutes.jsx";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/auth/*"} element={<AuthRoutes />}></Route>
        <Route path={"*"} element={<MainRoutes />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
