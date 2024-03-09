import { createContext } from "react";
import { RouteObject } from "react-router-dom";

interface AppContextOptions {
  routes?: RouteObject[];
}

const AppContext = createContext<AppContextOptions>({});

export default AppContext;
