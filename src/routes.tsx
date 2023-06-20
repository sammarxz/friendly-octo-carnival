import { Navigate } from "react-router-dom";

import { LoginPage, Dashboard } from "@/pages";

const routes = (isLoggedIn: boolean) => [
  {
    path: "/",
    element: isLoggedIn ? <Dashboard /> : <LoginPage />,
  },
  {
    path: "/dashboard",
    element: isLoggedIn ? <Dashboard /> : <Navigate to="/" />,
  },
];

export { routes };
