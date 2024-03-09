import { RouteObject } from "react-router-dom";

export type RouteItemType = RouteObject & {
  auth?: string[] | [];
  settings?: unknown;
};

/**
 * The FuseRoutesType type is a custom type that is an array of FuseRouteItemType objects.
 */
export type RoutesType = RouteItemType[];

export type RouteConfigType = {
  routes: RoutesType;
  settings?: unknown;
  auth?: string[] | [];
};

export type RouteConfigsType = RouteConfigType[] | [];

class Utils {
  static setRoutes(config: RouteConfigType) {
    let routes = [...config.routes];

    routes = routes.map((route) => {
      return {
        ...route,
      };
    });

    return [...routes];
  }
  static generateRoutesFromConfigs(configs: RouteConfigsType) {
    let allRoutes: RouteItemType[] = [];
    configs.forEach((config: RouteConfigType) => {
      allRoutes = [...allRoutes, ...this.setRoutes(config)];
    });
    return allRoutes;
  }
}

export default Utils;
