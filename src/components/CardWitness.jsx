import React from "react";
import { Avatar, Box, Grid, Typography, useTheme } from "@mui/material";
import witness from "../assets/images/witness1.png";

const CardWitness = () => {
  const theme = useTheme();
  const styles = {
    boxContainer: {
      maxWidth: "400px",
      height: { xs: "224px", md: "260px" },
    },
    boxWitness: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
  };
  return (
    <Box sx={styles.boxContainer}>
      <Box sx={styles.boxWitness}>
        <Avatar
          alt="foto del testigo"
          src={witness}
          sx={{ width: 48, height: 48 }}
        />
        <Typography variant="body2" color="primary">
          Juan Antonio
        </Typography>
      </Box>
      <Typography variant="body2" color="grey.400">
        Tengo algunos años trabajando con Javascript y aún así aprendí varias
        cosas importantes de Antonio y como utiliza Javascript en el día a día.
      </Typography>
    </Box>
  );
};

export default CardWitness;
