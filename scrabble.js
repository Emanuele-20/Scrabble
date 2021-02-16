class Scrabble{
    
    constructor(string){
        this.string = string
        this.value = {
            'a': 1,
            'b': 3,
            'c': 3,
            'd': 2,
            'e': 1,
            'f': 4,
            'g': 2,
            'h': 4,
            'i': 1,
            'j': 8,
            'k': 5,
            'l': 1,
            'm': 3,
            'n': 1,
            'o': 1,
            'p': 3,
            'q': 10,
            'r': 1,
            's': 1,
            't': 1,
            'u': 1,
            'v': 4,
            'w': 4,
            'x': 8,
            'y': 4,
            'z':10 
        }
    };

    score(){
        let array = []
        if ((this.string == "") || (this.string == '/\t\n/') || (this.string === null)){
            return 0
        } else {
            for(let i = 0; i < this.string.length; i++ ){
                let letter = this.string[i] //a
                array.push(this.value[letter])
            }
            let result = array.reduce(function(a,b){
                return a + b;
            } ,0)
            return result
        }
        
    }
    
}

module.exports = Scrabble

