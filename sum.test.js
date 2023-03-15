const sum = require('./sum');

describe('the tests', () => {
    test('should add two whole numbers correctly', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('should add two negative numbers correctly', () => {
        // Make the test pass despite the name to see test results on successful pass
        expect(sum(-1, -2)).toBe(-3);
    })

    test('should add two decimals correctly', () => {
        expect(sum(1.0, 5.2)).toBe(6.2)
    });
});