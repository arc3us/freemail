import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AccountCircle, Notifications } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const user = useSelector[selectUser];

  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => dispatch(logout));
  };
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://www.freepnglogos.com/uploads/email-png/blue-email-box-circle-png-transparent-icon-2.png" />
      </div>

      <div className="header_middle">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search your mail" type="text" />
        <IconButton>
          <ArrowDropDownIcon className="header_input" />
        </IconButton>
      </div>

      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton onClick={signOut}>
          <Avatar
            src={user?.photoUrl}
            alt={user?.displayName}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
