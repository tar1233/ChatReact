import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import Message from "./Messages";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import SpeakerPhoneIcon from "@material-ui/icons/SpeakerPhone";
//meterrail-ui
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import styled from "styled-components";

function App() {
  const Title = styled.h1`
    margin-top: 200px;
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    //run
    db.collection("Messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        console.log("snapshot", snapshot);
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter username"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("Messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(messages, "message");

  return (
    <>
      <div className="App">
        <h2>ChatBox UI</h2>
        <p>Message send and scroll to bottom enabled </p>

        <Title>README CHATROOM</Title>
        <h2>input name </h2>
        <h2>select button phone</h2>
        <h2>OK! chatroom</h2>
        
        <div id="chat-circle" class="btn btn-raised" onClick={handleClickOpen}>
          <SpeakerPhoneIcon style={{ fontSize: 60 }}>speaker</SpeakerPhoneIcon>
        </div>

        <Dialog open={open} onClose={handleClose}>
          <div class="chat-box">
            <div class="chat-box-header">
              ChatBot
              <span class="chat-box-toggle" onClick={handleClose}>
                <CloseIcon>close</CloseIcon>
              </span>
            </div>
            <div class="chat-box-body">
              {messages.map((message) => (
                <Message username={username} message={message} />
              ))}
            </div>

            <div class="chat-input">
              <form>
                <input
                  id="chat-input"
                  type="text"
                  placeholder="Send a message..."
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                />
                <button
                  type="submit"
                  class="chat-submit"
                  disabled={!input}
                  onClick={sendMessage}
                >
                  <SendIcon>send</SendIcon>
                </button>
              </form>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}

export default App;
