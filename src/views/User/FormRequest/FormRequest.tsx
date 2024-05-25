import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
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

export default function FormRequest() {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [file, setFile] = useState(null);
  const [userInfo, setUserInfo] = useState(() => {
    const savedUserInfo = localStorage.getItem("userInfo");
    if (savedUserInfo) {
      return JSON.parse(savedUserInfo);
    } else {
      return {
        file: "",
        name: "",
        type: "",
        location: "",
        problem: "",
      };
    }
  });
  console.log(userInfo);

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFileName(file.name);
    setUserInfo({ ...userInfo, file: file });
    setFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFileName(file.name);
    setUserInfo({ ...userInfo, file: file });
    setFile(file);
  };

  const handleClearFile = () => {
    setSelectedFileName("");
    setFile(null);
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    setUserInfo({ ...userInfo, type: event.target.value });
  };

  const handleSave = () => {
    console.log(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    toast.success("Profile details saved successfully");
  };

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  return (
    <Container>
      <Box>
        <Box sx={{ mt: 3, pb: 3, borderBottom: "1px solid #ccc" }}>
          <Box sx={{ display: "flex" }}>
            <ImageIcon sx={{ pr: 2 }} />
            <Typography color="blue-gray-600" className="mb-1">
              Upload image
            </Typography>
          </Box>
          <Typography sx={{ my: 2 }}>
            Upload the image of car is broken here!
          </Typography>
          <input
            value={userInfo.file}
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
                  <IconButton onClick={handleClearFile}></IconButton>
                </div>
              )}

              <div>
                {file && (
                  <img
                    style={{
                      maxWidth: "250px",
                      height: "auto",
                    }}
                    src={URL.createObjectURL(file)}
                    alt="Selected Image"
                  />
                )}
              </div>
            </Box>
          </div>
        </Box>
        <Box>
          <Box sx={{ mt: 3, pb: 3, borderBottom: "1px solid #ccc" }}>
            <Box sx={{ display: "flex" }}>
              <ErrorOutlineIcon sx={{ pr: 2 }} />
              <Typography sx={{ mb: 2 }}>General information</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ mb: 2 }}>Name</Typography>
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
            <Box sx={{ mb: 2 }}>
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
                  <MenuItem value={1}>Accident</MenuItem>
                  <MenuItem value={2}>Out of gas</MenuItem>
                  <MenuItem value={3}>Puncture tires</MenuItem>
                </Select>
                <FormHelperText>
                  Pleaser enter your types of problems
                </FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{ mb: 2 }}>
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
        <Box>
          <Box sx={{ mt: 3, pb: 3, borderBottom: "1px solid #ccc" }}>
            <Box sx={{ display: "flex" }}>
              <LocationOnIcon sx={{ pr: 2 }} />
              <Typography sx={{ mb: 2 }}>Location and time</Typography>
            </Box>
            <Box>
              <Typography sx={{ mb: 2 }}>Location</Typography>
              <Box sx={{ display: "flex", cursor: "pointer" }}>
                <MapOutlinedIcon sx={{ pr: 1 }} />
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
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button onClick={handleSave}>Submit</Button>
      </Box>
    </Container>
  );
}
