import "./App.css";
import { useState } from "react";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const inputs = {
  name: "name",
  room: "room",
};
function App() {
  const [userApproved, setUserApproved] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    if (event.target.name === inputs.name) {
      setName(event.target.value);
    } else if (event.target.name === inputs.room)
      setRoomName(event.target.value);
  };

  const changeUserApproval = () => {
    setUserApproved(!userApproved);
  };

  return (
    <div className="App">
      {/* if user not approved render Join, else user is approved -> render Chat */}
      {!userApproved ? (
        <Join
          changeUserApproval={changeUserApproval}
          handleInputChange={handleInputChange}
          roomName={roomName}
          name={name}
        />
      ) : (
        <Chat
          changeUserApproval={changeUserApproval}
          room={roomName}
          name={name}
        />
      )}
    </div>
  );
}

export default App;
