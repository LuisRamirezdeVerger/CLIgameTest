const inquirer = require("inquirer");
const colors = require("colors");
const qstns = require("./qstns");
const { Character } = require("./class");
const items = require("./objects");
// const tutorial = require("./rooms/tutorial");

let game;

const inventory = [];

const init = () => {
  console.log(
    "Welcome to 'AntiScape'! This game has no graphics, so I recommend to read everything carefully 'cause you'll probably get the key"
      .red
  );
  // Type here all the colors info!!

  //change after "=>" to run game properly
  inquirer.prompt(qstns.tutorial).then(() => room3());
};

const tuto = () => {
  inquirer
    .prompt(qstns.prologe)
    .then((answers) => {
      game = new Character(answers.charName);
      console.log(
        `- Strange: Alright ${game.name},
I'm gonna get you out of there. For what I've hear, there's no living person who could scape, but I trust on you.
just be carefull with your thoughts, there's something alive in there. Sometimes I'll be able to help you, follow my guidance!`
          .blue
      );
      console.log(
        "Lets start with basics. In order to scape, you'll need to think (type) your next movement. That's the 'easy' part, I've hear that you'll have sorts of trials on each room"
          .blue
      );
      console.log(
        `If you are struggling to accomplish the room, ask for "help"!`.blue
      );
    })
    .then(() => room0());
};

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

const room1 = () => {
  //console.log("You are in a room full of pictures.".white.bold);

  inquirer.prompt(qstns.room01).then((answer) => {
    if (answer.room01 === "help") {
      console.log(
        "-Strange: Arghhh! It's been a lot since I don't help somebody, can't remember the code, but I remember it had 4 digits, look around! You may be "
      );
      room1();
    } else if (answer.room01 === "inventory") {
      console.table(inventory);
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

const room2 = () => {
  // console.log(
  //   "<<it'll be a room full of fire needing to stop it to be able to look around"
  // );
  inquirer.prompt(qstns.room02).then((answer) => {
    if (answer.room02 === "open door") {
      if (inventory.includes(items.iceGun)) {
        // Poss err w/ inventory
        console.log("Insert here ALL info");
        console.log(items.iceGun);
        room2();
      } else {
        console.log(
          "The door is on fire! You'll burn yourself if you try to open that door"
        );
        room2();
      } 
    } else if (answer.room02 === "inventory") {
      console.table(inventory);
      room2();
    } else if (answer.room02 === "help") {
      console.log(
        "-Strange: The door is on fire! Think how you could stop a fire from an old tek lab, you may be able to take few stuff, but don't say a word!"
      );
      room2();
    } else if (answer.room02 === "look around") {
      console.log(
        "You are inside of an old lab, everything is clean and white, there's a shelf, a huge ice cub and the door on fire"
      );
      room2();
    } else if (answer.room02 === "look shelf") {
      console.log(
        "In the shelf you see a lot of broken glasses and a gau... Wait, what? *cof* You see a completely normal and regular gauntlet imbueded on flames"
      );
      room2();
    } else if (answer.room02 === "take gauntlet") {
      inventory.push(items.fireGauntlet);
      console.log(
        "Carefull, is hot, well... is not! You take the gauntlet with no harm"
      );
      room2();
    } else if (answer.room02 === "look ice cub") {
      console.log(
        "Yup, that's a huge ice cube. Looks like there's something inside..."
      );
      room2();
    } else if (answer.room01 === "jump") {
      console.log("You jumped! What's a game without jumping, right?");
      room2();
    } else if (answer.room02 === "shoot ice gun") {
      console.log(
        "When you pull the trigger of your little friend, you start hearing a magic loading sound coming from the gun, after 3 seconds, the gun blast completely the door with ice"
      );
      inventory.slice(items.iceGun);
      console.log(
        "-Strange: Woah! You... You made it! How's is this POSSIBLE?!?! *ehem...* Wel.. Well doneee! I knew you were able to do it!"
      );
      room3();
    } else if (answer.room02 === "melt ice cube") {
      if (inventory.includes(items.fireGauntlet)) {
        console.log(
          "When you get the hand close enough to start melting the ice, the flames embrace the ice by themselves and melt it in 18 seconds.  "
        );
        console.log(
          "Now you have the a gun! But it doesn't look like an ordinary gun, is a gun made by ice, frozen enough to hold the fire from the gauntlet"
        );
        inventory.push(items.iceGun);
      } else {
        console.log(
          "You'll need a big fire to melt that before you die by hunger..."
        );
      }
      room2();
    } else {
      console.log("You can think better! Check your spelling");
      room2();
    }
  });
};

const room3 = () => {

  let lights = false;
  console.log(
    "And now you can... Well, you're doing great, so there's no need to help you anymore... Don't worry, I'll repeat this any time you fail. Good luck :)"
  );
  inquirer.prompt(qstns.room03).then((answer) => {
    if (answer.room03 === "open door") {
      if (inventory.includes(items.toxicMask)) {
        console.log("-Strange: WHAAAAAT? NOOOOOOOOOOOO! You were not suposed to pass!! I brainwashed you when you died for the same reason! Why would you think you're not able to remember anything?! This is not over yet (name), IS NOT OVEEEEEER!");
        console.log("While your fake friend was yelling at you because of his failure, you started to feel better than never in your life... Or death?")
        gameOver();
      } else {
        console.log(
          "What do you think it'll happen to you doing that..."
        );
        console.log("After inhaling the toxic air, you faint...")
      } 
    } else if (answer.room03 === "jump") {
      this.lights = true; // HERE WE NEED TO CHANGE IT!!
      console.log("You jumped! What's a game without jumping, right?");
      console.log("After you jumped, the pressure plate was activated, and slowly, all lights started to switch on");
      room3();
    } else if (answer.room03 === "inventory") {
      console.table(inventory);
      room3();
    } else if (answer.room03 === "help") {
      if(lights == false){
        console.log("-Strange: If you want to continue, you'll need some light... Wait, is that a pressure plate under your feet? Put some pressure!!")
        room3();
      } else {
        console.log(
        "-Strange: No no no, you don't need me... Well, okay, if you insist... I've seen that chamber, you'll need an AntiToxic mask, but at this rate, you may need to craft it"
      );
      room3();
    }
      
    } else if (answer.room03 === "look around") {
      if (lights == false){
         console.log(
        "Everything is dark, lights are off"
      );
      } else {
        console.log("- Strange: Woah! This place is a mess! Looks like it's been years since someone clean up this room. ");
        console.log(" You're in a wasted room, you can see dirty spots all over the floor, also, a bit more conserved, a desk with a computer and a green potion, a closet, a small library and the door inside of a chamber")
      }
     
      room3();
      //edit here!
    } else if (answer.room03 === "look shelf") {
      console.log(
        "In the shelf you see a lot of broken glasses and a gau... Wait, what? *cof* You see a  gauntlet imbueded on flames"
      );
      room3();
    } else if (answer.room03 === "take gauntlet") {
      inventory.push(items.fireGauntlet);
      console.log(
        "Carefull, is hot, well... is not! You take the gauntlet with no harm"
      );
      room3();
    } else if (answer.room03 === "look ice cub") {
      console.log(
        "Yup, that's a huge ice cube. Looks like there's something inside..."
      );
      room3();
    } else if (answer.room03 === "shoot ice gun") {
      console.log(
        "When you pull the trigger of you little friend, you start hearing a magic loading sound coming from the gun, after 3 seconds, the gun blast completely the door with ice"
      );
      inventory.slice(items.iceGun);
      console.log(
        "-Strange: Woah! You... You made it! How's is this POSSIBLE?!?! *ehem...* Well doneee! I knew you were able to do it!"
      );
      room4();
    } else if (answer.room02 === "melt ice cube") {
      if (inventory.includes(items.fireGauntlet)) {
        console.log(
          "When you get the hand close enough to start melting the ice, the flames embrace the ice by themselves and melt it in 9 seconds.  "
        );
        console.log(
          "Now you have the a gun! But it doesn't look like an ordinary gun, is a gun made by ice, frozen enough to hold the fire from the gauntlet"
        );
        inventory.push(items.iceGun);
      } else {
        console.log(
          "You'll need a big fire to melt that before you die by hunger..."
        );
      }
      room3();
    } else {
      console.log("You can think better! Check your spelling");
      room3();
    }
  });
};

const gameOver = () => {
  console.log("This is the end, if you're reading this, apologize, this still in beta, next time you'll have a proper ending. Big Love from Spain: Antiheroe")
}
init();
