import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import React from "react";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      }, 
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />
      },
      {
        path: "/profile/:id",
        element: <UserProfile />,
        errorElement: <ErrorPage />
      }
];

export default routes;