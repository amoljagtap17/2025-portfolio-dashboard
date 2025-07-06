import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export function Footer() {
  return (
    <AppBar
      position="static"
      square
      elevation={0}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar disableGutters={false}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexGrow={1}
          padding={2}
        >
          <Typography variant="h6" component="div">
            Copyright &copy; {new Date().getFullYear()}
          </Typography>

          <Typography variant="h6" component="div">
            {import.meta.env.MODE}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
