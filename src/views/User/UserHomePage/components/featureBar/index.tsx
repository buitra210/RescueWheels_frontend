import { Box, Stack, Typography } from "@mui/material";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import BikeScooterOutlinedIcon from "@mui/icons-material/BikeScooterOutlined";
export default function FeatureBar() {
  return (
    <Stack
      direction="row"
      sx={{
        height: "250px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          marginLeft: "50px",
          marginRight: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 100,
            backgroundColor: "#EEEEEE",
            marginTop: "20px",
            height: "100px",
            color: "black",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <OfflineBoltOutlinedIcon sx={{ width: "80%", height: "80%" }} />
        </Box>
        <Typography
          alignItems="center"
          sx={{ color: "#EEEEEE", marginTop: "15px" }}
        >
          {" "}
          Quick Rescue
        </Typography>
      </Stack>
      <Stack
        sx={{
          marginLeft: "50px",
          marginRight: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 100,
            backgroundColor: "#EEEEEE",
            marginTop: "20px",
            height: "100px",
            color: "black",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <QueryBuilderOutlinedIcon sx={{ width: "80%", height: "80%" }} />
        </Box>
        <Typography align="center" sx={{ color: "#EEEEEE", marginTop: "15px" }}>
          {" "}
          Served 24/7
        </Typography>
      </Stack>
      <Stack
        sx={{
          marginLeft: "50px",
          marginRight: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 100,
            backgroundColor: "#EEEEEE",
            marginTop: "20px",
            height: "100px",
            color: "black",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BikeScooterOutlinedIcon sx={{ width: "80%", height: "80%" }} />
        </Box>
        <Typography align="center" sx={{ color: "#EEEEEE", marginTop: "15px" }}>
          {" "}
          Salvage all types of vehicles
        </Typography>
      </Stack>
    </Stack>
  );
}
