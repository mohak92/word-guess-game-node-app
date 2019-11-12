var Word = require("./Word.js");
var inquirer = require("inquirer");
var chalk = require('chalk');
var guessesRemaining;
var wordToGuess;

var jsReservedKeywords = ["const", "let", "var", "if", "else", "case", "break",
    "void", "while", "with", "for", "default", "class", "constructor",
    "import", "export", "module", "true", "false", "return",
    "do", "typeof", "try", "catch", "finally", "undefined", "null", 
    "extends", "implements", "interface"];

console.log(chalk.blue("Guess the reserved javascript keyword in 10 guesses or less.\n"));

resetGame();

function resetGame() {

    inquirer.prompt([
        {
            type: "confirm",
            name: "status",
            message: "Play Game ?"
        }
    ]).then(function (response) {
        if (response.status === true) {
            wordToGuess = new Word();
            wordToGuess.addWord(jsReservedKeywords[Math.floor(Math.random() * jsReservedKeywords.length)])
            console.log("\n" + wordToGuess.displayWord() + "\n");
            guessesRemaining = 10;
            playGame();
        }
        else {
            console.log(chalk.blue("\nThanks for playing!\n"));
        }
    });
}

function playGame() {
}
