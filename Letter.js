class Letter {
    constructor(letter) {
        this.letter = letter; 
        this.letterGuessed = false;
        this.toString = function() {
            if (this.letterGuessed) {
                return this.letter;
            }
            else {
                return "_";
            }
        };
        this.checkLetter = function(ch) {
            if (this.letter === ch) {
                this.letterGuessed = true;
                return true;
            }
            else {
                return false;
            }
        };

    }
}

module.exports = Letter;
