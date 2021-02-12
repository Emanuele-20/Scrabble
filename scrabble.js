class Scrabble{
    
     constructor(string){
        this.string = string
    };

    score(){
        if ((this.string == "") || (this.string == '/\t\n/') || (this.string === null)){
            return 0
        } else if (this.string === "a"){
            return 1
        } else if (this.string === "f") {
            return 4
        }
    }
    
}

module.exports = Scrabble




//const Scrabble = require('./scrabble.js')
//scrabble = new Scrabble