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

export default function FeedbackDetail() {
  const [open, setOpen] = useState(true);
  console.log("open", open);
  const { closeModal } = useModalContext();
  const handleClickOpen = () => {
    closeModal();
    setOpen(false);
  };
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

  const [feedbackInfo, setFeedbackInfo] = useState(() => {
    const savedFeedbackInfo = localStorage.getItem("feedbackInfo");
    if (savedFeedbackInfo) {
      return JSON.parse(savedFeedbackInfo);
    } else {
      return {
        rating: 0,
        feedback: "",
      };
    }
  });
  console.log(feedbackInfo);
  const handleRatingChange = (e) => {
    setFeedbackInfo({ ...feedbackInfo, rating: e.target.value });
    setFeedbackInfo({ ...feedbackInfo, feedback: e.target.value });
  };

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
                  setValue(newValue);
                  setFeedbackInfo({ ...feedbackInfo, rating: newValue });
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {feedbackInfo.value !== null && (
                <Box sx={{ ml: 2 }}>
                  {labels[hover !== -1 ? hover : feedbackInfo.value]}
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
          <Button onClick={handleRatingChange}>Submit</Button>
        </DialogActions>
      </Box>
    </ModalProvider>
    // </Modal>
  );
}
