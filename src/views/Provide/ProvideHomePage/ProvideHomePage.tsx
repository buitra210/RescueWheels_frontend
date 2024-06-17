import { Box } from "@mui/material";
import VideoHomepage from "src/layout/video/VideoHomepage";
import ProvideFormUrgent from "./components/FormUrgent/FormUrgent";
import Layout from "src/layout/Layout";
import AddService from "./components/AddService/AddService";

export default function ProviderHomePage() {
  return (
    <Layout>
      <Box>
        <VideoHomepage />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "60%",
            flexWrap: "wrap",
          }}
        >
          <ProvideFormUrgent />
          <AddService />
        </Box>
      </Box>
    </Layout>
  );
}
