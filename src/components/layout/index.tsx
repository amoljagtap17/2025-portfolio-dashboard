import { Box } from "@mui/material";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface IAppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: IAppLayoutProps) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
