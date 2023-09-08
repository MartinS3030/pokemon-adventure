import { useState, useEffect } from "react";
import useTiles from "../../hooks/useTiles";
import { characterObject } from "../../shared/helpers";
import useMove from "../../hooks/useMove";

export default function Map({ move, setMove, setMenu, menu }) {
  const map = useTiles();
  const [character, setCharacter] = useState(characterObject);

  useMove(character, setCharacter, setMove, menu);

  useEffect(() => {
    const openMenu = (event) => {
      if (event.key === "m") {
        setMenu(true);
      }
    };

    window.addEventListener("keydown", openMenu);

    return () => {
      window.removeEventListener("keydown", openMenu);
    };
  }, [move]);

  return (
    <div className="map">
      {map.map((_, index) => (
        <div className="tile" key={index + 1}>
          {character.Y * 12 + character.X === index + 1 && (
            <div className="character">
              <img src="Trainer.png"></img>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
