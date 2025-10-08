import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Allapps from "../pages/Allapps";
import Installation from "../pages/Installation";
import AppDetails from "../pages/AppDetails";
import ErrorPage from "../pages/ErrorPage";
import AppNotfound from "../pages/AppNotfound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allapps",
        Component: Allapps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/appdetails/:id",
        Component: AppDetails,
      },
      {
        path: "/errorAppNotFound",
        Component: AppNotfound,
      },
    ],
  },
]);

export default router;
