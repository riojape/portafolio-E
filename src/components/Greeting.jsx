import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material";
import fotoPerfil from "../assets/images/foto-perfil.png";

const Greeting = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <CardGreeting>
      <CardMedia
        component="img"
        image={fotoPerfil}
        alt="foto de perfil"
        sx={{
          height: { xs: "300px", sm: "380px", md: "462px" },
          width: { xs: "100%", md: "495px" },
        }}
      />
      <CardContent
        sx={{
          height: { md: "270px", lg: "240px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingLeft: 0,
        }}
      >
        <Typography component="h2" variant="h1" color="common.white">
          ¡Hola a todos! Soy Antonio Pereira
        </Typography>
        <Typography variant="body1" color="grey.500">
          Developer que le encanta implementar diseños que inspiran y atraen a
          las personas.
        </Typography>
      </CardContent>
    </CardGreeting>
  );
};

const CardGreeting = styled(Card)`
  margin: 0 auto;
  background-color: #0f0e17;
  max-width: 500px;
  padding-bottom: 80px;

  @media (min-width: 900px) {
    max-width: 100%;
    display: flex;
    flex-direction: row-reverse;
  }
`;
const Title = styled(Typography)`
  color: #fff;
  margin-bottom: 12px;

  @media (min-width: 900px) {
    font-weight: 700;
    font-size: 64px;
    line-height: 80px;
    margin-bottom: 32px;
  }
`;
const Paragraph = styled(Typography)`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #a7a9be;

  @media (min-width: 900px) {
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
  }
`;

export default Greeting;
