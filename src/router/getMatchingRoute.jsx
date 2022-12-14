import { lazyRoutes } from "./lazyRoutes";

export const getMatchingRoute = (path) =>
  lazyRoutes.find(
    (route) =>
      path.match(new RegExp(route.path.replace(/:\w+|\*/g, ".*")))?.[0] === path
  );
