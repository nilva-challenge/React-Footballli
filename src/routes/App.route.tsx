import { PATHS } from "../configs/routes.config";
import * as pages from "../pages";
import { PublicRoute } from "./components";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<Page.NotFound />} /> */}
        <Route
          path={PATHS.HOME}
          element={
            <PublicRoute component={(props: any) => <pages.Home {...props} />} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoute };
