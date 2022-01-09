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
just be carefull with your thoughts, there's something alive in there. Sometimes I'll be able to help you, follow my guidance!`
          .blue
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
    } else if (answer.room00 === "look at the window") {
      console.log("You can't see anything, they're tainted");
      room0();
    } else if (answer.room00 === "pickup key") {
      inventory.push("key");
      console.log("You picked up the key".red);
      room0();
    } else if (answer.room00 === "look around") {
      console.log(
        "You look around and... well... There's not much to see, you're in a 2x2 room with 3 tinted windows, a key in the floor and a closed door"
      );
      room0();
    } else if (answer.room00 === "look window") {
      console.log(
        "You can't see sh*t! You barely visualize the shadow of your bud through it"
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
};

const room1 = () => {
  console.log("You are in a room full of pictures.".white.bold);

  inquirer.prompt(qstns.room01).then((answer) => {
    if (answer.room01 === "help") {
      console.log(
        "You need to scape, use actions (commands) that you think you could do if you were there"
      );
      room1();
    } else if (answer.room01 === "open door") {
      inquirer
        .prompt([
          {
            name: "advice",
            message:
              "When you look at the door, you realized that the door is completely brand new and sealed, but you also see a numpad"
                .red,
          },
          {
            type: "input",
            name: "code1",
            message: `Welcome ${game.name}. Enter code:`,
          },
        ])
        .then((respuesta) => {
          if (respuesta.code1 == 1001) {
            console.log("Access granted, you may continue, for now...".red);
            room2();
          } else {
            console.log("Error, try again");
            room1();
          }
        });
    } else if (answer.room01 === "look around") {
      console.log(
        "Everything is dusty... You can see all those creepy paintings, an old rusty bed, a broken wood table with some damn well looking food and a new TV that's surprisely working"
      );
      room1();
    } else if (answer.room01 === "jump") {
      console.log("You jumped! What's a game without jumping, right?");
      room1();
    } else if (answer.room01 === "eat food") {
      console.log(
        "HOW YOU DARE TO TAKE MYYYYYY FOOD? I KNEW YOU WERE NOT WORTH IT!".red
          .bold
      );
      console.log(
        "After you heard the voice, you start feeling unwell, nine seconds later, feeling a massive headache. You hear a sound coming from the TV unfortunetely in the TV you see youself bleeding out..."
      );
      console.log("You died...".black.bgRed);
    } else if (answer.room01 === "look bed") {
      console.log(
        `You can hear a voice: What are you thinking about , ${game.name}? You are not in position to rest!`
      );
      room1();
    } else if (answer.room01 === "look table") {
      console.log(
        "You can hear a voice: Trust me, Human, you don't even want to eat that food..."
      );
      room1();
    } else if (answer.room01 === "watch tv") {
      console.log(
        "On TV you can see the news: - The whole planet is ruined!! 1001 demons have arrived, they burnt 1001 lands to ashes, and they said they'll stay for 1001 years... PLEASE HELP!"
      );
      room1();
    } else {
      console.log("You can think better! Check your spelling");
      room1();
    }
  });
};

const room2 = () => {};

init();
