import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./index.css";

const Login = lazy(() => import("./companents/Login/Login.jsx"));
const Home = lazy(() => import("./companents/Home/Home.jsx"));
const Auth = lazy(() => import("./companents/Auth/Auth.jsx"));
const Show = lazy(() => import("./companents/Show/Show.jsx"));
const Edit = lazy(() => import("./companents/Edit/Edit.jsx"));
const Add = lazy(() => import("./companents/Add/Add.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/home",
    element: <Auth></Auth>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/home/show/:id",
        element: <Show></Show>,
      },
      {
        path: "/home/edit/:id",
        element: <Edit></Edit>,
      },
      {
        path: "/home/Add",
        element: <Add></Add>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<p>...Lodung</p>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
