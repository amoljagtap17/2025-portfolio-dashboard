import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

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
    <Box>
      <AppBar position="static" square elevation={0}>
        <Toolbar disableGutters={false}>
          <Menu />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexGrow={1}
          >
            <Typography variant="h6" component="div">
              Firm Name | ANALYSIS & REPORTING
            </Typography>
            <Box
              width={100}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            ></Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
