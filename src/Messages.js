import React from "react";
import { Typography } from "@material-ui/core";
import "./Messages.css";

function Message({ message, username }) {
  console.log("message", message.username);
  //   console.log("1", message[0].username, "2", username);
  //   let Message = message;
  const isUser = username === message.username;

  console.log("isUser", isUser);
  return (
    <>
      <div className={`message ${isUser && "message__user"}`}>
        <div className={isUser ? "message__userCard" : "messages__gestCard"}>
              <b className="username">{message.username} :</b>
              {message.message}
        </div>
      </div>
    </>
  );
}

export default Message;
