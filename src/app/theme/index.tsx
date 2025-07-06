import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0542A5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#19B5FC",
    },
    background: {
      default: "#F5F8FA",
      paper: "#fff",
    },
    text: {
      primary: "#182B43",
      secondary: "#243B53",
    },
    success: {
      main: "#00C295",
    },
    warning: {
      main: "#FCDC53",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
    h1: { fontWeight: 700, fontSize: "2rem", color: "#0542A5" },
    h2: { fontWeight: 600, fontSize: "1.5rem", color: "#19B5FC" },
    body1: { fontSize: "1rem", color: "#182B43" },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
