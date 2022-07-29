import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  const theme = useTheme();
  const styles = {
    boxContainer: {
      backgroundColor: theme.palette.body.main,
      padding: { xs: "40px 20px", sm: "48px 72px" },
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
    },
    logo: {
      mr: { md: 20 },
      mb: { xs: 5, md: 0 },
      fontFamily: "monospace",
      fontWeight: 700,
      letterSpacing: ".3rem",
      color: theme.palette.body.contrastText,
      textDecoration: "none",
    },
  };
  return (
    <Box sx={styles.boxContainer}>
      <Typography variant="h4" component="a" href="/" sx={styles.logo}>
        LOGO
      </Typography>
      <Typography variant="body1" color="grey.400">
        Hecho con <FavoriteIcon /> por Antonio.
      </Typography>
      <Typography variant="body1" color="grey.400">
        Copyright 2021 - Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
