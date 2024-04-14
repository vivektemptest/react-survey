import React from "react";

import { createBrowserRouter,Navigate } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Surveys from "./pages/Surveys";
import GuestLayout from "./layouts/GuestLayout";
import DefualtLayout from "./layouts/DefaultLayout";
import SurveyView from "./pages/SurveyView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefualtLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/surveys",
        element: <Surveys />,
      },
      {
        path: "/surveys/create",
        element: <SurveyView />,
      },
    ],
  },

  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
