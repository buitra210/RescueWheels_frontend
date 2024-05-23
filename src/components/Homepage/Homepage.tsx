import { Box } from "@mui/material";
import React from "react";
import VideoHomepage from "../../layout/video/VideoHomepage";
import Content from "../../layout/content/Content";

export default function Homepage() {
  return (
    <Box>
      <VideoHomepage />
      <Content headerHeight={""} />
    </Box>
  );
}
