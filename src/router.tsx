import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';

// Initialize GA4 gtag
ReactGA.initialize('G-E9BEV0105T'); // 👈 Replace with your real code

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
