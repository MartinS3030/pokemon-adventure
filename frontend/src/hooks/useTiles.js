import { useState, useEffect } from "react";
import { getTile } from "../shared/helpers";

export default function useTiles() {
  const [map, setmap] = useState([]);

  useEffect(() => {
    let tiles = getTile();
    setmap(Object.values(tiles));
  }, []);

  return map;
}
