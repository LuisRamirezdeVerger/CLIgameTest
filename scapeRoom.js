const inquirer = require("inquirer");
const { tutorial, prologe } = require("./qstns");
const { Char } = require("./class");

let game;

const init = () => {
  inquirer.prompt(tutorial).then(() => tuto());
};

const tuto = () => {
  inquirer.prompt(prologe).then((answers) => {
    game = new Char(answers.charName);
    console.log(`Alright, ${game.name}, I'm gonna get you out of there`);
  });
};
init();
