import React from "react";

function Chat({ changeUserApproval, room, username }) {
  const handleBackButton = () => {
    changeUserApproval();
  };

  return (
    <div>
      <h1>Chat</h1>
      <button onClick={handleBackButton}>Back</button>
      <p>
        {room} {username}
      </p>
    </div>
  );
}

export default Chat;
