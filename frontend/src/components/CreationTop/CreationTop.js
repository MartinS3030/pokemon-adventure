import { useState, useEffect } from "react";
import GenderSelect from "../GenderSelect/GenderSelect";
import NameSelect from "../NameSelect/NameSelect";

export default function CreationTop({character, setCharacter, question, messageFinished, setMessageFinished, setQuestion}) {
  const [genderQ, setGenderQ] = useState(false);
  const [nameQ, setNameQ] = useState(false)

  useEffect(() => {
    if (question === 3 && messageFinished) {
      setMessageFinished(false);
      setGenderQ(true);
    }
  }, [messageFinished]);

  useEffect(() => {
    if (question === 3 && !messageFinished && genderQ) {
        setMessageFinished(true)
        setQuestion(3.1)
    }
  }, [messageFinished])

  useEffect(() => {
    if (question === 5 && messageFinished) {
        setMessageFinished(false)
        setGenderQ(false)
        setNameQ(true)
    }
  })

  return (
    <div className="creationTop">
        {genderQ && <GenderSelect 
        setCharacter = {setCharacter} 
        setMessageFinished = {setMessageFinished} 
        setQuestion = {setQuestion}
        />}
        {nameQ && <NameSelect 
        setMessageFinished={setMessageFinished}
        setNameQ={setNameQ}
        setCharacter={setCharacter}
        setQuestion={setQuestion}
        />}
    </div>
  );
}
