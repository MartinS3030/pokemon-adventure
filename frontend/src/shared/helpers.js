export function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export const getTile = () => {
  let map = {};

  for (let i = 0; i < 144; i++) {
    map[i] = { id: i + 1, x: i % 12, y: Math.floor(i / 12), text: "" };
  }

  const messages = ["Hello welcome to the game hope you have fun!", "What are you going to do?"];

  const specialTiles = [137, 126];
  for (let tile in map) {
    if (specialTiles.includes(tile.id)) {
        tile.text = messages
    }
  }

  return map;
};

export let creationQuestions = [
  "Welcome to Victory Road! It is the last obstacle that all trainers must face before reaching the Pokemon league.",
  "Here you'll be find countless challenges and battles to strengthen you and your Pokemon friends.",
  "Before we begin, we'll need to know some information about you.",
  "Are you a boy or a girl?",
  "OK you are a {character.gender}!",
  "What is your name?",
  "Welcome {character.name}!",
  "Looks like you don't have a Pokemon yet. I don't know how you got this far, but you're supposed to have beaten the gym leaders before coming here.",
  "No worries, we can bend the rules a bit here. You can select from these 3 Pokemon.",
  "Which Pokemon will you choose?",
  "You chose {character.Pokemon[0].name}",
  "Tell me about something about yourself.",
  "Ok, sounds good. Looks like you're ready to get started on your adventure!"
  ]

export let characterObject = {
  X: 4,
  Y: 11,
  inventory: [],
  Pokemon: []
};

export const validateMove = (coordinate) => {
  console.log(coordinate);
  if (coordinate >= 1 && coordinate <= 12) {
    return true;
  } else {
    return false;
  }
};
