const colors = require("colors");

const tutorial = [
  {
    type: "text",
    name: "prologe",
    message:
      "Everything went too fast, after a flash throught your eyes, you felt the freedom in your soul, but, suddenly a force grab you...",
  },
];

const prologe = [
  {
    type: "input",
    name: "charName",
    message: "Hey dude, are you okay? What's your name? >>",
  },
];

const welcome = [
  {
    type: "text",
    name: "welcome",
    message: `*knock* *knock* *knock*...`,
  },
];

const room00 = [
  {
    type: "input",
    name: "room00",
    message: "What you wanna do now? >>".green,
  },
];

const room01 = [
  {
    type: "text",
    name: "room01",
    message: "You are in a room full of pictures. What shall you do now? >>"
      .purple,
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
  room01,
  welcome,
};
