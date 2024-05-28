import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { toast } from "react-toastify";
import Layout2 from "src/layout/Layout2";
import Header2 from "src/layout/header/Header2";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";

type UserInfoSettingsData = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  gender: string;
};

export default function Profile() {
  const [userInfoSettings, setUserInfoSettings] =
    useState<UserInfoSettingsData>({
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      gender: "",
    });

  const [errors, setErrors] = useState({
    lastName: false,
    firstName: false,
    phone: false,
    address: false,
    gender: false,
  });

  useEffect(() => {
    const storedUserInfoSettings = localStorage.getItem("userInfo");
    if (storedUserInfoSettings) {
      const parsedUserInfoSettings = JSON.parse(storedUserInfoSettings);
      setUserInfoSettings(parsedUserInfoSettings);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userInfoSettings", JSON.stringify(userInfoSettings));
  }, [userInfoSettings]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfoSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenderChange = (event: SelectChangeEvent) => {
    setUserInfoSettings((prev) => ({
      ...prev,
      gender: event.target.value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: !userInfoSettings.firstName?.trim(),
      lastName: !userInfoSettings.lastName?.trim(),
      phone: !userInfoSettings.phone?.trim(),
      address: !userInfoSettings.address?.trim(),
      gender: !userInfoSettings.gender?.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log(userInfoSettings);
      localStorage.removeItem("userInfoSettings");
      setUserInfoSettings({
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        gender: "",
      });
      toast.success("Profile updated saved successfully");
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  return (
    <Layout2>
      <Header2>
        <Container>
          <Box>
            <Paper sx={{ px: 3, py: 3, my: 5 }}>
              <Box sx={{ pb: 3 }}>
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <GradeOutlinedIcon sx={{ pr: 2, fontSize: "40px" }} />
                    <Typography
                      variant="subtitle1"
                      color="blue-gray-600"
                      className="mb-1"
                    >
                      Required Information
                    </Typography>
                  </Box>
                  <Box sx={{ my: 4 }}>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      Gmail
                    </Typography>
                    <TextField
                      name="gmail"
                      value={"User's Gmail"}
                      required
                      fullWidth
                      onChange={handleInputChange}
                    ></TextField>
                  </Box>
                  <Box sx={{ my: 4 }}>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      Password
                    </Typography>
                    <TextField
                      name="password"
                      value={"User's Password"}
                      required
                      fullWidth
                      onChange={handleInputChange}
                    ></TextField>
                  </Box>
                </Box>
              </Box>
            </Paper>
            <Paper sx={{ px: 3, py: 3, my: 5 }}>
              <Box>
                <Box sx={{ mt: 3, pb: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyItems: "center",
                      alignItems: "center",
                    }}
                  >
                    <ErrorOutlineIcon sx={{ pr: 2, fontSize: "40px" }} />
                    <Typography
                      variant="subtitle1"
                      color="blue-gray-600"
                      className="mb-1"
                    >
                      General information
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        width: "60%",
                        my: 4,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                          First Name
                        </Typography>
                        <TextField
                          name="firstName"
                          value={userInfoSettings.firstName}
                          required
                          label="Your First Name"
                          fullWidth
                          onChange={handleInputChange}
                        ></TextField>
                      </Box>

                      <Box>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                          Last Name
                        </Typography>
                        <TextField
                          name="lastName"
                          value={userInfoSettings.lastName}
                          required
                          label="Your Last Name"
                          fullWidth
                          onChange={handleInputChange}
                        ></TextField>
                      </Box>
                    </Box>
                    <Box sx={{ my: 3 }}>
                      <Typography sx={{ mb: 2 }}>Gender</Typography>
                      <FormControl required sx={{ minWidth: 120 }}>
                        <InputLabel>Gender</InputLabel>
                        <Select
                          name="gender"
                          value={userInfoSettings.gender}
                          label="Gender *"
                          onChange={handleGenderChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                        </Select>
                        <FormHelperText>
                          Please enter your gender!
                        </FormHelperText>
                      </FormControl>
                    </Box>
                  </Box>
                  <Box sx={{ my: 2 }}>
                    <Typography sx={{ mb: 2 }}>Phone Number</Typography>
                    <TextField
                      name="phone"
                      value={userInfoSettings.phone}
                      required
                      label="Your Phone Number"
                      fullWidth
                      onChange={handleInputChange}
                      helperText="Please tell us your phone number to contact you"
                    ></TextField>
                  </Box>
                  <Box sx={{ my: 8 }}>
                    <Typography sx={{ mb: 2 }}>Address</Typography>
                    <TextField
                      name="address"
                      value={userInfoSettings.address}
                      required
                      multiline
                      label="Your Address"
                      fullWidth
                      onChange={handleInputChange}
                      helperText="Please tell us the address"
                    ></TextField>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button variant="outlined" onClick={handleSave}>
              Submit
            </Button>
          </Box>
        </Container>
      </Header2>
    </Layout2>
  );
}
