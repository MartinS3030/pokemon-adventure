import { useState, useEffect } from "react";
import useOptionSelection from "../../hooks/useOptionSelection";

export default function GenderSelect({setCharacter, setMessageFinished, setQuestion}) {
  const [fadeIn, setFadeIn] = useState(false);
  const [option, setOption] = useState(1);
  const [pokemon, setPokemon] = useState("")

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useOptionSelection(3, option, setOption)

  useEffect(() => {
    const selectPokemon = (event) => {
        if (event.key === " " && option === 1) {
            setPokemon("piplup")
            setCharacter((prevCharacter) => ({
                ...prevCharacter,
                pokemon: "piplup"
            }))
            setMessageFinished(true)
            // setQuestion(3.1)
        }
        if (event.key === " " && option === 2) {
            setPokemon("torchic")
            setCharacter((prevCharacter) => ({
                ...prevCharacter,
                pokemon: "torchic"
            }))
            setMessageFinished(true)
            // setQuestion(3.1)
        }
        if (event.key === " " && option === 3) {
            setPokemon("bulbasaur")
            setCharacter((prevCharacter) => ({
                ...prevCharacter,
                pokemon: "bulbasaur"
            }))
            setMessageFinished(true)
            // setQuestion(3.1)
        }
    }

    window.addEventListener("keydown", selectPokemon)

    return () => {
        window.removeEventListener("keydown", selectPokemon)
    }
  }, [option])

  return (
    <div className={`Select ${fadeIn ? "fade-in" : ""}`}>
        Hello
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png" className={
        `leftImg 
        ${option === 1 && pokemon === "" ? "selected" : ""} 
        ${pokemon === "piplup" ? "chosen" : ""}
        ${pokemon !== "piplup" && pokemon !== "" ? "notChosen" : ""}`}></img>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png" className={
        `middleImg 
        ${option === 2 && pokemon === "" ? "selected" : ""} 
        ${pokemon === "torchic" ? "chosen" : ""}
        ${pokemon !== "torchic" && pokemon !== "" ? "notChosen" : ""}`}></img>      
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" className={
        `rightImg
        ${option === 3 && pokemon === "" ? "selected" : ""} 
        ${pokemon === "bulbasaur" ? "chosen" : ""}
        ${pokemon !== "bulbasaur" && pokemon !== "" ? "notChosen" : ""}`}></img>
    </div>
  );
}
