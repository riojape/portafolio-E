import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import CardWitness from "./CardWitness";

const Witnesses = () => {
  const theme = useTheme();
  const styles = {
    boxContainer: {
      display: "flex",
      flexDirection: "column",
      padding: { xs: "40px 20px", sm: "40px 72px" },
    },
    boxWitnesses: {
      display: "flex",
      flexWrap: "wrap",
      gap: { xs: "10px 30px", md: "20px 30px", lg: "20px 60px" },
      alignItems: "center",
      marginTop: "55px",
    },
  };
  return (
    <Box sx={styles.boxContainer}>
      <Typography variant="h2" color="grey.50">
        Testimonios
      </Typography>
      <Box sx={styles.boxWitnesses}>
        <CardWitness />
        <CardWitness />
        <CardWitness />
        <CardWitness />
        <CardWitness />
        <CardWitness />
      </Box>
    </Box>
  );
};

export default Witnesses;
