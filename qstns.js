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
    message: `You hear a knock from someone who seems to be outside  *knock* *knock* *knock* Hey dude, are you okay? What's your name? >>`,
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
    type: "input",
    name: "room01",
    message: "What you wanna do now? >>".green,
  },
];

const room02 = [
  {
    type: "input",
    name: "room02",
    message: "What you wanna do now? >>".green,
  },
];

module.exports = {
  tutorial,
  prologe,
  room00,
  room01,
  room02,
};
