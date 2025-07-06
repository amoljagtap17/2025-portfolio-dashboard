import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router";
import { useUserQuery } from "../../../../app/hooks";

const drawerWidth = 240;

export function Sidebar() {
  const navigate = useNavigate();
  const userQuery = useUserQuery();

  const clients = userQuery.data.user.firm.clients;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List
          component="nav"
          aria-labelledby="client-list"
          subheader={
            <ListSubheader component="div" id="client-list">
              CLIENTS
            </ListSubheader>
          }
        >
          {clients.map(({ id, name }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton onClick={() => navigate(`/${id}`)}>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
