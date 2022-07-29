import React, { useContext } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";
import { Divider } from "@mui/material";
import { PortafolioContext } from "../context/PortafolioProvider";

const MenuAction = () => {
  const { drawer, pages, setDrawer } = useContext(PortafolioContext);
  return (
    <MyDrawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
      <Box
        role="presentation"
        onClick={() => setDrawer(false)}
        onKeyDown={() => setDrawer(false)}
        sx={{ width: 250, mt: { xs: 1, sm: 2 } }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          sx={{ ml: 1, width: 40 }}
        >
          <MenuIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <Divider />
        <List>
          {pages.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} color="common" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </MyDrawer>
  );
};

const MyDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: #000;
    color: #fff;
  }
  .css-tlelie-MuiListItemText-root {
    margin-left: 20px;
    color: #c4c4c4;
  }
`;

export default MenuAction;
