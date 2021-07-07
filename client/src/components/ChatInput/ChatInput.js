import React, { useState } from "react";

const ChatInput = ({ messages, setMessages, name }) => {
  const [userInput, setUserInput] = useState("");
  const handleInput = (event) => {
    setUserInput(event.target.value);
  };
  const addMessage = () => {
    setMessages([...messages, { name: name, message: userInput }]);
    setUserInput("");
  };
  return (
    <div className="input-area">
      <input
        className="chat-input"
        type="text"
        value={userInput}
        onChange={handleInput}
      />
      <button className="send-button" onClick={addMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
