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
import ImageIcon from "@mui/icons-material/Image";
import { useEffect, useState } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { toast } from "react-toastify";
import Layout2 from "src/layout/Layout2";
import Header2 from "src/layout/header/Header2";

type UserInfoData = {
  file: string | null; // Store base64 string
  name: string;
  type: string;
  location: string;
  problem: string;
};

export default function FormRequest() {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfoData>({
    file: null,
    name: "",
    type: "",
    location: "",
    problem: "",
  });
  const [errors, setErrors] = useState({
    file: false,
    name: false,
    type: false,
    location: false,
    problem: false,
  });

  useEffect(() => {
    // Load data from localStorage when component mounts
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUserInfo(parsedUserInfo);
      if (parsedUserInfo.file) {
        setSelectedFileName("Uploaded File");
      }
    }
  }, []);

  useEffect(() => {
    // Save userInfo to localStorage whenever it changes
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo((prev) => ({
          ...prev,
          file: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo((prev) => ({
          ...prev,
          file: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const handleClearFile = () => {
    setSelectedFileName("");
    setFile(null);
    setUserInfo((prev) => ({
      ...prev,
      file: null,
    }));
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    setUserInfo((prev) => ({
      ...prev,
      type: event.target.value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      file: userInfo.file === null,
      name: userInfo.name.trim() === "",
      type: userInfo.type.trim() === "",
      location: userInfo.location.trim() === "",
      problem: userInfo.problem.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log(userInfo);
      localStorage.removeItem("userInfo");
      setUserInfo({
        file: null,
        name: "",
        type: "",
        location: "",
        problem: "",
      });
      setSelectedFileName("");
      setFile(null);
      toast.success("Profile details saved successfully");
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
                <Box
                  sx={{
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <ImageIcon sx={{ pr: 2, fontSize: "40px" }} />
                  <Typography
                    variant="subtitle1"
                    color="blue-gray-600"
                    className="mb-1"
                  >
                    Upload image
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ my: 2 }}>
                  Upload the image of car is broken here!
                </Typography>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <div
                  style={{
                    border: "2px dashed #ccc",
                    borderRadius: "5px",
                    padding: "20px",
                    textAlign: "center",
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                  }}
                  onDrop={handleDrop}
                >
                  <Box
                    sx={{
                      py: 3,
                      display: "grid",
                      alignItems: "center",
                      justifyItems: "center",
                      gap: 1,
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => {
                        const fileInput = document.getElementById("fileInput");
                        if (fileInput) {
                          fileInput.click();
                        }
                      }}
                    >
                      Add File
                    </Button>
                    <Typography color="blue-gray-600">
                      Or drag and drop files
                    </Typography>
                    {selectedFileName && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography color="blue-gray-600">
                          {selectedFileName}
                        </Typography>
                        <IconButton onClick={handleClearFile}>X</IconButton>
                      </div>
                    )}

                    <div>
                      {userInfo.file && (
                        <img
                          style={{
                            maxWidth: "250px",
                            height: "auto",
                          }}
                          src={userInfo.file}
                          alt="Selected Image"
                        />
                      )}
                    </div>
                  </Box>
                </div>
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
                  <Box sx={{ my: 4 }}>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      Name
                    </Typography>
                    <TextField
                      name="name"
                      value={userInfo.name}
                      required
                      label="Your Name"
                      fullWidth
                      helperText="Please enter your name"
                      onChange={handleInputChange}
                    ></TextField>
                  </Box>
                  <Box sx={{ my: 8 }}>
                    <Typography sx={{ mb: 2 }}>Problem's type</Typography>
                    <FormControl required sx={{ minWidth: 120 }}>
                      <InputLabel>Type</InputLabel>
                      <Select
                        name="type"
                        value={userInfo.type}
                        label="Type *"
                        onChange={handleTypeChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Accident">Accident</MenuItem>
                        <MenuItem value="Out of gas">Out of gas</MenuItem>
                        <MenuItem value="Puncture tires">
                          Puncture tires
                        </MenuItem>
                      </Select>
                      <FormHelperText>
                        Please enter your types of problems
                      </FormHelperText>
                    </FormControl>
                  </Box>
                  <Box sx={{ my: 4 }}>
                    <Typography sx={{ mb: 2 }}>Problem</Typography>
                    <TextField
                      value={userInfo.problem}
                      multiline
                      required
                      name="problem"
                      onChange={handleInputChange}
                      label="Your Problem"
                      fullWidth
                      helperText="Please tell us the problem with your car"
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
                    <LocationOnIcon sx={{ pr: 2, fontSize: "40px" }} />
                    <Typography
                      variant="subtitle1"
                      color="blue-gray-600"
                      className="mb-1"
                    >
                      Location and time
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ mt: 4, mb: 3 }}>Location</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        cursor: "pointer",
                        alignItems: "center",
                      }}
                    >
                      <MapOutlinedIcon fontSize="small" sx={{ pr: 1 }} />
                      <Button>Get your location by Google Maps</Button>
                    </Box>
                    <TextField
                      value={userInfo.location}
                      required
                      label="Your Location"
                      name="location"
                      onChange={handleInputChange}
                      fullWidth
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
