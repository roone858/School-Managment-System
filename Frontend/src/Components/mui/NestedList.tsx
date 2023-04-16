import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import LockIcon from "@mui/icons-material/Lock";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useNavigate } from "react-router-dom";
export default function NestedList() {
  const [open, setOpen] = React.useState(true);
  const [openItemOne, setOpenItemOne] = React.useState(false);
  const [openItemTow, setOpenItemTow] = React.useState(false);
  const [openItemThree, setOpenItemThree] = React.useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };
  const handleItemOneClick = () => {
    setOpenItemOne(!openItemOne);
  };
  const handleItemTowClick = () => {
    setOpenItemTow(!openItemTow);
  };
  const handleItemThreeClick = () => {
    setOpenItemThree(!openItemThree);
  };
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleItemOneClick}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Your Account" />
        {openItemOne ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openItemOne} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={()=> navigate("/setting/info")} sx={{ pl: 4 }}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Account Information" />
          </ListItemButton>
          <ListItemButton onClick={()=> navigate("/setting/password")} sx={{ pl: 4 }}>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary="Change your password" />
          </ListItemButton>
          <ListItemButton onClick={()=> navigate("/setting/deactivate")} sx={{ pl: 4 }}>
            <ListItemIcon>
              <MoodBadIcon />
            </ListItemIcon>
            <ListItemText primary="Deactivate Account" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleItemTowClick}>
        <ListItemIcon>
          <AdminPanelSettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Admin" />
        {openItemTow ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openItemTow} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText  primary="Add new Admin  " />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Delete Admin" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Update Admin" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleItemThreeClick}>
        <ListItemIcon >
          <SupervisorAccountIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
        {openItemThree ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openItemThree} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Add New User" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Delete User" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Update User" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
