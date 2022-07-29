import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuAction from "./MenuAction";
import { PortafolioContext } from "../context/PortafolioProvider";

const ResponsiveAppBar = () => {
  const { drawer, pages, setDrawer } = useContext(PortafolioContext);
  return (
    <AppBar position="static" color="body">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/*------    LOGO xs   -------*/}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          {/*------    BOTON MENU   -------*/}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setDrawer(!drawer)}
              color="inherit"
            >
              <MenuIcon sx={{ fontSize: 20 }} />
            </IconButton>
            {/*------    MENU ACTION   -------*/}
            <MenuAction />
          </Box>
          {/*------    LOGO md   -------*/}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 30,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          {/*------    PAGINAS   -------*/}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "#c4c4c4", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/*------    BUTTON   -------*/}
          <Button variant="outlined">Descargar currículum</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
