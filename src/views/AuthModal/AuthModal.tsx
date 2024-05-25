import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Tab,
  Tabs,
} from "@mui/material";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const [isLoginMode, setIsLoginMode] = useState(true); // Chế độ đăng nhập mặc định
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleTabChange = (_event: React.ChangeEvent<{}>, newValue: boolean) => {
    setIsLoginMode(newValue);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Xác minh rằng mật khẩu và mật khẩu xác nhận khớp nhau
    if (password === confirmPassword) {
      // Thực hiện đăng nhập hoặc đăng ký tùy thuộc vào chế độ hiện tại
      if (isLoginMode) {
        // Xử lý đăng nhập
      } else {
        // Xử lý đăng ký
      }
    } else {
      // Nếu mật khẩu không khớp, hiển thị thông báo hoặc thực hiện hành động khác
      setPasswordsMatch(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-login-title"
      aria-describedby="modal-login-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: '10px'
        }}
      >
        <Tabs value={isLoginMode} onChange={handleTabChange}>
          <Tab label="Login" value={true} />
          <Tab label="Sign Up" value={false} />
        </Tabs>
        <Typography id="modal-login-title" variant="h6" component="h2">
          {isLoginMode ? "Login" : "Sign Up"}
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
        />
        {!isLoginMode && (
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!passwordsMatch}
            helperText={!passwordsMatch && "Passwords do not match"}
          />
        )}
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          {isLoginMode ? "Login" : "Sign Up"}
        </Button>
      </Box>
    </Modal>
  );
}
