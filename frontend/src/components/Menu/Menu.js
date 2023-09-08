import React from "react";

export default function Menu() {
  return (
    <div className="menubox">
      <div className="menu">
      <div className="menuoption">
          <div className="menuimage">
            <img src="TrainerIcon.png"></img>
          </div>
          <p>TRAINER</p>
        </div>
        <div className="menuoption">
          <div className="menuimage">
            <img src="PokemonIcon.png"></img>
          </div>
          <p>POK&eacute;MON</p>
        </div>
        <div className="menuoption">
          <div className="menuimage">
            <img src="BagIcon.png"></img>
          </div>
          <p>BAG</p>
        </div>
        <div className="menuoption">
          <div className="menuimage">
            <img src="SaveIcon.png"></img>
          </div>
          <p>SAVE</p>
        </div>
        <div className="menuoption">
          <div className="menuimage">
            <img src="ExitIcon.png"></img>
          </div>
          <p>EXIT</p>
        </div>
      </div>
    </div>
  );
}
