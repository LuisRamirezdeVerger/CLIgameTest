const inquirer = require("inquirer");
const colors = require("colors");
const { tutorial, prologe, room00 } = require("./qstns");
const { Char } = require("./class");

let game;

const init = () => {
  // const style = "font-weight: bold";
  // console.log("Teeeeeest", style);
  inquirer.prompt(tutorial).then(() => tuto());
};

const tuto = () => {
  inquirer
    .prompt(prologe)
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
  inquirer.prompt(room00).then((answer) => {
    if (answer.room00 === "go north") {
      console.log("You move");
      north();
    } else {
      console.log("Command invalid, think a bit harder!");
      room0();
    }
  });
};

const north = () => {
  console.log("You went to north");
  // inquirer.prompt(room00).then((answer) => {
  //   if (answer.room00 === "move") {
  //     console.log("You move");
  //     north();
  //   } else {
  //     console.log("error");
  //     room0();
  //   }
  // });
};

init();
