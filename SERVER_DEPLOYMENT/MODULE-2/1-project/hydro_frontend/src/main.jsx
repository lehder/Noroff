import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { Profile } from "./routes/profile/index.jsx";
import { Home } from "./routes/home/index.jsx";
import { ProductRoute } from "./routes/product/index.jsx";
import { AddProductRoute } from "./routes/addProducts/index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "products/add", element: <AddProductRoute /> },
      { path: "products/:id", element: <ProductRoute /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);