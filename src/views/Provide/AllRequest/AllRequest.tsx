import { Box } from "@mui/material";
import Overview from "./Overview/Overview";
import AllForms from "./AllForms/AllForms";

export default function AllRequest() {
  return (
    <Box sx={{ pt: 7 }}>
      <Overview />
      <AllForms />
    </Box>
  );
}
