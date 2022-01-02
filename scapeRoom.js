const inquirer = require("inquirer");
const colors = require("colors");
const qstns = require("./qstns");
const { Character } = require("./class");

let game;

const inventory = [];

const init = () => {
  // const style = "font-weight: bold";
  // console.log("Teeeeeest", style);
  // console.table(inventory);

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
      if (inventory.includes("key") == true) {
        console.log(
          "While you approach the door, the whole building start to shake and everything went dark, when you start to see something..."
            .red
        );
        room1();
      } else {
        console.log("You may need a key to open that door");
        room0();
      }
    } else if (answer.room00 === "inventory") {
      console.log(inventory);
      room0();
    } else if (answer.room00 === "pickup key") {
      inventory.push("key");
      console.log("You picked up the key".red);
      room0();
    } else if (answer.room00 === "look around") {
      // ADD THE KEY!!
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

  const room1 = () => {
    console.log("Looks like you're in the entrance".white.bold);
    inquirer.prompt(qstns.room01).then((answer) => {
      if (answer.room01 === "help") {
        console.log(
          "You need to scape, use actions (commands) that you think you could do if you were there"
        );
        room1();
        //BUGGED HERE!!
      } else if (answer.room01 === "open door") {
        console.log("Enter code: ");
        inquirer.prompt();
        if (answer.room01 === 1001) {
          console.log("Access granted".red);
          room1();
        } else {
          console.log("Error, try again");
          room1();
        }
      } else if (answer.room01 === "look around") {
        console.log(
          "Everything is dusty... You can see an old rusty bed, a broken wood table and a new TV that's surprisely working"
        );
        room1();
      } else if (answer.room01 === "jump") {
        console.log("You jumped! What's a game without jumping, right?");
        room1();
      } else if (answer.room01 === "watch tv") {
        console.log(
          "On TV you can see the news: - The whole planet is ruined!! 1001 demons have arrived, they burnt 1001 lands to ashes, and they said they'll stay for 1001 years... PLEASE HELP!"
        );
        room1();
      } else {
        console.log("You can think better!");
        room1();
      }
    });
  };
};
init();
