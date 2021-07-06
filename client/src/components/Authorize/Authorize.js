import React from "react";
import Chat from "../Chat/Chat";
import Join from "../Join/Join";

function Authorize({isApproved}) {
  if (isApproved) {
    return <Chat/>;
  }
  return <Join/>;
}

export default Authorize;
