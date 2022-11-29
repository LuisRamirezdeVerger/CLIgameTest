const inquirer = require("inquirer");
const qstns = require("../qstns");
const { Enemy } = require("./components/class");

let fightGame;

const init = () => {
    inquirer
      .prompt(qstns.brawl0)
      .then((answers) => {
        fightGame = new Enemy(answers.life);
      })
      .then(() => fight0());
  };

  const fight0 = () => {
      console.log("Let's train a little bit, hit that dummy!")
  }

  init();