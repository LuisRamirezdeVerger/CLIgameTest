const inquirer = require("inquirer");
const colors = require("colors");
const qstns = require("../qstns");
const { Character } = require("../class");

const room0 = () => {
  console.log("Looks like you're in the main door".white.bold);

  inquirer.prompt(qstns.room00).then((answer) => {
    if (answer.room00 === "help") {
      console.log(
        "You hear a voice in your head... -Strange: Hey! Can you hear me? I told you, I'll help you as much as I can! In order to escape from wherever you are, use actions (type'em) that you think you could do if you were there. Type like you were searching on Google (for example, if you want to open the door, the correct command will be <open door>. Try to <look around>!"
      );
      room0();
    } else if (answer.room00 === "open door") {
      if (inventory.includes("key") == true) {
        console.log(
          "While you approach the door, the whole building start to shake and everything went dark, when you start to see something..."
            .red
        );
        inventory.splice("key");
        room1();
      } else {
        console.log("You may need a key to open that door");
        room0();
      }
    } else if (answer.room00 === "inventory") {
      console.table(inventory);
      room0();
    } else if (answer.room00 === "look window") {
      console.log("You can't see anything, they're tainted");
      room0();
    } else if (answer.room00 === "pickup key") {
      inventory.push("key");
      console.log("You picked up the key".red);
      room0();
    } else if (answer.room00 === "look around") {
      console.log(
        "You look around and... well... There's not much to see, you're in a small square room with 3 tinted windows, a key in the floor and a closed door"
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
