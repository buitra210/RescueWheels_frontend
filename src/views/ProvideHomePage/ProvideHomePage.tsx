import { Box } from "@mui/material";
import Layout from "../../layout/Layout";
import VideoHomepage from "../../layout/video/VideoHomepage";
import ProvideFormUrgent from "./components/FormUrgent/FormUrgent";
import AllRequest from "../Provide/AllRequest/AllRequest";

export default function ProviderHomePage() {
  return (
    <Layout>
      <Box>
        <VideoHomepage />
        <ProvideFormUrgent />
        <AllRequest />
      </Box>
    </Layout>
  );
}
