import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";
import PanToolAltOutlinedIcon from "@mui/icons-material/PanToolAltOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoxCustom from "src/components/BoxCustom/BoxCustom";

export default function ProvideFormUrgent() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const navigateToViewRequest = () => {
    navigate("/allrequest");
  };
  return (
    <Box
      sx={{
        zIndex: 3,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "98vh",
      }}
    >
      {/* <BoxCustom label="Urgent">
        <Box
          sx={{
            paddingTop: { xs: "2%", xsm: "10%", md: "5px" },
            color: "#565e6d",
            pl: { xs: "10%", xsm: "10%", md: "5%" },
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "30px", xsm: "28px", xs: "23px" },
              pt: { xs: "20%" },
              pb: { xs: "10%", md: "5%" },
            }}
          >
            Now having 30 requests
          </Typography>
          <Box
            sx={{
              display: "flex",
              paddingBottom: { md: "100px", xs: "60px" },
              cursor: "pointer",
            }}
            onClick={handleClickOpen}
          >
            <PersonPinCircleOutlinedIcon sx={{ color: "#565e6d" }} />
            <Typography sx={{ fontSize: { xsm: "23px", xs: "15px" } }}>
              Click here to add your location
            </Typography>
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleClose} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ fontWeight: 600 }}>
              Let's view all forms!
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={navigateToViewRequest}
              sx={{ color: "#d9d9d9", mb: 3, cursor: "pointer" }}
            >
              View Now
            </Button>
          </Box>
        </Box>
      </BoxCustom> */}
      <Card sx={{ maxWidth: 345, height: "60%" }}>
        <CardMedia
          sx={{ height: 140 }}
          image="public/img/fixcar1.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ pb: 2, pt: 3 }}
          >
            Now having 30 requests
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Let's view all forms!
          </Typography>
          <Box
            sx={{
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              py: 2,
            }}
            onClick={handleClickOpen}
          >
            <PersonPinCircleOutlinedIcon
              sx={{ color: "#565e6d", fontSize: "24px" }}
            />
            <Button
              variant={"text"}
              sx={{ fontSize: { xs: "15px", md: "15px" } }}
            >
              Click here to add your location
            </Button>
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Typography sx={{ pt: 2, pb: 3 }}>
                  Let Google help apps determine location. This means sending
                  anonymous location data to
                </Typography>
                <Typography sx={{ pb: 1 }}>
                  {" "}
                  Google, even when no apps are running.
                </Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleClose} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "flex-end", pr: 6 }}
        >
          <Button
            size="small"
            variant="gradient"
            onClick={navigateToViewRequest}
          >
            Share
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
