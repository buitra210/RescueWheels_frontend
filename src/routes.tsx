import { Navigate, useRoutes } from "react-router-dom";
import Homepage from "./views/Homepage/Homepage";
import Profile from "./views/Profile/Profile";

export default function RouterUrl() {
  return useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
}