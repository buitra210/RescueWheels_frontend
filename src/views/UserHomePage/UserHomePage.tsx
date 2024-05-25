import { Box } from "@mui/material";
import Layout from "../../layout/Layout";
import VideoHomepage from "../../layout/video/VideoHomepage";
import { Form } from "react-router-dom";
import FormUrgent from "./components/FormUrgent/FormUrgent";
import FormRequest from "../User/FormRequest/FormRequest";

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
