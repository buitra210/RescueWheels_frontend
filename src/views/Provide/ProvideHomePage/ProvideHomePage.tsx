import { Box } from "@mui/material";
import VideoHomepage from "src/layout/video/VideoHomepage";
import ProvideFormUrgent from "./components/FormUrgent/FormUrgent";
import Layout from "src/layout/Layout";

export default function ProviderHomePage() {
  return (
    <Layout>
      <Box>
        <VideoHomepage />
        <ProvideFormUrgent />
      </Box>
    </Layout>
  );
}
