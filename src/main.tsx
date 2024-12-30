import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu.tsx";
import { Cart } from "./pages/Cart/Cart.tsx";
import { Error } from "./pages/Error/Error.tsx";
import {DefaultLayout} from "./layouts/menu/DefaultLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {path: '/cart', element: <Cart/>},
      {path: '/', element: <Menu/>}
    ]
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
