import { Box } from "@mui/material";
import { Form } from "react-router-dom";
import FormUrgent from "./components/FormUrgent/FormUrgent";
import VideoHomepage from "src/layout/video/VideoHomepage";
import FormRequest from "../FormRequest/FormRequest";
import Layout from "src/layout/Layout";

export default function UserHomePage() {
  return (
    <Layout>
      <Box>
        <VideoHomepage />
        <FormUrgent />
        <FormRequest />
      </Box>
    </Layout>
  );
}
