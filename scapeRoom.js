const inquirer = require("inquirer");
const colors = require("colors");
const qstns = require("./qstns");
const { Char } = require("./class");

let game;

const init = () => {
  // const style = "font-weight: bold";
  // console.log("Teeeeeest", style);
  inquirer.prompt(qstns.tutorial).then(() => tuto());
};

const tuto = () => {
  inquirer
    .prompt(qstns.prologe)
    .then((answers) => {
      game = new Char(answers.charName);
      console.log(
        `Alright ${game.name},
I'm gonna get you out of there`.blue
      );
    })
    .then(() => room0());
};

const room0 = () => {
  console.log("Looks like you're in the main door");
  // inquirer.prompt(room00);
  inquirer.prompt(qstns.room00).then((answer) => {
    if (answer.room00 === "help") {
      console.log(
        "You need to scape, use actions (commands) that you think you could do in you were there"
      );
      room0();
    } else if (answer.room00 === "open door") {
      console.log("Good thinking!");
      north();
    } else if (answer.room00 === "look around") {
      console.log(
        "There's not much to see, you're in a 2x2 room with 3 windows and a door"
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

  const north = () => {
    console.log("You went to north");
  };
};
init();
