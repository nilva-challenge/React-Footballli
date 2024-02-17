import MainLayout from "../layouts/MainLayout";
import { ReactNode } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Wanted from "../pages/Wanted";

export interface RouteObject {
  path: string;
  element: ReactNode;
  children?: RouteObject[];
}
const AppRouter = () => {
  const routes: RouteObject[] = [
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "wanted",
          element: <Wanted />,
        },
        {
          path: "profile",
          element: <div>khi khi</div>,
        },
        {
          path: "explore",
          element: <div>ex</div>,
        },
        {
          path: "footbal",
          element: <div>football</div>,
        },
        {
          path: "ligas",
          element: <div>ligas</div>,
        },
      ],
    },
  ];

  const element = useRoutes(routes);
  return (
    <>
      {element}
      <Outlet />
    </>
  );
};

export default AppRouter;
