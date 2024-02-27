import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FilmBlock from "./components/AppHeader/NavigationBlock/FilmBlock";

let router = createBrowserRouter([
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

export default function App() {
  return (
    // <div className="App">
    <RouterProvider router={router} />
    // </div>
  );
}
