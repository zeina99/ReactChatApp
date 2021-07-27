import React, { useEffect } from "react";

import "./ChatInput.css";

const ChatInput = ({ userInput, setUserInput, sendMessage }) => {
  const handleInput = (event) => {
    setUserInput(event.target.value);
  };
  useEffect(() => {
    function sendMessageOnClick(event) {
      if (event.code === "Enter") {
        sendMessage();
        event.preventDefault();
      }
    }

    document.addEventListener("keydown", sendMessageOnClick);

    return () => {
      document.removeEventListener("keydown", sendMessageOnClick);
    };
  }, [sendMessage]);

  return (
    <div className="input-area">
      <input
        className="chat-input"
        type="text"
        value={userInput}
        onChange={handleInput}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
