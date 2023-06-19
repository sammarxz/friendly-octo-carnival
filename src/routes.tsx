import { createBrowserRouter } from "react-router-dom";

import { LoginPage, Dashboard } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export { router };
