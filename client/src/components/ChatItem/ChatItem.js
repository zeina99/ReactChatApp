import React from "react";
import "./ChatItem.css";

function ChatItem({ name, message }) {
  return (
    <div className="chat-item">
      <h4>{name}</h4>
      <p className="message">{message}</p>
    </div>
  );
}

export default ChatItem;
