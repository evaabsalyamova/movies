import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import FilmBlock from "./components/AppHeader/NavigationBlock/FilmBlock";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppHeader />,
    children: [
      {
        path: "filmBlock",
        element: <FilmBlock />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);

reportWebVitals();
