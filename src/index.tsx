import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import FilmBlock from "./components/AppHeader/NavigationBlock/FilmBlock";
import { Provider } from "react-redux";
import { store } from "./redux";

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

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
