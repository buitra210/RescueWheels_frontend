import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import VideoHomepage from "../../layout/video/VideoHomepage";
import Layout from "../../layout/Layout";
import AuthModal from "../AuthModal/AuthModal";
import { useThemeContext } from "src/contexts/theme-context/theme-context";

export default function Homepage() {
  const [openModal, setOpenModal] = useState(false);
  const theme = useThemeContext();
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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
          <Typography variant="h1" sx={{ fontSize: "60px", my: 5 }}>
            Let us{" "}
            <span
              style={{
                fontStyle: "oblique",
                fontWeight: 600,
                fontSize: "80px",
                color: "white",
              }}
            >
              SOLVE
            </span>
          </Typography>
          <Typography variant="h1" sx={{ fontSize: "60px" }}>
            all your problems
          </Typography>
          <Box>
            <Button
              variant="text"
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#2971AB",
                mt: 5,
                borderRadius: "20px",
                width: "200px",
                "&:hover": {
                  backgroundColor: "#7692a9",
                },
              }}
              onClick={handleOpenModal}
            >
              Get Started
            </Button>
          </Box>
        </Box>
        <AuthModal open={openModal} onClose={handleCloseModal} />
        <Box></Box>
      </Box>
    </Layout>
  );
}
