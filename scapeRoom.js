const inquirer = require("inquirer");
const colors = require("colors");
const qstns = require("./qstns");
const { Character } = require("./class");
const items = require("./objects");
// const tutorial = require("./rooms/tutorial");

let game;

const inventory = [];
let lights = false;

const init = () => {
  console.log(
`Welcome to "AntiScape"! A Text adventure game, for a better experience, I strongly recommend to read everything carefully, you'll have the solution in the text, the challenge
 here will be to match the commands for the ones that are programmed, if you feel stuck, check your spelling, read the text again or find a synonym!`.red
  );
  console.log(`In the game you'll see text in different colors, every color has a purpose, here you have all of them: `);
  console.log(`Red is for`.red);
  console.log(`Blue is for`.blue);
  console.log(`Green is for`.green);
  console.log(`White is for`.white);
  // Type here all the colors info!!

  //change after "=>" to run game properly
  inquirer.prompt(qstns.tutorial).then(() => intro());
};

const intro = () => {
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
  console.log("Looks like you're in the main hall".white.bold);

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
        console.log("The door is locked, you may need a key to open that door");
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

  
  console.log(
    "And now you can... Well, you're doing great, so there's no need to help you anymore... Don't worry, I'll repeat this any time you fail. Good luck :)"
  );
  inquirer.prompt(qstns.room03).then((answer) => {
    if (answer.room03 === "open door") {
      if (inventory.includes(items.antiToxicMask)) {
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
      lights = true;
      // Think on moving the whole room to another file just to have everything tidy...
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
    } else if (answer.room03 === "look closet") {
      console.log(
        "In the closet there are a lab coat with a pocket and a mask"
      );
      room3();
    } else if (answer.room03 === "inspect pocket") {
      console.log(
        "When you introduce your hand in the pocket, feels empty, but when you look at your hand, you realize that you're holding the softest piece of cotton you ever touch"
      );
      console.log("-Strange: Ohh! I missed that feeling, the best Antitoxic cotton with a touch of heaven...");
      inventory.push(items.cotton);
      room3();
    } else if (answer.room03 === "take mask") {
      inventory.push(items.toxicMask);
      console.log(
        `Oh yeah, that was a "high quality" mask, looks like is missing a piece... I guess you can not use it yet...`
      );
      room3();
    } else if (answer.room03 === "look chamber") {
      console.log(
        "-Strange: That chamber is full of a green air, not suspicious at all, problably... Nothing bad... *gulp*"
      );
      room3();
    } else if (answer.room03 === "look library") {
      console.log(
        "You can see a few books about poisoning and toxicity"
      );
      room3();
    } else if (answer.room03 === "read poisoning book") {
      console.log(
        "[...] Whatever you do, NEVER trust on green, there are many reason, for example, [...] "
      );
      console.log("-Strange: Ahh... Such a good memories reading that book... All you need is GREEN! Right?");
      room3();
    } else if (answer.room03 === "read toxicity book") {
      console.log(
        "[...] After 27 tests, it's well known how cotton clean the toxicity of the green air thanks to [...] "
      );
      console.log("-Strange: When did that book arrive there? It wasn't the last time I checked it...");
      room3();
    } else if (answer.room03 === "craft antitoxic mask") {
      if (inventory.includes(items.cotton) && inventory.includes(items.toxicMask)) {
        inventory.splice(items.cotton && items.toxicMask);
        inventory.push(items.antiToxicMask);
        console.log(
          "Thanks to your knowledge, you are able to craft an... AntiToxic Mask!"
        );
        console.log(
          "-Strange: That was... Unexpected... Go.. Good J.. Job... I guess..."
        );

      } else {
        console.log(
          "Have you got all the items in your inventory?"
        );
      }
      room3();
    } else if (answer.room03 === "look desk") {
      console.log(
        "The desk is pretty dirty and rusty, the computer seems to work, and the potion is inside of a cilindric phial, shinning with the best green you could imagine."
      );
      console.log("-Strange: When did that book arrive there? It wasn't the last time I checked it...");
      room3();
    } else if (answer.room03 === "drink potion") {
      console.log(
        "-Strange: Hahaha... Haha... HAHAHAHAHA!!"
      );
      console.log("You foot start to weight way to much, you can't move at all... Every milisecond you feel how your blood start to get thicker, after 1.8 seconds, you became a statue...");
      console.log("You may need some knowledge for the next time...");
    } else if (answer.room03 === "look computer") {
      inquirer
        .prompt([
          {
            name: "advice",
            message:
              "The computer is working perfectly, you'll need the password"
                .green,
          },
          {
            type: "input",
            name: "code1",
            message: `Welcome ${game.name}, Enter password: .... REMINDER: "In letters, hexadecimal or multiple of the numbers encountered, `,
          },
        ])
        .then((respuesta) => {
          if (respuesta.code1 == "nine") {
            console.log("Password correct!".red);
            easterEgg();
          } else {
            console.log("Error, try again".white.bgWhite);
            room3();
            //We can kill here as well
          }
        });
    } else {
      console.log("You can think better! Check your spelling");
      room3();
    }
  });
};

const easterEgg = () => {
  console.log("WTF are you doing?? Well played! Hope it was a bit challenging, just a bit! In here you'll get nothing to finish this room, but you did it! You found the easterEgg hided in this game.");
  console.log("If you're curious about why the number 9, it's 'cause the coder encounter this number way many times in his childhood, thinking that the number was following him while it was (unconsciously)all the opposite(lmao).");
  console.log("And now that you're here, all I've to say is THANKS! Thanks for playing this far, as a creator, all I want is you to finish and enjoy the game ^^");
  console.log("Okay, okay, okay, I'm feeling softhearted. The key to finish this room is in");
  console.log("FATAL ERROR: 404 NOT FOUND. Powering off...".blue);
  room3();
}

const gameOver = () => {
  console.log("This is the end, if you're reading this, my apologies, this still in beta, next time you'll have a proper ending. Big Love from Spain: Antiheroe")
}
init();
