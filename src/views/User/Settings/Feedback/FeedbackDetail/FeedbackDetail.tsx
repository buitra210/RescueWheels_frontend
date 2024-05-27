import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Modal,
  Rating,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  ModalProvider,
  useModalContext,
} from "src/contexts/modal-context/modal-context";
import StarIcon from "@mui/icons-material/Star";
import { toast } from "react-toastify";

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

type FeedbackInfoData = {
  rating: number | null;
  feedback: string;
};

export default function FeedbackDetail() {
  const [feedbackInfo, setFeedbackInfo] = useState<FeedbackInfoData>(() => {
    return { rating: 0, feedback: "" };
  });
  console.log(feedbackInfo);
  const handleRatingChange = (newData: Partial<FeedbackInfoData>) => {
    setFeedbackInfo((prev) => {
      return {
        ...prev,
        ...newData,
      };
    });
    //   setFeedbackInfo({ ...feedbackInfo, rating: e.target.value });
    //   setFeedbackInfo({ ...feedbackInfo, feedback: e.target.value });
  };
  async function handleSubmit() {
    localStorage.setItem("userInfo", JSON.stringify(feedbackInfo));
    toast.success("Feedback has sent successfully");
    const response = await fetch("http://localhost:3000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rate: feedbackInfo.rating,
        feedback: feedbackInfo.feedback,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <ModalProvider>
      <Box>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Company's Feedback
        </DialogTitle>
        {/* <IconButton
          aria-label="close"
          onClick={closeModal}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton> */}
        <DialogContent dividers>
          <Box>
            <Typography>Rating</Typography>
            <Box
              sx={{
                width: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Rating
                name="hover-feedback"
                value={feedbackInfo.rating}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  handleRatingChange({ rating: newValue });
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {feedbackInfo.rating !== null && (
                <Box sx={{ ml: 2 }}>
                  {/* {labels[hover !== -1 ? hover : feedbackInfo.value]} */}
                </Box>
              )}
            </Box>
          </Box>
          <Box>
            <Typography sx={{ mt: 2 }}>Feedback</Typography>
            <Box
              sx={{
                width: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <textarea
                value={feedbackInfo.feedback}
                onChange={(e) =>
                  setFeedbackInfo({ ...feedbackInfo, feedback: e.target.value })
                }
                style={{
                  width: "100%",
                  height: "100px",
                  borderRadius: "8px",
                  padding: "10px",
                  backgroundColor: "#1b2e3d",
                  color: "white",
                }}
              ></textarea>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Box>
    </ModalProvider>
    // </Modal>
  );
}
