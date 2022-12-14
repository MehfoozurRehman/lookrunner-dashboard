import { actionFunction } from "./actionFunction";
import { lazy } from "react";
import { loaderFunction } from "./loaderFunction";
import { pathExtractor } from "./pathExtractor";

const LAZY_ROUTES = import.meta.glob("/src/screens/**/[a-z[]*.lazy.jsx");

export const lazyRoutes = Object.keys(LAZY_ROUTES).map((route) => {
  const module = LAZY_ROUTES[route];
  return {
    path: pathExtractor(route).replace(/\.lazy/, ""),
    component: lazy(LAZY_ROUTES[route]),
    loader: loaderFunction(module),
    action: actionFunction(module),
    preload: module,
  };
});
