import { Box, Divider } from "@mui/material";
import { AccountInfo } from "./AccountInfo";
import { UserInfo } from "./UserInfo";

export function UserDetails() {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingY={2}
      >
        <UserInfo />
        <AccountInfo />
      </Box>
      <Divider />
    </Box>
  );
}
