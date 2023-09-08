import { useState, useEffect } from "react";
import useOptionSelection from "../../hooks/useOptionSelection";

export default function GenderSelect({setCharacter, setMessageFinished, setQuestion}) {
  const [fadeIn, setFadeIn] = useState(false);
  const [option, setOption] = useState(1);
  const [gender, setGender] = useState("")

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useOptionSelection(2, option, setOption)

  useEffect(() => {
    const selectGender = (event) => {
        if (event.key === " " && option === 1) {
            setGender("m")
            setCharacter((prevCharacter) => ({
                ...prevCharacter,
                gender: "m"
            }))
            setMessageFinished(true)
            // setQuestion(3.1)
        }
        if (event.key === " " && option === 2) {
            setGender("f")
            setCharacter((prevCharacter) => ({
                ...prevCharacter,
                gender: "f"
            }))
            setMessageFinished(true)
            // setQuestion(3.1)
        }
    }

    window.addEventListener("keydown", selectGender)

    return () => {
        window.removeEventListener("keydown", selectGender)
    }
  }, [option])

  return (
    <div className={`Select ${fadeIn ? "fade-in" : ""}`}>
      <img src="TrainerM.png" className={
        `trainerM 
        ${option === 1 && gender === "" ? "selected" : ""} 
        ${gender === "m" ? "chosen" : ""}
        ${gender === "f" ? "notChosen" : ""}`}></img>
      <img src="TrainerF.png" className={
        `trainerF 
        ${option === 2 && gender === "" ? "selected" : ""} 
        ${gender === "f" ? "chosen" : ""}
        ${gender === "m" ? "notChosen" : ""}`}></img>
    </div>
  );
}
