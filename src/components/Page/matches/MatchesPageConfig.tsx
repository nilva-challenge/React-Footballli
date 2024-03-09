import { lazy } from "react";
import { RouteConfigType } from "../../../utils/Utils";

const MatchesPage = lazy(() => import("./MatchesPage"));

const MatchesPageConfig: RouteConfigType = {
  settings: {
    layout: {
      style: "layout1",
      config: {},
    },
  },
  routes: [
    {
      path: "/matches",
      element: <MatchesPage />,
    },
  ],
};

export default MatchesPageConfig;
