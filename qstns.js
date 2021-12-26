const colors = require("colors");

const tutorial = [
  {
    type: "text",
    name: "prologe",
    message: "After the party, you woke up",
  },
];

const prologe = [
  {
    type: "input",
    name: "charName",
    message: "Hey dude, are you okay? What's your name? >>",
  },
];

const room00 = [
  {
    type: "input",
    name: "room00",
    message: "What's your next movement? >>".green,
  },
];

const room01 = [
  {
    type: "input",
    name: "room01",
    message: "You are in north. What's your next movement? >>".purple,
  },
];

// const console = [
//   {
//     name:conSole
//     message: `Alright ${game.name},
//     // I'm gonna get you out of there`.blue,
//   },
// ];

module.exports = {
  tutorial,
  prologe,
  room00,
};
