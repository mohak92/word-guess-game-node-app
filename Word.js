var Letter = require("./Letter.js");

class Word {
    constructor() {

        this.letters = [];

        this.displayWord = function() {
            let word = ""
            for (let i = 0; i < this.letters.length; i++) {
                word += this.letters[i] + " ";
            }
            return (word.toUpperCase());
        };

        this.checkLetter = function(ch) {
            let letterFound = false;
            for (let i = 0; i < this.letters.length; i++) {
                if (this.letters[i].checkLetter(ch)) {
                    letterFound = true;
                }
            }
            return letterFound;
        }

        this.addWord = function(word) {
            for (let i = 0; i < word.length; i++) {
                this.letters.push(new Letter(word[i]));
                if (word[i] === " ") {
                    this.letters[i].letterGuessed = true;
                }
            }
        }

        this.wordFound = function() {
            var isFound = true;

            for (let i = 0; i < this.letters.length; i++) {
                isFound = isFound && this.letters[i].letterGuessed;
            }
            return isFound;
        }
    }
};

module.exports = Word;

