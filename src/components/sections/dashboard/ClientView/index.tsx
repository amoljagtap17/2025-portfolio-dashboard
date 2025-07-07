import { Box } from "@mui/material";
import { Outlet, useParams } from "react-router";
import { UserDetails } from "../UserDetails";

export function ClientView() {
  const { clientId } = useParams();

  console.log("Client ID:", clientId);

  return (
    <Box>
      <UserDetails />
      <Outlet />
    </Box>
  );
}
