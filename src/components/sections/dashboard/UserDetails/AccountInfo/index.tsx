import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useAccountsByClientIdQuery } from "../../../../../app/hooks";

export function AccountInfo() {
  const { clientId, accountId } = useParams();
  const navigate = useNavigate();
  const accountsByClientIdQuery = useAccountsByClientIdQuery(clientId!);

  const accounts = accountsByClientIdQuery.data.accountsByClientId;

  const handleChange = (event: SelectChangeEvent) => {
    navigate(`/${clientId}/${event.target.value}`);
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="account-select-label">Accounts</InputLabel>
        <Select
          labelId="account-select-label"
          id="account-select"
          label="Accounts"
          value={accountId || ""}
          onChange={handleChange}
        >
          {accounts.map((account) => (
            <MenuItem key={account.id} value={account.id}>
              {account.accountNumber}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
