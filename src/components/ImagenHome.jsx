import React from "react";
import { Box } from "@mui/material";
import bgHome from "../assets/images/bg2.png";

const ImagenHome = () => {
  return (
    <Box sx={{ width: "100%", maxHeight: "700px" }}>
      <img src={bgHome} alt="estudio" width="100%" height="100%" />
    </Box>
  );
};

export default ImagenHome;
