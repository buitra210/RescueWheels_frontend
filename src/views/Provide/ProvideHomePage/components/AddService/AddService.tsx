import { Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddService() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([
    "Service1",
    "Service2",
    "Service3",
  ]);
  const [newService, setNewService] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();

  const handleNewServiceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewService(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newService.trim()) {
      setServices((prevServices) => [...prevServices, newService]);
      setNewService("");
      navigate("/formaddservice");
    }
    handleClose();
  };

  const handleDeleteService = (index: number) => {
    setServices((prevServices) => prevServices.filter((_, i) => i !== index));
  };

  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ pt: 2 }}>
            Your Service
          </Typography>
          <Box>
            {services.map((service, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="body1">{service}</Typography>
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={() => handleDeleteService(index)}
                >
                  <Delete fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </Box>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Add Service
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ pt: 2 }}>
            Do you have new service to add? Let's add it!
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "flex-end", pr: 6, py: 5 }}
        >
          <Button variant="gradient" onClick={handleClickOpen}>
            Add Service
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <form onSubmit={handleFormSubmit}>
              <DialogTitle>Add Service</DialogTitle>
              <DialogContent>
                <Typography sx={{ pt: 2, pb: 3 }}>
                  Add your new service here
                </Typography>
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="newService"
                  name="newService"
                  label="New Service"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={newService}
                  onChange={handleNewServiceChange}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
              </DialogActions>
            </form>
          </Dialog>
        </CardActions>
      </Card>
    </Box>
  );
}
