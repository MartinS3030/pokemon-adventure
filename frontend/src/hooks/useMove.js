import { useEffect } from "react";
import { validateMove } from "../shared/helpers";

export default function useMove(character, setCharacter, setMove, menu) {
  useEffect(() => {
    const move = (event) => {
      if (!menu) {
        if (event.key === "ArrowUp" && validateMove(character.Y + 1 - 1)) {
          setCharacter((prevCharacter) => ({
            ...prevCharacter,
            Y: prevCharacter.Y - 1,
          }));
        }
        if (event.key === "ArrowDown" && validateMove(character.Y + 1 + 1)) {
          setCharacter((prevCharacter) => ({
            ...prevCharacter,
            Y: prevCharacter.Y + 1,
          }));
        }
        if (event.key === "ArrowLeft" && validateMove(character.X - 1)) {
          setCharacter((prevCharacter) => ({
            ...prevCharacter,
            X: prevCharacter.X - 1,
          }));
        }
        if (event.key === "ArrowRight" && validateMove(character.X + 1)) {
          setCharacter((prevCharacter) => ({
            ...prevCharacter,
            X: prevCharacter.X + 1,
          }));
        }
      }
    };

    window.addEventListener("keydown", move);
    setMove(true);

    return () => {
      window.removeEventListener("keydown", move);
      setMove(false);
    };
  }, [character, menu]);
  return <div>useMove</div>;
}
