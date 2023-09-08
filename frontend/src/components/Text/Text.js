import { useState, useEffect } from "react";
import useTypedMessage from "../../hooks/useTypedMessage";

export default function Text({ message, setMessageFinished }) {
  const typedMessage = useTypedMessage(message, setMessageFinished);

  return (
    <div className="bottom">
      <div className="textbox">
        <div className="text">{typedMessage}</div>
      </div>
    </div>
  );
}
