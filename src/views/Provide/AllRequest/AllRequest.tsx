import { Box } from "@mui/material";
import Overview from "./Overview/Overview";
import AllForms from "./AllForms/AllForms";
import Layout2 from "src/layout/Layout2";
import Header2 from "src/layout/header/Header2";

export default function AllRequest() {
  return (
    <Layout2>
      <Header2>
        <Box sx={{ pt: 7, backgroundColor: "black" }}>
          <Overview />
          <AllForms />
        </Box>
      </Header2>
    </Layout2>
  );
}
