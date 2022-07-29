import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    common: {
      black: "#0f0e17",
      white: "#fff",
    },
    primary: {
      main: "#ff8906",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f25f4c",
      contrastText: "#000",
    },
    body: {
      main: "#000",
      contrastText: "#fff",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: `'Lato', sans-serif`,
    h1: {
      fontFamily: `'Lato', sans-serif`,
      fontWeight: 400,
      fontSize: "3.2rem",
      lineHeight: 1.25,
      letterSpacing: "0.01em",

      "@media (min-width:600px)": {
        fontFamily: `'Ubuntu', sans-serif`,
        fontWeight: 700,
        fontSize: "6.4rem",
      },
    },
    h2: {
      fontFamily: `'Lato', sans-serif`,
      fontWeight: 400,
      fontSize: "3.2rem",
      lineHeight: 1.25,
      letterSpacing: "0.01em",

      "@media (min-width:600px)": {
        fontFamily: `'Ubuntu', sans-serif`,
        fontWeight: 700,
        fontSize: "4.8rem",
        lineHeight: 1.17,
        letterSpacing: "-0.005em",
      },
    },
    h3: {
      fontFamily: `'Ubuntu', sans-serif`,
      fontWeight: 700,
      fontSize: "4rem",
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: `'Lato', sans-serif`,
      fontWeight: 400,
      fontSize: "3.2rem",
      lineHeight: 1.25,
      letterSpacing: "0.01em",
    },
    h5: {
      fontFamily: `'Ubuntu', sans-serif`,
      fontWeight: 700,
      fontSize: "2.4rem",
      lineHeight: 1.33,
      letterSpacing: "0.01em",
    },
    body1: {
      fontFamily: `'Lato', sans-serif`,
      fontWeight: 400,
      fontSize: "2rem",
      lineHeight: 1.6,

      "@media(min-width: 600px)": {
        fontWeight: 400,
        fontSize: "2.4rem",
        lineHeight: 1.67,
      },
    },
    body2: {
      fontFamily: `'Lato', sans-serif`,
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.6,

      "@media(min-width: 600px)": {
        fontWeight: 700,
        fontSize: "2.4rem",
        lineHeight: 1.67,
      },
    },
    button: {
      fontFamily: `'Ubuntu', sans-serif`,
      fontWeight: 700,
      fontSize: "1.4rem",
      lineHeight: 1.5,
    },
  },
});
