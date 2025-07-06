import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { Header } from "./Header";

function Menu() {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
  );
}

export function Navbar() {
  return (
    <AppBar
      position="fixed"
      square
      elevation={0}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar disableGutters={false}>
        <Menu />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexGrow={1}
        >
          <Header />
          <Box
            width={100}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          ></Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
