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

function resetGame() {
}

function playGame() {
}
