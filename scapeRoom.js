const inquirer = require("inquirer");
const colors = require("colors");
const qstns = require("./qstns");
const { Character } = require("./class");
// const inventory = require("./inventory");

let game;

const inventory = {
  tools: [],
};

const init = () => {
  // const style = "font-weight: bold";
  // console.log("Teeeeeest", style);
  // console.table(inventory);
  // const r0 = inventory.push("key");
  const r0 = inventory.tools.push("key");

  console.log(r0);
  inquirer.prompt(qstns.tutorial).then(() => tuto());
};

const tuto = () => {
  inquirer.prompt(qstns.welcome);
  inquirer
    .prompt(qstns.prologe)
    .then((answers) => {
      game = new Character(answers.charName);
      console.log(
        `Alright ${game.name},
I'm gonna get you out of there. For what I've hear, there's no living person who could scape, but I trust on you.
just be carefull with your thoughts, there's something alive in there`.blue
      );
    })
    .then(() => room0());
};

const room0 = () => {
  console.log("Looks like you're in the main door".white.bold);

  // inquirer.prompt(room00);
  inquirer.prompt(qstns.room00).then((answer) => {
    if (answer.room00 === "help") {
      console.log(
        "You need to scape, use actions (commands) that you think you could do in you were there"
      );
      room0();
    } else if (answer.room00 === "open door") {
      console.log(
        "While you approach the door, the whole building start to shake and everything went dark, when you start to see something..."
          .red
      );
      entrance();
    } else if (answer.room00 === "pickup") {
      inventory.push("key");
      console.log("You picked up the key".red);
      room0();
    } else if (answer.room00 === "look around") {
      console.log(
        "You look around and... well... There's not much to see, you're in a 2x2 room with 3 windows and a door"
      );
      room0();
    } else if (answer.room00 === "jump") {
      console.log("You jumped! What's a game without jumping, right?");
      room0();
    } else {
      console.log("Command invalid, think a bit harder!");
      room0();
    }
  });

  const room1 = () => {};
  //CHECK HERE
  const entrance = () => {
    console.log("Looks like you're in the entrance".white.bold);
    // console.log(qstns.room01);
    inquirer.prompt(qstns.room01).then((answer) => {
      if (answer.room01 === "help") {
        console.log(
          "You need to scape, use actions (commands) that you think you could do if you were there"
        );
        entrance();
      } else {
        console.log("You can think better!");
        entrance();
      }
    });
  };
};
init();
