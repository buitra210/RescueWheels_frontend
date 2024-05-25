import { useRoutes } from "react-router-dom";
import Homepage from "./views/Homepage/Homepage";
import UserHomePage from "./views/UserHomePage/UserHomePage";
import ProviderHomePage from "./views/ProvideHomePage/ProvideHomePage";

export default function RouterUrl() {
  return useRoutes([
    {
      path: "/",
      element: <Homepage />,
      children: [{ path: "homepage", element: <Homepage /> }],
    },
    {
      path: "/userhomepage",
      element: <UserHomePage />,
    },
    {
      path: "/providehomepage",
      element: <ProviderHomePage />,
    },
  ]);
}
