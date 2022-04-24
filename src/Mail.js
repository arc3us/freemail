import { IconButton } from "@material-ui/core";
import {
  ArrowBack,
  CheckCircle,
  Email,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@material-ui/icons";
import { Error } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router";
import "./Mail.css";

function Mail() {
  const navigate = useNavigate();
  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBack />
          </IconButton>

          <IconButton>
            <MoveToInbox />
          </IconButton>

          <IconButton>
            <Error />
          </IconButton>

          <IconButton>
            <Email />
          </IconButton>

          <IconButton>
            <WatchLater />
          </IconButton>

          <IconButton>
            <CheckCircle />
          </IconButton>

          <IconButton>
            <LabelImportant />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="mail_toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>

          <IconButton>
            <Print />
          </IconButton>

          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      <div className="mail_body">
        <div className="mail_bodyHeader">
          <h2>Subject</h2>
          <IconButton>
            <LabelImportant className="mail_important" />
          </IconButton>
          <p className="mail_title">Title</p>
          <p className="mail_time">10pm</p>
        </div>
        <div className="mail_message">
          <p>This is an email message</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
