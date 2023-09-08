import { useState, useEffect } from "react";
import Text from "../Text/Text";
import { creationQuestions } from "../../shared/helpers";
import useMessage from "../../hooks/useMessage";
import CreationTop from "../CreationTop/CreationTop";
import { characterObject, wait } from "../../shared/helpers";

export default function Creation({setGameState}) {
  const [character, setCharacter] = useState(characterObject);
  const questions = creationQuestions;
  const [question, setQuestion] = useState(0);
  const [message, setMessage] = useState(questions[question]);
  const [messageFinished, setMessageFinished] = useState(false);

  useMessage(
    questions,
    question,
    setQuestion,
    setMessage,
    messageFinished,
    setMessageFinished
  );

  useEffect(() => {
    if (question >= questions.length - 1) {
      // Delay changing the game state by 3 seconds
      const timeoutId = setTimeout(() => {
        setGameState("game");
      }, 4000);
  
      // Clean up the timeout when the component unmounts or when question changes
      return () => clearTimeout(timeoutId);
    }
  }, [question]);
  

  useEffect(() => {
    console.log(question)
    console.log(questions.length)
  }, [question])

  return (
    <div className="characterCreation">
      <CreationTop
        character={character}
        setCharacter={setCharacter}
        question={question}
        messageFinished={messageFinished}
        setMessageFinished={setMessageFinished}
        setQuestion = {setQuestion}
      />
      <Text message={message} setMessageFinished={setMessageFinished} />
    </div>
  );
}
