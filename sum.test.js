const sum = require('./sum');

describe('the tests', () => {
    test('should pass', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('should fail', () => {
        // Make the test pass despite the name to see test results on successful pass
        expect(sum(1, -2)).toBe(-1);
    })

    test('should be flaky', () => {
        // Make the test pass consistently despite the name to see test results on successful pass
        // let randomNumber = Math.floor(Math.random() * 10);
        // if (randomNumber % 2 == 0) {
        //     expect(sum(1, 2)).toBe(3)
        // }
        // else {
        //     expect(sum(1, 2)).toBe(1)
        // }
        expect(true)
    });
});