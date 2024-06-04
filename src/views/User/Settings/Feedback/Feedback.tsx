import { Feed } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Dialog,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import Layout2 from "src/layout/Layout2";
import Header2 from "src/layout/header/Header2";
import FeedbackDetail from "./FeedbackDetail/FeedbackDetail";

interface FeedbackProps {
  id: number;
  nameCompany: string;
  location: string;
  serviceName: string;
}

function createFeedback({
  id,
  nameCompany,
  location,
  serviceName,
}: FeedbackProps) {
  return { id, nameCompany, location, serviceName };
}

const feedbacks = [
  createFeedback({
    id: 1,
    nameCompany: "Company 1",
    location: "Location 1",
    serviceName: "Service 1",
  }),
  createFeedback({
    id: 2,
    nameCompany: "Company 2",
    location: "Location 2",
    serviceName: "Service 2",
  }),
  createFeedback({
    id: 3,
    nameCompany: "Company 3",
    location: "Location 3",
    serviceName: "Service 3",
  }),
];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Feedback() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout2>
      <Header2>
        <Box sx={{ color: "white" }}>
          {feedbacks.map((feedback) => (
            <Container>
              <Box>
                <Box
                  key={feedback.id}
                  sx={{
                    backgroundColor: "#0d1921",
                    marginTop: 2,
                    marginBottom: 1,
                    borderRadius: "25px",
                    padding: "25px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: "12px" }}>
                        Company Name
                      </Typography>
                      {feedback.nameCompany}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: "12px" }}>
                        Location
                      </Typography>
                      {feedback.location}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: "12px" }}>
                        Service Name
                      </Typography>
                      {feedback.serviceName}
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 5,
                      justifyContent: "flex-end",
                      borderTop: "1px solid #344456",
                      marginTop: "10px",
                      paddingTop: "10px",
                    }}
                  >
                    <Button
                      onClick={handleClickOpen}
                      sx={{
                        backgroundColor: "rgb(27, 46, 61)",
                        color: "rgb(81, 133, 170)",
                      }}
                    >
                      Rating
                    </Button>
                    <BootstrapDialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <FeedbackDetail />
                    </BootstrapDialog>
                    <Button
                      sx={{
                        backgroundColor: "rgb(27, 46, 61)",
                        color: "rgb(81, 133, 170)",
                      }}
                    >
                      Connect with Company
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Container>
          ))}
        </Box>
      </Header2>
    </Layout2>
  );
}
