import React from "react";
import "../components/Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* header */}
      <div className="sidebar__header">
        <div className="sidebar__headerLeft">
          <AccountCircleIcon />
        </div>

        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
         <div className="sidebar__searchContainer">
            <SearchIcon/>
            <input type="text" placeholder="Seach or start new chat " />
         </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat/>
      </div>
    </div>
  );
};

export default Sidebar;
