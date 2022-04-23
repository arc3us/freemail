import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AccountCircle, Notifications } from "@material-ui/icons";

function Header() {
  return <div className="header">
      <div className="header_left">
        <IconButton>
            <MenuIcon />
        </IconButton>
        <img src="https://www.freepnglogos.com/uploads/email-png/blue-email-box-circle-png-transparent-icon-2.png"/>
      </div>

      <div className="header_middle">
        <SearchIcon/>
        <input placeholder="Search your mail" type="text"/>
        <ArrowDropDownIcon className="header_input"/>
      </div>

      <div className="header_right">
        <IconButton>
            <AppsIcon />
        </IconButton>
        <IconButton>
            <Notifications />
        </IconButton>
        <IconButton>
            <Avatar />      
        </IconButton>
      </div>
  </div>;
}

export default Header;
