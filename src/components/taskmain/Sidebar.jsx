import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ListItemText from "@mui/material/ListItemText";

import GridViewIcon from "@mui/icons-material/GridView";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
  return (
    <React.Fragment>
      <Drawer variant="permanent" anchor="left">
        {" "}
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
        <Divider />
        <List sx={{}}>
          <a href="/" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#02055c" }}>
                  <GridViewIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" color="#001e4f" />
              </ListItemButton>
            </ListItem>
          </a>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#02055c" }}>
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText color="#001e4f" primary="Users" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#02055c" }}>
                <DocumentScannerIcon />
              </ListItemIcon>
              <ListItemText color="#001e4f" primary="Planing" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List sx={{}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#02055c" }}>
                <StackedLineChartIcon />
              </ListItemIcon>
              <ListItemText color="#001e4f" primary="Tracking" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#02055c" }}>
                <TaskAltIcon />
              </ListItemIcon>
              <ListItemText color="#001e4f" primary="Assignments" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#02055c" }}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText color="#001e4f" primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default Sidebar;
