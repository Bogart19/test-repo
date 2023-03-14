const sum = require('./sum');

describe('the tests', () => {
    test('should pass', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('should fail', () => {
        expect(sum(1, 2)).toBe(5);
    })

    test('should be flaky', () => {
        
        let randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber % 2 == 0) {
            expect(sum(1, 2)).toBe(3)
        }
        else {
            expect(sum(1, 2)).toBe(1)
        }
    });
});