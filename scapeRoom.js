const inquirer = require("inquirer");
const { qstns } = require("./qstns");

const game;

const init = () => {
    inquirer
    .prompt(qstns)
    .then((answer) => {
        game = new Game(
            answer.tutorial
        )
    })
}

init();