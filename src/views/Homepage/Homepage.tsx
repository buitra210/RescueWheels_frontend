import { Box, Button, Typography } from "@mui/material";
import VideoHomepage from "../../layout/video/VideoHomepage";
import Layout from "../../layout/Layout";

export default function Homepage() {
  return (
    <Layout>
      <Box>
        <VideoHomepage />
        <Box
          sx={{
            zIndex: 2,
            color: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            height: "98vh",
            pl: 3,
            pb: 4,
          }}
        >
          <Typography sx={{ fontSize: "60px" }}>
            Let us <span style={{ fontWeight: 600 }}>SOLVE</span>
          </Typography>
          <Typography sx={{ fontSize: "60px" }}>all your problems</Typography>
          <Box>
            <Button
              variant="contained"
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#2971AB",
                mt: 3,
                borderRadius: "20px",
                width: "200px",
                "&:hover": {
                  backgroundColor: "#7692a9",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </Layout>
  );
}
