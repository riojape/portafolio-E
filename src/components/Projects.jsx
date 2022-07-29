import React from "react";
import { Button, Grid, styled, Typography, useTheme } from "@mui/material";
import CardPrimary from "./CardPrimary";
import CardSecondary from "./CardSecondary";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Projects = () => {
  const theme = useTheme();
  const styles = {
    gridContainer: {
      backgroundColor: "#fff",
      width: "100%",
      margin: "0",
    },
    button: {
      border: "2px solid",
      width: "300px",
      margin: "40px auto",
      height: "50px",
      boxShadow: theme.shadows[3],
    },
  };
  return (
    <>
      <Grid container spacing={4} sx={styles.gridContainer}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" maxWidth="600px">
            Parece magia, funciona con código.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" maxWidth="500px">
            A lo largo de mi carrera como Frontend, he tenido el privilegio de
            trabajar en proyectos retadores e increíbles.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CardPrimary></CardPrimary>
        </Grid>
        <Grid item xs={12} lg={6}>
          <CardSecondary />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CardSecondary />
        </Grid>
        <Button size="large" color="body" variant="outlined" sx={styles.button}>
          Ver más proyectos
          <ArrowForwardIcon sx={{ ml: "5px" }} />
        </Button>
      </Grid>
    </>
  );
};

export default Projects;
