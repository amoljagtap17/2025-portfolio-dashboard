import { Box, Typography } from "@mui/material";
import { useUserQuery } from "../../../../app/hooks";

export function Header() {
  const userQuery = useUserQuery();

  const firm = userQuery.data.user.firm.name;

  return (
    <Box
      display="flex"
      width={500}
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="body1" component="div">
        {firm}
      </Typography>
      <Typography variant="body1" component="div">
        |
      </Typography>
      <Typography variant="body1" component="div">
        ANALYSIS & REPORTING
      </Typography>
    </Box>
  );
}
