import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "./components/Loader/Loader";

// Lazy imports
const Layout = lazy(() => import("./assets/Layout/Layout"));
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Service = lazy(() => import("./components/Service/Service"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Skill = lazy(() => import("./components/Skill/Skill"));
const Contact = lazy(() => import("./components/Contact/Contact"));



export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/service", element: <Service /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/skill", element: <Skill /> },
      { path: "/contact", element: <Contact /> },
    ].map((route) => ({
      ...route,
      element: <Suspense fallback={<Loader />}>{route.element}</Suspense>,
    })),
  },
]); 
