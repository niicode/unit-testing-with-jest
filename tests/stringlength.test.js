const Calculator  = require('../Functions/Calculator.js');
const stringCount = require('../Functions/stringCount.js');
const reverseString = require('../Functions/reverseString.js');
const capitalize = require('../Functions/capitalize.js');

describe("Test the function stringCount", () => {
    test("Check if the function exist", () => {
        expect(stringCount).toBeDefined();
    })
    test('StringCount of "Hello" should return 5', () => {
        expect(stringCount("Hello")).toBe(5);
    })

    test('string is less than 10 but not less 1', () => {
        expect(() => { stringCount("Hello World") }).toThrowError("String length must be less than 10");
    })
})

describe("Test the function reverseString", () => {
    test("Check if the function exist", () => {
        expect(reverseString).toBeDefined();
    })

    test('reverseString of "Hello" should return "olleH"', () => {
        expect(reverseString("Hello")).toBe("olleH");
    })

    test('reverseString of "Hello World" should return "dlroW olleH"', () => {
        expect(reverseString("Hello World")).toBe("dlroW olleH");
    })
})

describe("Test the function Calculator", () => {
    test("Check if the function exist", () => {
        expect(Calculator).toBeDefined();
    })
})

describe("Multiplication", () => {
    test("Multiply 2 by 2 to be 4", () => {
        const calculator = new Calculator();
        expect(calculator.multiply(2, 2)).toBe(4);
    })

    test("Multiply 2 by 2 not to be 4", () => {
        const calculator = new Calculator();
        expect(calculator.multiply(4, 2)).not.toBe(4);
    })

    test ("Multiply 3 by 4 to be 12", () => {
        const calculator = new Calculator();
        expect(calculator.multiply(3, 4)).toBe(12);
    })
})

describe("Adding", () => {
    test("Adding 2 to 2 to be 4", () => {
        const calculator = new Calculator();
        expect(calculator.add(2, 2)).toBe(4);
    })

    test("Adding 2 to 2 not to be 5", () => {
        const calculator = new Calculator();
        expect(calculator.add(2, 2)).not.toBe(5);
    })

    test ("Adding 3 to 4 to be 7", () => {
        const calculator = new Calculator();
        expect(calculator.add(3, 4)).toBe(7);
    })
})

describe("Subtraction", () => {
    test("Subtraction 1 from 0 to -1", () => {
        const calculator = new Calculator();
        expect(calculator.subtract(0, 1)).toBe(-1);
    })

    test("Subtraction 1 from 0 not to be 0", () => {
        const calculator = new Calculator();
        expect(calculator.subtract(0, 1)).not.toBe(0);
    })

    test("Subtraction 3 from 4 to be -1", () => {
        const calculator = new Calculator();
        expect(calculator.subtract(3, 4)).toBe(-1);
    })
})

describe("Division", () => {
    test("Division 10 from 2 to 5", () => {
        const calculator = new Calculator();
        expect(calculator.divide(10, 2)).toBe(5);
    })

    test("Division 4 from 2 not to be 0", () => {
        const calculator = new Calculator();
        expect(calculator.divide(4, 2)).not.toBe(0);
    })

    test("Division 3 from 4 to be 0.75", () => {
        const calculator = new Calculator();
        expect(calculator.divide(3, 4)).toBe(0.75);
    })
})

describe("Capitalize", () => {
    test("hello", () => {
        expect(capitalize("hello")).toBe("Hello");
    })
})