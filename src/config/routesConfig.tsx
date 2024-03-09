import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import Error404Page from "../components/Page/404/NotFound";
import PagesConfigs from "../components/Page/pagesConfig";
import { Typography } from "@mui/material";
import Utils, { RouteConfigsType, RoutesType } from "../utils/Utils";

const userRoutes: RouteConfigsType = [...PagesConfigs];

const routes: RoutesType = [
  ...Utils.generateRoutesFromConfigs(userRoutes),
  {
    path: "/",
    element: <Typography variant="h1">home</Typography>,
  },
  {
    path: "loading",
    element: <Loading />,
  },
  {
    path: "/404",
    element: <Error404Page />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
];
export default routes;
