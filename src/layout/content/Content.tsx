import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Content({ headerHeight }: { headerHeight: string }) {
  return (
    <Box
      sx={{
        minHeight: `calc(100svh - ${headerHeight})`,
        zIndex: 2,
      }}
    >
      <Outlet />
    </Box>
  );
}
