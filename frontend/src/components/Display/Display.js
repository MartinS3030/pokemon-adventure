import React, { useState } from "react";
import Game from "../Game/Game";
import Creation from "../Creation/Creation";

export default function Display() {
  const [gameState, setGameState] = useState("creation")
  
  return (
    <div className="display">
      {gameState === "creation" && <Creation setGameState={setGameState}/>}
      {gameState === "game" && <Game />}
    </div>
  );
}
