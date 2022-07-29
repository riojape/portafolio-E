import React from "react";
import { Container, styled } from "@mui/material";
import Greeting from "../components/Greeting";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Witnesses from "../components/Witnesses";
import ImagenHome from "../components/ImagenHome";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "0",
        paddingTop: { xs: "50px", md: "120px" },
      }}
    >
      <Greeting />
      <Projects />
      <Services />
      <Witnesses />
      <ImagenHome />
      <Contacto />
      <Footer />
    </Container>
  );
};

export default Home;
