import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home";
import Assets from "./src/pages/Assets/Assets";

/**
 * All routes are implemented here, these pages are available at src/pages folder.
 */
const AppRoutes = () => (
  <Routes>
    <Route path={"/"} element={<Home />} />
    <Route path={"/assets/:id"} element={<Assets />} />
    <Route path={"*"} element={<Navigate to={"/"} />} />
  </Routes>
);

export default AppRoutes;
