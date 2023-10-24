import { lazy, Suspense } from "react";
import { PATHS } from "../configs/routes.config";
import { PublicRoute } from "./components";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/home/Home"));
const NotfoundPage = lazy(() => import("../pages/notfound/Notfound"));
const Competitions = lazy(() => import("../pages/compettions/Compettions"));
const Explorations = lazy(() => import("../pages/exploration/Exploration"));
const Leagues = lazy(() => import("../pages/leagues/Leagues"));
const Profile = lazy(() => import("../pages/profile/Profile"));
const Settings = lazy(() => import("../pages/settings/Settings"));
const Loading = lazy(() => import("../commonComponents/Loading"));

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="*" element={<NotfoundPage />} />
          <Route
            path={PATHS.HOME}
            element={
              <PublicRoute component={(props: any) => <Home {...props} />} />
            }
          />
          <Route
            path={PATHS.COMPETITIONS}
            element={
              <PublicRoute
                component={(props: any) => <Competitions {...props} />}
              />
            }
          />
          <Route
            path={PATHS.EXPLORATION}
            element={
              <PublicRoute
                component={(props: any) => <Explorations {...props} />}
              />
            }
          />
          <Route
            path={PATHS.LEAGUES}
            element={
              <PublicRoute component={(props: any) => <Leagues {...props} />} />
            }
          />
          <Route
            path={PATHS.PROFILE}
            element={
              <PublicRoute component={(props: any) => <Profile {...props} />} />
            }
          />
          <Route
            path={PATHS.SETTINGS}
            element={
              <PublicRoute
                component={(props: any) => <Settings {...props} />}
              />
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export { AppRoute };
