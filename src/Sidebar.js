import { Button, IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import { AccessTime, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from "@material-ui/icons";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        className="sidebar_compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>

      <SidebarOption Icon={Inbox} Title="Inbox" Number={54} selected={"yes"}/>
      <SidebarOption Icon={Star} Title="Starred" Number={23 } />
      <SidebarOption Icon={AccessTime} Title="Snoozed" Number={23 } />
      <SidebarOption Icon={LabelImportant} Title="Important" Number={23} />
      <SidebarOption Icon={NearMe} Title="Sent" Number={23} />
      <SidebarOption Icon={Note} Title="Drafts" Number={23} />
      <SidebarOption Icon={ExpandMore} Title="More" Number={23} />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
