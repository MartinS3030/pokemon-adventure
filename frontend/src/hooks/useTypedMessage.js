import { useState, useEffect } from "react";
import { wait } from "../shared/helpers";

export default function useTypedMessage(message, setMessageFinished) {
  const [typedMessage, setTypedMessage] = useState("");

  useEffect(() => {
    setTypedMessage("");
    for (let i = 0; i < message.length; i++) {
      if (message[i].length) {
        (async () => {
          let visibleMessage = "";
          for (let i = 0; i < message.length; i++) {
            await wait(10);
            visibleMessage = visibleMessage + message[i];
            setTypedMessage(visibleMessage);
          }
          setMessageFinished(true)
        })();
      }
    }
  }, [message]);

  return typedMessage;
}
