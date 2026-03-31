import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout.jsx";
import axios from "axios";
import AppDetail from "./components/App/AppDetail.jsx";
import Apps from "./components/Apps/Apps.jsx";
import InstalledApps from "./components/InstalledApps/InstalledApps.jsx";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await axios.get("/app.json");
          return res.data;
        },
      },
      {
        path: "apps",
        element: <Apps />,
        loader: async () => {
          const res = await axios.get("/app.json");
          return res.data;
        },
      },
      {
        path: "appdetail/:id",
        element: <AppDetail></AppDetail>,
        loader: async ({ params }) => {
          const res = await axios.get("/app.json");
          const app = res.data.find((x) => x.id === parseInt(params.id));
          return app;
        },
      },
      {
        path: "/installed",
        element: <InstalledApps />,
        loader: async () => {
          const res = await axios.get("/app.json");
          return res.data;
        },
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" />
  </StrictMode>,
);
