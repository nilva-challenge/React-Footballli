import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home";

/**
 * All routes are implemented here, these pages are available at src/pages folder.
 */
const AppRoutes = () => (
  <Routes>
    <Route path={"/"} element={<Home />} />
    <Route path={"*"} element={<Navigate to={"/"} />} />
  </Routes>
);

export default AppRoutes;
