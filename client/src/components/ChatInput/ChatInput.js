import React from "react";

const ChatInput = ({ userInput, setUserInput, sendMessage }) => {
  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

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
