import { Box, Button, Typography } from "@mui/material";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";
import PanToolAltOutlinedIcon from "@mui/icons-material/PanToolAltOutlined";
import BoxCustom from "src/components/BoxCustom/BoxCustom";
import ButtonCustom from "src/components/ButtonCustom/ButtonCustom";

export default function FormUrgent() {
  return (
    <Box
      sx={{
        zIndex: 3,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "98vh",
      }}
    >
      <BoxCustom label="Urgent">
        <Box
          sx={{
            paddingTop: { xs: "2%", xsm: "10%", md: "5px" },
            color: "#565e6d",
            pl: { xs: "10%", xsm: "10%", md: "5%" },
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "30px", xsm: "28px", xs: "23px" },
              pt: { xs: "20%" },
              pb: { xs: "10%", md: "5%" },
            }}
          >
            Are you having car problems?
          </Typography>
          <Box
            sx={{ display: "flex", paddingBottom: { md: "100px", xs: "60px" } }}
          >
            <PersonPinCircleOutlinedIcon sx={{ color: "#565e6d" }} />
            <Typography sx={{ fontSize: { xsm: "23px", xs: "15px" } }}>
              Click here to add your location
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ fontWeight: 600 }}>
              Let's fill this form!
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <ButtonCustom sx={{ color: "#FFFFFF", mb: 3 }}>
              Fill now
            </ButtonCustom>
          </Box>
        </Box>
      </BoxCustom>
    </Box>
  );
}
