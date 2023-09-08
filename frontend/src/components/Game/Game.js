import React, { useState } from "react";
import Map from "../Map/Map";
import Menu from "../Menu/Menu";
import Text from "../Text/Text";
import NotMenu from "../NotMenu/NotMenu";

export default function Game() {
  const [message, setmessage] = useState("");
  const [move, setMove] = useState(false)
  const [menu, setMenu] = useState(false)
  
  return (
      <div className="game">
        <div className="top">
          <Map move = {move} setMove = {setMove} setMenu = {setMenu} menu = {menu}/>
          {menu && <Menu />}
          {!menu && <NotMenu />}
        </div>
        <Text message={message} />
      </div>
  );
}
