import React, { useState } from "react";
import { Box, Typography, Button, Paper, Grid, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const navigate = useNavigate();
    
    // Giả sử dữ liệu người dùng được lấy từ backend và được lưu trong state
    const [userData, setUserData] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        dateOfBirth: "01/01/1990",
        address: "123 Main Street, City, Country",
        password: "********", // Đây chỉ là một giá trị tạm thời, không nên lưu mật khẩu trong state
    });

    // State để quản lý trạng thái chỉnh sửa
    const [isEditing, setIsEditing] = useState(false);

    // Hàm xử lý lưu thông tin đã chỉnh sửa
    const handleSave = () => {
        // Thực hiện lưu thông tin mới vào backend
        // Sau khi lưu, có thể chuyển về trang chi tiết hoặc trang chính
        setIsEditing(false); // Kết thúc trạng thái chỉnh sửa
    }

    return (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                User Profile
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, margin: '0 auto', maxWidth: 400 }}>
                        <Typography variant="body1" gutterBottom sx={{ textAlign: 'left', marginLeft: '16px' }}>
                            <strong>Name:</strong> {isEditing ? (
                                <TextField
                                    fullWidth
                                    defaultValue={userData.name}
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
                    <Paper sx={{ p: 2, margin: '0 auto', maxWidth: 400 }}>
                        <Typography variant="body1" gutterBottom sx={{ textAlign: 'left', marginLeft: '16px' }}>
                            <strong>Email:</strong> {isEditing ? (
                                <TextField
                                    fullWidth
                                    defaultValue={userData.email}
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
                    <Paper sx={{ p: 2, margin: '0 auto', maxWidth: 400 }}>
                        <Typography variant="body1" gutterBottom sx={{ textAlign: 'left', marginLeft: '16px' }}>
                            <strong>Date of Birth:</strong> {isEditing ? (
                                <TextField
                                    fullWidth
                                    defaultValue={userData.dateOfBirth}
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
                    <Paper sx={{ p: 2, margin: '0 auto', maxWidth: 400 }}>
                        <Typography variant="body1" gutterBottom sx={{ textAlign: 'left', marginLeft: '16px' }}>
                            <strong>Address:</strong> {isEditing ? (
                                <TextField
                                    fullWidth
                                    defaultValue={userData.address}
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
                    <Paper sx={{ p: 2, margin: '0 auto', maxWidth: 400 }}>
                        <Typography variant="body1" gutterBottom sx={{ textAlign: 'left', marginLeft: '16px' }}>
                            <strong>Password:</strong> {isEditing ? (
                                <TextField
                                    fullWidth
                                    defaultValue={userData.password}
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
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                <Box mr={2}>
                    {isEditing ? (
                        <Button variant="contained" onClick={handleSave}>Save</Button>
                    ) : (
                        <Button variant="contained" onClick={() => setIsEditing(true)}>Edit</Button>
                    )}
                </Box>
                <Button variant="contained" onClick={() => navigate("/")}>Go back to Home</Button>
            </Box>
        </Box>
    );
}
