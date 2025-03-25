import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./components/pages/Home.jsx";
import Login from "./components/pages/Auth/Login.jsx";
import Register from "./components/pages/Auth/Register.jsx";
import Profile from "./components/pages/User/Profile.jsx";
import Quiz from "./components/quiz/Quiz.jsx";
import Circuit from "./components/Circuits/Circuit.jsx"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/user/profile",
        element: <Profile />,
      },
      {
        path: "/quiz001",
        element: <Quiz />,
      },
      {
        path: "/logicgates",
        element: <Circuit />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
