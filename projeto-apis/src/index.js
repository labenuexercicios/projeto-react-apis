import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home";
import {Pokedex} from "./pages/pokedex/Pokedex";
import { Detalhes } from "./pages/details/Detalhes";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/pokedex",
        element: <Pokedex/>,
      },
      {
        path: "/detalhes/:name",
        element: <Detalhes/>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<RouterProvider router={router}/>
</React.StrictMode>
);
