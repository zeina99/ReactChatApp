import React, { useState, useEffect } from "react";
import ChatItem from "../ChatItem/ChatItem";
import ChatInput from "../ChatInput/ChatInput";
import "./Chat.css";
import io from "socket.io-client";

let socket;
function Chat({ changeUserApproval, room, name }) {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleBackButton = () => {
    changeUserApproval();
  };
  const sendMessage = () => {
    let message = { name: name, message: userInput, room: room };
    setMessages((messages) => [...messages, message]);
    setUserInput("");

    socket.emit("message", message);
  };

  useEffect(() => {
    // connect to server
    socket = io("http://localhost:5050");

    socket.on("connect", () => {
      console.log("successfully connected: ", socket.id);
    });

    // joining the channel server side
    socket.emit("join", { name, room });

    // once the user sends any message, broadcast to all clients (server)
    socket.on("all-messages", (message) => {
      setMessages((messages) => [...messages, message]);
      console.log("new messages recieved from other client: ", message);
      console.log("all current messages: ", messages);
    });

    return () => {
      socket.close();
    };
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
            return (
              <ChatItem
                key={index}
                name={message.name}
                message={message.message}
              />
            );
          })}
        </div>

        <ChatInput
          userInput={userInput}
          setUserInput={setUserInput}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default Chat;
