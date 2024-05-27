import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import DynamicFormOutlinedIcon from "@mui/icons-material/DynamicFormOutlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

export default function Overview() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: "flex", my: 2, alignItems: "center" }}>
          <GridViewOutlinedIcon sx={{ fontSize: "30px" }} />
          <Typography variant="subtitle1" sx={{ fontSize: "20px", ml: 1 }}>
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
          <Paper
            sx={{
              width: "30%",
              px: 2,
              my: 1,
              py: 3,
            }}
          >
            {" "}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="h3" sx={{ fontSize: "20px" }}>
                  Total
                </Typography>
                <Typography variant="h4" sx={{ fontSize: "30px", mb: "10px" }}>
                  300 forms
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ArrowDropUpIcon fontSize="small" />
                  <Typography>
                    {" "}
                    <span style={{ fontWeight: 700 }}>20%</span> period of
                    change
                  </Typography>
                </Box>
              </Box>
              <DynamicFormOutlinedIcon />
            </Box>
          </Paper>

          <Paper
            sx={{
              width: "30%",
              px: 2,
              my: 1,
              py: 3,
            }}
          >
            {" "}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="h3" sx={{ fontSize: "20px" }}>
                  Total
                </Typography>
                <Typography variant="h4" sx={{ fontSize: "30px", mb: "10px" }}>
                  300 forms
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ArrowDropUpIcon fontSize="small" />
                  <Typography>
                    {" "}
                    <span style={{ fontWeight: 700 }}>20%</span> period of
                    change
                  </Typography>
                </Box>
              </Box>
              <DynamicFormOutlinedIcon />
            </Box>
          </Paper>

          <Paper
            sx={{
              width: "30%",
              px: 2,
              my: 1,
              py: 3,
            }}
          >
            {" "}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="h3" sx={{ fontSize: "20px" }}>
                  Total
                </Typography>
                <Typography variant="h4" sx={{ fontSize: "30px", mb: "10px" }}>
                  300 forms
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ArrowDropUpIcon fontSize="small" />
                  <Typography>
                    {" "}
                    <span style={{ fontWeight: 700 }}>20%</span> period of
                    change
                  </Typography>
                </Box>
              </Box>
              <DynamicFormOutlinedIcon />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}
