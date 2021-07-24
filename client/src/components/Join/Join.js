import React from "react";
import "./Join.css";
function Join({ changeUserApproval, handleInputChange, roomName, name }) {
  const handleSubmit = () => {
    if (roomName !== "" && name !== "") {
      changeUserApproval();
    }
  };

  return (
    <div className="outerContainer">
      <h1>Join</h1>

      <div className="JoinWrapper">
        <div className="username">
          <label id="usernameLabel" htmlFor="username">
            Username:
          </label>
          <br />
          <input
            placeholder="Name"
            name="name"
            type="text"
            onChange={handleInputChange}
            value={name}
          />
        </div>
        <div className="roomname">
          <label id="roomnameLabel" htmlFor="room">
            Roomname:
          </label>
          <input
            placeholder="Room"
            name="room"
            type="text"
            onChange={handleInputChange}
            value={roomName}
          />
        </div>
        <button id="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Join;
