import React, { useState, useEffect } from "react";
import ChatItem from "../ChatItem/ChatItem";
import ChatInput from "../ChatInput/ChatInput";
import "./Chat.css";
import io from "socket.io-client";

function Chat({ changeUserApproval, room, name }) {
  const [messages, setMessages] = useState([]);

  const handleBackButton = () => {
    changeUserApproval();
  };
  useEffect(() => {
    const socket = io("http://localhost:5050");

    socket.on("connect", () => {
      console.log("successfully connected: ", socket.id); 
    });
    // connect the user to the server - DONE 

    // once the user sends any message, broadcast to all clients (server) 
    // socket event: message is recieved -> rerender messages to view the latest message recieved (client)
  }, []);

  return (
    <div className="main-window">
      <div className="chat-header">
        <h1>Chat</h1>
        <button onClick={handleBackButton}>Back</button>
      </div>
      <div className="chatsection">
        <div className="chat-area">
          {messages.map((message, index) => {
            return <ChatItem key={index}name={message.name} message={message.message} />;
          })}
        </div>

        <ChatInput messages={messages} setMessages={setMessages} name={name} />
      </div>
    </div>
  );
}

export default Chat;
