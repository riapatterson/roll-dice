const prompt = require('prompt-sync')();

function rollDice() {
    return Math.floor(Math.random() * 6)+1;
}



function playDiceGame() {

    console.log("welcome to the Dice Roller!");

    while (true) {
        const input = prompt("press ENTER to roll the dice or type 'q' to quit: ");
        if (input.toLowerCase() === 'q') {
            console.log("Thanks for playing!");
            break;
        } else if (input === '') {
            const result = rollDice();
            console.log(`You rolled a ${result} dice`);
        } else {
            console.log("invalid input, please try again")
        }
    }
}



module.exports = {
    playDiceGame,
    rollDice
}
