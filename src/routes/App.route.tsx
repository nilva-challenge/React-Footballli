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
            <PublicRoute
              component={(props: any) => <pages.Home {...props} />}
            />
          }
        />
        <Route
          path={PATHS.COMPETITIONS}
          element={
            <PublicRoute
              component={(props: any) => <pages.Competitions {...props} />}
            />
          }
        />
        <Route
          path={PATHS.EXPLORATION}
          element={
            <PublicRoute
              component={(props: any) => <pages.Explorations {...props} />}
            />
          }
        />
        <Route
          path={PATHS.LEAGUES}
          element={
            <PublicRoute
              component={(props: any) => <pages.Leagues {...props} />}
            />
          }
        />
        <Route
          path={PATHS.PROFILE}
          element={
            <PublicRoute
              component={(props: any) => <pages.Profile {...props} />}
            />
          }
        />
        <Route
          path={PATHS.SETTINGS}
          element={
            <PublicRoute
              component={(props: any) => <pages.Settings {...props} />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoute };
