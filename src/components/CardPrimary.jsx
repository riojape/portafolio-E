import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, styled, useTheme } from "@mui/material";

import proyect from "../assets/images/bg.png";

const CardPrimary = () => {
  const theme = useTheme();
  const styles = {
    box: {
      position: "relative",
      height: { xs: "510px", sm: "560px" },
    },
    card: {
      width: { xs: "290px", sm: "623px" },
      height: { xs: "380px", sm: "320px" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "absolute",
      zIndex: "1",
      top: "90px",
      left: { xs: "-10px", sm: "-24px" },
      padding: "8px",
      paddingTop: "24px",
      borderRadius: 0,
      backgroundColor: "#0f0e17",
      boxShadow: theme.shadows[24],
    },
    cardActions: {
      flexDirection: { xs: "column", sm: "row-reverse" },
      justifyContent: { xs: "center", sm: "flex-end" },
      padding: "16px",
    },
    button1: {
      width: { xs: "272px", md: "150px" },
      height: "48px",
      mb: { xs: "16px" },
    },
    button2: {
      width: { xs: "272px" },
      height: "48px",
      mb: { xs: "16px" },
      mr: { sm: "16px" },
    },
  };

  return (
    <Box sx={styles.box}>
      <Image src={proyect} alt="imagen del proyecto" />
      <Card sx={styles.card}>
        <CardContent>
          <Typography component="div" variant="h5" color="grey.50">
            NIKO
          </Typography>
          <Typography variant="body1" color="grey.500">
            Niko es una de las marcas y proveedores de equipamiento deportivo
            más reconocidas y valiosas en todo el mundo.
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={styles.cardActions}>
          <Button size="small" variant="outlined" sx={styles.button1}>
            Ver código
          </Button>
          <Button size="small" variant="contained" sx={styles.button2}>
            Ver proyecto completo
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

const Image = styled("img")`
  width: 100%;
  object-fit: cover;
  height: 279px;

  @media (min-width: 600px) {
    height: 540px;
  }
`;

export default CardPrimary;
