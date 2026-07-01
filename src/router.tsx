import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import ReactDOM from 'react-dom/client'
import ReactGA from "react-ga4";

export const getRouter = () => {
  const queryClient = new QueryClient();
  ReactGA.initialize('G-E9BEV0105T')

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  router.subscribe('onResolved', (event) => {
    ReactGA.send({
      hitType: 'pageview',
      page: event.to.pathname + (event.toLocation.searchStr || '')
    })
  })

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  )

  return router;
};
