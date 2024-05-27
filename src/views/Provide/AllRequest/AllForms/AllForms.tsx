import { Box, Container, Typography } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import TableForm from "./TableForm/TableForm";

export default function AllForms() {
  return (
    <Container>
      <Box>
        <Box sx={{ display: "flex", my: 2 }}>
          <GridViewOutlinedIcon />
          <Typography sx={{ fontSize: "20px", ml: 1 }}>All Forms</Typography>s
        </Box>
        <Box>
          <TableForm />
        </Box>
      </Box>
    </Container>
  );
}
