const Scrabble = require('./scrabble')

describe("Scrabble", () => {
    it("Return 0 when an empty string is passed", () => {
        scrabble = new Scrabble('')
        expect(scrabble.score).toBe(0)
    })
    it("Return 0 when tab and new line caracters are passed", () => {
        scrabble = new Scrabble('/\t\n/')
        expect(scrabble.score).toBe(0)
    })
    it("Return 0 when NIL as caracter is passed", () => {
        scrabble = new Scrabble(null)
        expect(scrabble.score).toBe(0)
    })
    it("Return 1 when 'a' as caracter is passed", () => {
        scrabble = new Scrabble('a')
        expect(scrabble.score).toBe(1)
    })
    it("Return 4 when 'f' as caracter is passed", () => {
        scrabble = new Scrabble('f')
        expect(scrabble.score).toBe(4)
    })
    it("Return 6 when 'street' as word is passed", () => {
        scrabble = new Scrabble('street')
        expect(scrabble.score).toBe(6)
    })
})