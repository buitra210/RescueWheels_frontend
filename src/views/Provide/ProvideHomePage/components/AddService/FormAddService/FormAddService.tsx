import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  Paper,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Layout2 from "src/layout/Layout2";
import Header2 from "src/layout/header/Header2";
import { Delete } from "@mui/icons-material";

type ServiceInfo = {
  serviceName: string;
  serviceDescription: string;
  fromProviderId: string;
};

export default function FormAddService() {
  const [services, setServices] = useState<ServiceInfo[]>([]);
  console.log("acc", services);
  const [newService, setNewService] = useState<
    Omit<ServiceInfo, "fromProviderId">
  >({
    serviceName: "",
    serviceDescription: "",
  });

  // Assuming you have a way to get the providerId, e.g., from user info or context
  const providerId = "60c72b2f5f1b2c001c8d4e58"; // Replace this with actual logic to get the provider ID

  const handleNewServiceChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newService.serviceName.trim() && newService.serviceDescription.trim()) {
      setServices((prevServices) => [
        ...prevServices,
        { ...newService, fromProviderId: providerId },
      ]);
      setNewService({
        serviceName: "",
        serviceDescription: "",
      });
      toast.success("Service added successfully");
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  const handleDeleteService = (index: number) => {
    setServices((prevServices) => prevServices.filter((_, i) => i !== index));
  };

  return (
    <Layout2>
      <Header2>
        <Container>
          <Box>
            <Paper sx={{ px: 3, py: 3, my: 5 }}>
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ pt: 2 }}
                >
                  Your Services
                </Typography>
                <Box sx={{ pb: 4 }}>
                  {services.map((service, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {service.serviceName}
                      </Typography>
                      <Typography variant="body1">
                        {service.serviceDescription}
                      </Typography>
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
                <Typography gutterBottom variant="h5" component="div">
                  Add Service
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ pt: 2 }}
                >
                  Do you have a new service to add? Let's add it!
                </Typography>
                <Box
                  sx={{
                    pr: 6,
                    py: 5,
                  }}
                >
                  <form onSubmit={handleFormSubmit}>
                    <TextField
                      autoFocus
                      required
                      margin="dense"
                      id="serviceName"
                      name="serviceName"
                      label="Service Name"
                      type="text"
                      fullWidth
                      variant="standard"
                      value={newService.serviceName}
                      onChange={handleNewServiceChange}
                    />
                    <TextField
                      required
                      margin="dense"
                      id="serviceDescription"
                      name="serviceDescription"
                      label="Service Description"
                      type="text"
                      fullWidth
                      variant="standard"
                      value={newService.serviceDescription}
                      onChange={handleNewServiceChange}
                    />
                    <Button
                      onClick={() =>
                        setNewService({
                          serviceName: "",
                          serviceDescription: "",
                        })
                      }
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Add Service</Button>
                  </form>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Header2>
    </Layout2>
  );
}
