import { Box, Container, Grid, Typography } from "@mui/material";
import DynamicFormOutlinedIcon from "@mui/icons-material/DynamicFormOutlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

export default function Overview() {
  const isDisabled = true;
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: "flex", my: 2 }}>
          <GridViewOutlinedIcon />
          <Typography variant="h2" sx={{ fontSize: "20px", ml: 1 }}>
            Overview
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            height: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#dbdbdb",
              width: "30%",
              justifyContent: "space-between",
              px: 2,
              my: 1,
              py: 3,
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "20px" }}>Total</Typography>
              <Typography sx={{ fontSize: "30px", mb: "10px" }}>
                300 forms
              </Typography>
              <Box sx={{ display: "flex" }}>
                <ArrowDropUpIcon />
                <Typography>
                  {" "}
                  <span style={{ fontWeight: 700 }}>20%</span> period of change
                </Typography>
              </Box>
            </Box>
            <DynamicFormOutlinedIcon />
          </Box>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#dbdbdb",
              width: "30%",
              justifyContent: "space-between",
              px: 2,
              my: 1,
              py: 3,
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "20px" }}>Total</Typography>
              <Typography sx={{ fontSize: "30px", mb: "10px" }}>
                300 forms
              </Typography>
              <Box sx={{ display: "flex" }}>
                <ArrowDropUpIcon />
                <Typography>
                  {" "}
                  <span style={{ fontWeight: 700 }}>20%</span> period of change
                </Typography>
              </Box>
            </Box>
            <DynamicFormOutlinedIcon />
          </Box>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#dbdbdb",
              width: "30%",
              justifyContent: "space-between",
              px: 2,
              my: 1,
              py: 3,
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "20px" }}>Total</Typography>
              <Typography sx={{ fontSize: "30px", mb: "10px" }}>
                300 forms
              </Typography>
              <Box sx={{ display: "flex" }}>
                <ArrowDropUpIcon />
                <Typography>
                  {" "}
                  <span style={{ fontWeight: 700 }}>20%</span> period of change
                </Typography>
              </Box>
            </Box>
            <DynamicFormOutlinedIcon />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
