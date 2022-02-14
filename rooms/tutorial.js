const tutorial = () => {
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

module.exports = { tutorial };
