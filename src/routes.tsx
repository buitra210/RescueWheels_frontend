import { Navigate, useRoutes } from "react-router-dom";
import Homepage from "./views/Homepage/Homepage";

export default function RouterUrl() {
  return useRoutes([
    {
      path: "/",
      element: <Homepage />,
      children: [{ path: "homepage", element: <Homepage /> }],
    },
  ]);
}
