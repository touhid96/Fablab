import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ProjectsDetails from "./components/ProjectsDetails";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "projects",
        element: <Projects></Projects>,
        loader: () => fetch("/projects.json"),
      },
      {
        path: "projects/:id",
        element: <ProjectsDetails></ProjectsDetails>,
        loader: () => fetch("/projects.json"),
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
