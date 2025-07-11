const {rollDice, playDiceGame} = require('./index')

// function is going to 

describe("dice roll", () => {
    it("exists", () => {
        expect(rollDice()).toBeDefined();
    });
    it("is a function", () => {
        expect(rollDice instanceof Function).toEqual(true);
    });
    it('will return a number', () => {
        expect(typeof rollDice() === 'number').toEqual(true);
    })
    it("Will return a number between 1 and 6", () => {
        for (let i = 0; i < 100; i++) {
            const result = rollDice(1, 6);
            expect(result).toBeGreaterThanOrEqual(1);
            expect(result).toBeLessThanOrEqual(6);
        }
    })
})

describe('Play dice game', () => {
    it("exists", () => {
        expect(playDiceGame).toBeDefined();
    });
    it("is a function", () => {
        expect(playDiceGame instanceof Function).toEqual(true);
    });
})