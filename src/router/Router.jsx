import { App, Loading, NotFound, Protected } from "./preservedRoutes";
import { Fragment, Suspense } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { eagerRoutes } from "./eagerRoutes";
import { lazyRoutes } from "./lazyRoutes";
import { protectedRoutes } from "./protectedRoutes";

import.meta.glob("/src/styles/*.(scss|css)", { eager: true });

const routes = [...eagerRoutes, ...lazyRoutes];

const Router = () => (
  <Suspense fallback={<Loading />}>
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />}>
            {routes?.map(
              ({ path, component: Component = Fragment, loader, action }) => {
                return (
                  <Route
                    key={path}
                    path={path}
                    element={<Component />}
                    loader={loader}
                    action={action}
                  />
                );
              }
            )}
            <Route path="/" element={<Protected />}>
              {protectedRoutes?.map(
                ({ path, component: Component = Fragment, loader, action }) => {
                  return (
                    <Route
                      key={path}
                      path={path}
                      element={<Component />}
                      loader={loader}
                      action={action}
                    />
                  );
                }
              )}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        )
      )}
    />
  </Suspense>
);

export default Router;
