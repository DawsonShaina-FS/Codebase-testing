// adding all the numbers in an array
function sumOfArray(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array");
    }

    for (let number of arr) {
        if (typeof number !== "number") {
            throw new TypeError("Array must contain only numbers");
        }
    }

    let sum = 0;

    for (let number of arr) {
        sum += number;
    }

    return sum;
}

// reversing a string
function reverseString(str) {
    if (typeof str !== "string") {
        throw new TypeError("Input must be a string");
    }

    return str.split("").reverse().join("");
}

// checking if a string is a palindrome
function isPalindrome(str) {
    if (typeof str !== "string") {
        throw new TypeError("Input must be a string");
    }

    const reversed = str.split("").reverse().join("");

    return str === reversed;
}

// finding the largest number in the array
function findMax(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array");
    }

    for (let number of arr) {
        if (typeof number !== "number") {
            throw new TypeError("Array must contain only numbers");
        }
    }

    if (arr.length === 0) {
        return undefined;
    }

    let max = arr[0];

    for (let number of arr) {
        if (number > max) {
            max = number;
        }
    }

    return max;
}

module.exports = {
    sumOfArray,
    reverseString,
    isPalindrome,
    findMax
};