import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import React from "react";

const Contacto = () => {
  const theme = useTheme();
  const styles = {
    boxContainer: {
      background: "linear-gradient(135deg, #FEB692 0%, #EA5455 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: { xs: "40px 20px", sm: "40px 72px" },
      height: { xs: "725px", sm: "820px" },
    },
    boxContacto: {
      height: { xs: "580px", sm: "640px" },
      maxWidth: "545px",
      padding: { xs: "20px", sm: "48px" },
      backgroundColor: theme.palette.body.main,
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      backgroundColor: theme.palette.body.contrastText,
    },
    inputMessage: {
      backgroundColor: theme.palette.body.contrastText,
    },
  };
  return (
    <Box sx={styles.boxContainer}>
      <Box sx={styles.boxContacto}>
        <Typography variant="h2" color="grey.50">
          Contacto
        </Typography>
        <Typography variant="body1" color="grey.400" mb={{ md: "32px" }}>
          Si está interesado en trabajar conmigo en su próximo proyecto, no dude
          en ponerse en contacto.
        </Typography>
        <TextField
          id="name-input"
          type="text"
          placeholder="Nombre completo"
          sx={styles.input}
        />
        <TextField
          id="email-input"
          type="email"
          placeholder="Correo electronico"
          sx={styles.input}
        />
        <TextField
          id="mensaje-input"
          type="text"
          placeholder="Mensaje"
          multiline
          rows={4}
          sx={styles.inputMessage}
        />
        <Button variant="contained" color="primary" sx={{ height: "64px" }}>
          Enviar mensaje
        </Button>
      </Box>
    </Box>
  );
};

export default Contacto;
