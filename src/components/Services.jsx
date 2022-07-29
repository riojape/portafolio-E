import React from "react";
import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Services = () => {
  const theme = useTheme();
  const styles = {
    boxServices: {
      background: "linear-gradient(135deg, #FEB692 0%, #EA5455 100%)",
      display: "flex",
      flexDirection: "column",
      padding: { xs: "40px 20px", sm: "40px 72px" },
    },
    texto1: {
      marginTop: { xs: "16px", sm: "24px" },
    },
    button: {
      marginTop: { xs: "16px", sm: "24px" },
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.body.main,
      height: "48px",
      width: { xs: "320px", sm: "auto" },
    },
  };
  return (
    <Box sx={styles.boxServices}>
      <Typography variant="h2" mb="48px">
        Servicios
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="flex-start"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={{ xs: 4, md: 6, lg: 10 }}
      >
        <Box>
          <Typography variant="h5">Diseño</Typography>
          <Typography variant="body1" sx={styles.texto1}>
            Experiencia de usuario
          </Typography>
          <Typography variant="body1" sx={styles.texto1}>
            Interfaz de usuario
          </Typography>
          <Typography variant="body1" sx={styles.texto1}>
            Aplicaciones web
          </Typography>
          <Typography variant="body1" sx={styles.texto1}>
            Prueba de concepto
          </Typography>
          <Button variant="contained" sx={styles.button}>
            Ver servicios de diseño
            <ArrowForwardIcon sx={{ ml: "5px" }} />
          </Button>
        </Box>
        <Box>
          <Typography variant="h5">Desarrollo</Typography>
          <Typography variant="body1" sx={styles.texto1}>
            Aplicaciones móviles
          </Typography>
          <Typography variant="body1" sx={styles.texto1}>
            Sitios web
          </Typography>
          <Typography variant="body1" sx={styles.texto1}>
            Aplicaciones web progresivas
          </Typography>
          <Button variant="contained" sx={styles.button}>
            Ver servicios de desarollo <ArrowForwardIcon sx={{ ml: "5px" }} />
          </Button>
        </Box>
        <Box>
          <Typography variant="h5">Marca</Typography>
          <Typography variant="body1" sx={styles.texto1}>
            Identidad de la marca
          </Typography>
          <Typography variant="body1" sx={styles.texto1}>
            Estrategia de marca
          </Typography>
          <Button variant="contained" sx={styles.button}>
            Ver servicios de marca <ArrowForwardIcon sx={{ ml: "5px" }} />
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Services;
