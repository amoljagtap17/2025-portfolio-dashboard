import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#263238",
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
    h1: { fontWeight: 700, fontSize: "2rem" },
    h2: { fontWeight: 600, fontSize: "1.5rem" },
    body1: { fontSize: "1rem" },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#eeeeee",
          color: "#182B43",
          width: 240,
          boxSizing: "border-box",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
