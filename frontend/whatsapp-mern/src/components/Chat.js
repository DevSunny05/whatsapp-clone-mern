import React from "react";
import "../components/Chat.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import AttachmentIcon from "@material-ui/icons/Attachment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from '@material-ui/icons/Mic';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <AccountCircleIcon />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>

          <IconButton>
            <AttachmentIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Sarang</span>
          This is message
          <span className="chat__timespan">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat__fotter">
        <InsertEmoticonIcon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
  );
};

export default Chat;
