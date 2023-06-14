import React from "react";
import "./index.css";
import Avatar from "../../assets/Avatar";

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.user === "gpt" && "chatgpt"} `}>
          {message.user === "gpt" && <Avatar />}
        </div>
        <div className="message">{message.message}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
