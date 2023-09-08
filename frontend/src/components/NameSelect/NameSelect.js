import React, { useState, useEffect } from "react";

const SelectName = ({setMessageFinished, setNameQ, setCharacter, setQuestion}) => {
  const [name, setName] = useState("");

  useEffect(() => {
    const userInput = (event) => {
        if (event.key === "Backspace") {
          setName((prevName) => prevName.slice(0, -1));
        } else if (/^[a-zA-Z0-9\s\W]$/.test(event.key)) {
          if (name.length < 8) {
            setName((prevName) => prevName + event.key);
          }
        }
      };

    document.addEventListener("keydown", userInput);
    return () => {
      document.removeEventListener("keydown", userInput);
    };
  }, [name]);

  useEffect(() => {
    const submitName = (event) => {
        if (event.key === "Enter") {
            setMessageFinished(true)
            setQuestion(5.1)
            setCharacter((prevCharacter) => ({
                ...prevCharacter,
                name: name
            }))
            setNameQ(false)
        }
    }

    window.addEventListener("keydown", submitName)

    return () => {
        window.removeEventListener("keydown", submitName)
    }
  })

  return (
    <div className="nameSelect">
      <h1>Enter Your Name</h1>
      <div className="name-input">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className="name-letter">
            {name[index] || "_"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectName;
