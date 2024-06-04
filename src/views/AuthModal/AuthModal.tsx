import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Stack,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSwitchAuth = () => {
    setIsLogin(!isLogin);
    // Reset form fields when switching between login and signup
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPasswordsMatch(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic
    } else {
      if (password !== confirmPassword) {
        setPasswordsMatch(false);
      } else {
        // Handle register logic
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(true); // Reset password match status when changing confirm password
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: 400,
          borderRadius: 4,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5">{isLogin ? "Log In" : "Sign Up"}</Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} mt={2}>
              <TextField
                required
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
              />
              <TextField
                required
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
              />
              {!isLogin && (
                <TextField
                  required
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  error={!passwordsMatch}
                  helperText={!passwordsMatch && "Passwords do not match"}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              )}
              <Button type="submit" variant="contained">
                {isLogin ? "Log In" : "Sign Up"}
              </Button>
            </Stack>
          </form>
          <Typography mt={2} onClick={handleSwitchAuth} style={{ cursor: "pointer" }}>
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Log In"}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
