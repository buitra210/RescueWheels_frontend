import { Box, SxProps } from "@mui/material";
import React from "react";
type BoxCustomProps = {
  children: React.ReactNode;
  sx?: SxProps;
};
export default function ButtonCustom({ children, sx }: BoxCustomProps) {
  return (
    <Box
      sx={{
        background: "#565e6d",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30px",
        width: "50%",

        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
