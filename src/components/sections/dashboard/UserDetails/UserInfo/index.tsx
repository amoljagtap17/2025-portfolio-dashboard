import { Typography } from "@mui/material";
import { useUserQuery } from "../../../../../app/hooks";

export function UserInfo() {
  const userQuery = useUserQuery();
  const displayName = userQuery.data.user.displayName;

  return (
    <Typography variant="body1" component="div">
      {displayName}
    </Typography>
  );
}
