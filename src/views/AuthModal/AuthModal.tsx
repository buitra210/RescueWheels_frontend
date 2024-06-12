import React, {FormEvent, useState} from "react";
import {Box, Button, IconButton, Modal, Stack, TextField, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

interface AuthModalProps {
    open: boolean;
    onClose: () => void;
}

const serverUrl = " http://localhost:3055"

export default function AuthModal({open, onClose}: AuthModalProps) {
    const [isLogin, setIsLogin] = useState(true);
    const [box_warning, setBoxWarning] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [gender, setGender] = useState("")
    const [address, setAddress] = useState("")
    const navigate = useNavigate()

    const handleSwitchAuth = () => {
        setIsLogin(!isLogin);
        // Reset form fields when switching between login and signup
        setBoxWarning("")
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setAddress("");
        setGender("");
        setConfirmPassword("");
        setPasswordsMatch(true);
    };

    if (localStorage.getItem("id") != null) {
        navigate("/userhomepage")
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isLogin) {
            const body = new URLSearchParams();
            body.append('email', email);
            body.append('password', password);

            const signInUrl = `${serverUrl}/signIn`
            const res = await axios.post(signInUrl, body)
            if (res.status === 200) {
                localStorage.setItem('id', res.data.id)
                localStorage.setItem("role", res.data.role)
                localStorage.setItem('token', res.data.token)
                navigate('/userhomepage')
            } else {
                setBoxWarning("Invalid email or password")
            }
        } else {
            if (password !== confirmPassword) {
                setPasswordsMatch(false);
            } else {
                // Handle register logic
                const body = new URLSearchParams();
                body.append('email', email);
                body.append('password', password);
                body.append("firstName", firstName)
                body.append("lastName", lastName)
                body.append("phoneNumber", phoneNumber)
                body.append("address", address)


                const signUpUrl = `${serverUrl}/signUp`
                const res = await axios.post(signUpUrl, body)
                if (res.status === 200) {
                    navigate('/ ')
                    setBoxWarning("")
                } else {
                    setBoxWarning("Invalid email or password")
                }
            }
        }
    }

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    }

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
                    <CloseIcon/>
                </IconButton>
                <Box sx={{flexGrow: 1}}>
                    <Typography variant="h5">{isLogin ? "Log In" : "Sign Up"}</Typography>
                    <div id="box-warning">
                    </div>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2} mt={2}>
                            {!isLogin && (
                                <Box>
                                    <TextField
                                        required
                                        id="firstName"
                                        label="firstName"
                                        type="text"
                                        variant="outlined"
                                        value={firstName}
                                        onChange={handleFirstNameChange}
                                        style={{width: '50%'}}
                                    />
                                    <TextField
                                        required
                                        id="lastName"
                                        label="lastName"
                                        type="text"
                                        variant="outlined"
                                        value={lastName}
                                        onChange={handleLastNameChange}
                                        style={{width: '50%'}}
                                    />
                                </Box>
                            )}
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
                                <Stack>
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
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        label="Phone Number"
                                        type="text"
                                        variant="outlined"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                    />
                                    <TextField
                                        required
                                        id="address"
                                        label="Address"
                                        type="text"
                                        variant="outlined"
                                        value={address}
                                        onChange={handleAddressChange}
                                    />
                                </Stack>
                            )}
                            <Button type="submit" variant="contained">
                                {isLogin ? "Log In" : "Sign Up"}
                            </Button>
                        </Stack>
                    </form>
                    <Typography mt={2} onClick={handleSwitchAuth} style={{cursor: "pointer"}}>
                        {isLogin
                            ? "Don't have an account? Sign Up"
                            : "Already have an account? Log In"}
                    </Typography>
                </Box>
            </Box>
        </Modal>
    );
}
