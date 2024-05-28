import React, { useState, ChangeEvent } from "react";
import { Box, Typography, Button, Paper, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface UserData {
  name: string;
  email: string;
  dateOfBirth: string;
  address: string;
  password: string;
}

export default function Profile1() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "john.doe@example.com",
    dateOfBirth: "",
    address: "",
    password: "********", // Đây chỉ là một giá trị tạm thời, không nên lưu mật khẩu trong state
  });

  console.log(userData);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<UserData>({ ...userData });

  const handleSave = () => {
    setUserData(formValues); // Update the user data with form values
    setIsEditing(false); // Kết thúc trạng thái chỉnh sửa
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <Box sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Paper sx={{ p: 2, margin: "0 auto", maxWidth: 400 }}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "left", marginLeft: "16px" }}
            >
              <strong>Name:</strong>{" "}
              {isEditing ? (
                <TextField
                  fullWidth
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                />
              ) : (
                userData.name
              )}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, margin: "0 auto", maxWidth: 400 }}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "left", marginLeft: "16px" }}
            >
              <strong>Email:</strong>{" "}
              {isEditing ? (
                <TextField
                  fullWidth
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                />
              ) : (
                userData.email
              )}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, margin: "0 auto", maxWidth: 400 }}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "left", marginLeft: "16px" }}
            >
              <strong>Date of Birth:</strong>{" "}
              {isEditing ? (
                <TextField
                  fullWidth
                  name="dateOfBirth"
                  value={formValues.dateOfBirth}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                />
              ) : (
                userData.dateOfBirth
              )}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, margin: "0 auto", maxWidth: 400 }}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "left", marginLeft: "16px" }}
            >
              <strong>Address:</strong>{" "}
              {isEditing ? (
                <TextField
                  fullWidth
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                />
              ) : (
                userData.address
              )}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, margin: "0 auto", maxWidth: 400 }}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "left", marginLeft: "16px" }}
            >
              <strong>Password:</strong>{" "}
              {isEditing ? (
                <TextField
                  fullWidth
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  type="password"
                />
              ) : (
                userData.password
              )}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        <Box mr={2}>
          {isEditing ? (
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          ) : (
            <Button variant="contained" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
          )}
        </Box>
        <Button variant="contained" onClick={() => navigate("/")}>
          Go back to Home
        </Button>
      </Box>
    </Box>
  );
}
