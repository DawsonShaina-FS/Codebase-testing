const {
    sumOfArray,
    reverseString,
    isPalindrome,
    findMax
} = require("./main");

// testing different number arrays
test("sumOfArray adds all numbers in an array", () => {
    expect(sumOfArray([1, 2, 3, 4])).toBe(10);
});

test("sumOfArray works with negative numbers", () => {
    expect(sumOfArray([-1, -2, 3])).toBe(0);
});

test("sumOfArray works with an empty array", () => {
    expect(sumOfArray([])).toBe(0);
});

test("sumOfArray works with decimal numbers", () => {
    expect(sumOfArray([1.5, 2.5])).toBe(4);
});

// ensuring the function catches the wrong type of input
test("sumOfArray rejects non-array input", () => {
    expect(() => sumOfArray(5)).toThrow(TypeError);
});

test("sumOfArray rejects non-number values", () => {
    expect(() => sumOfArray([1, "2", 3])).toThrow(TypeError);
});


// testing different types of strings
test("reverseString reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("reverseString works with a single character", () => {
    expect(reverseString("A")).toBe("A");
});

test("reverseString works with an empty string", () => {
    expect(reverseString("")).toBe("");
});

test("reverseString reverses strings with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
});

// making sure it doesnt accept numbers or other types
test("reverseString rejects number input", () => {
    expect(() => reverseString(1)).toThrow(TypeError);
});

test("reverseString rejects boolean input", () => {
    expect(() => reverseString(true)).toThrow(TypeError);
});


// checking strings that are and arent palindromes
test("isPalindrome returns true for a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
});

test("isPalindrome returns false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
});

test("isPalindrome works with a single character", () => {
    expect(isPalindrome("A")).toBe(true);
});

test("isPalindrome works with an empty string", () => {
    expect(isPalindrome("")).toBe(true);
});

// making sure the function addresses the wrong input type
test("isPalindrome rejects number input", () => {
    expect(() => isPalindrome(12321)).toThrow(TypeError);
});


// checking different number arrays to find the largest value
test("findMax finds the largest number", () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9);
});

test("findMax works with negative numbers", () => {
    expect(findMax([-5, -2, -10])).toBe(-2);
});

test("findMax works when the largest number is first", () => {
    expect(findMax([10, 5, 3, 2])).toBe(10);
});

test("findMax returns undefined for an empty array", () => {
    expect(findMax([])).toBe(undefined);
});

// checking that the function rejects input thats not an array of numbers
test("findMax rejects non-array input", () => {
    expect(() => findMax(10)).toThrow(TypeError);
});

test("findMax rejects non-number values", () => {
    expect(() => findMax([1, "10", 5])).toThrow(TypeError);
});