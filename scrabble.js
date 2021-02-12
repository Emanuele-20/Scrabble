class Scrabble{
    
     constructor(value){
        this.value = value
    };



    // score(word) {
    //     let array = []
    //     if ((typeof word !== " ") || (word == '/\t\n/') || (typeof word == null)){
    //         return "here"
    //     } else {
    //         array.push(word)
    //         return array
    //     }
    // }

    score(){
        if ((this.value == "") || (this.value == '/\t\n/') || (this.value === null)){
            return 0
        } else if (this.value === "a"){
            return 1
        } else if (this.value === "f") {
            return 4
        }
    }
    
}

module.exports = Scrabble




//const Scrabble = require('./scrabble.js')
//scrabble = new Scrabble