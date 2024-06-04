import { Box, SxProps } from "@mui/material";
import React from "react";
type BoxCustomProps = {
  children: React.ReactNode;
  sx?: SxProps;
  sxInnerBox?: SxProps;
  label: string;
};
export default function BoxCustom({
  children,
  sx,
  sxInnerBox,
  label,
}: BoxCustomProps) {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        width: { xs: "70%", md: "500px", xsm: "60%" },
        marginLeft: "15%",
        position: "relative",
        ...sx,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#565e6d",
          width: "200px",
          height: "30px",
          position: "absolute",
          top: "-20px",
          color: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   width: "60%",
          //   height: "8%",
          //   display: "flex",
          //   justifyContent: "center",
          //   transform: "translateY(-50%)",
          ...sxInnerBox,
        }}
      >
        {label}
      </Box>
      {children}
    </Box>
  );
}
