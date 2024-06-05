import { useRoutes } from "react-router-dom";
import Homepage from "./views/Homepage/Homepage";
import AllRequest from "./views/Provide/AllRequest/AllRequest";
import UserHomePage from "./views/User/UserHomePage/UserHomePage";
import ProviderHomePage from "./views/Provide/ProvideHomePage/ProvideHomePage";
import Feedback from "./views/User/Settings/Feedback/Feedback";
import FormRequest from "./views/User/FormRequest/FormRequest";
import Profile from "./views/User/Settings/Profile/Profile";

export default function RouterUrl() {
  return useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/userhomepage",
      element: <UserHomePage />,
    },
    {
      path: "/providerhomepage",
      element: <ProviderHomePage />,
    },
    {
      path: "/allrequest",
      element: <AllRequest />,
    },
    {
      path: "/feedback",
      element: <Feedback />,
    },
    {
      path: "/createrequest",
      element: <FormRequest />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
}
