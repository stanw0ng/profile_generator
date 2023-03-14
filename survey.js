const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


  
rl.question(`What's your name? Nicknames are also acceptable :)\n`, (answer1) => {
  console.log(`Ok! I will remember to call you ${answer1}`);

  rl.question(`What's an activity you like doing?\n`, (answer2) => {
    console.log(`I love ${answer2}!`);

    rl.question(`What do you listen to while doing that?\n`, (answer3) => {
      console.log(`${answer3} hurt my ears :,(`);

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)?\n`, (answer4) => {
        console.log(`${answer4} is not our favourite`);

        rl.question(`What's your favourite thing to eat for that meal?\n`, (answer5) => {
          console.log(`${answer5} is gross!`);
  
          rl.question(`Which sport is your absolute favourite?\n`, (answer6) => {
            console.log(`${answer6}?! Not coding?`);
    
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!\n`, (answer7) => {
              console.log(`${answer7}?! Not coding?`);

              setTimeout(() => {
                console.log(`\nThanks for filling out the survey ${answer1}!
                \nI hope soon after this you can do some ${answer2} while listening to some ${answer3}.\nWe're not particularly fond of ${answer4} especially if ${answer5} is being served.\nI hope you spend more time coding because ${answer6} & ${answer7} can really make your brain rot...\nSee you next time :)`);
                rl.close();
              }, 1500);
            });
          });
        });
      });
    });
  });
});