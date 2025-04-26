import { createBrowserRouter } from "react-router-dom";
import SideBar from "./assets/Shared/SideBar/SideBar";
import Layout from "./assets/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Skill from "./components/Skill/Skill";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {    
          path: "/about",
          element: <About />,
        },
        {
            path: "/service",
            element: <Service />,
        },
        {
            path: "/portfolio",
            element: <Portfolio />,
        },
        {
            path: "/skill",
            element: <Skill />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },

      ],
    }
  ]);