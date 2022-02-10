"use strict"

const fs = require("fs")

class EmptyStringError extends Error {
    constructor(message) {
        super(message);
    }
}
class InvalidStringError extends Error {
    constructor(message) {
        super(message);
    }
}
class PartialInvalidStringError extends Error {
    constructor(message, partialResult) {
        super(message);
        this.partialResult = partialResult
    }
}


class Parser {

    static stringparser(string) {
        let parsedArray = []
        let stringNumber = string
        stringNumber = (string.replace(/[,]+/, ".")).replace(/[ ]/g, "")
        if (stringNumber.length > 0) {
            parsedArray = stringNumber.split(";")
        }

        let rightCount = 0
        let newArray = []
        for (let i = 0; i < parsedArray.length; i++) {
            const element = parsedArray[i];
            if (!isNaN(element)) {
                rightCount++
                newArray.push(parseFloat(element)) //THIS, needed to push the parsed element
            }
        }
        if (parsedArray.length === rightCount) {
            console.log("the string has been fully parsed");
        } else if (rightCount > 0 && rightCount < parsedArray.length) {
            throw new PartialInvalidStringError("Partially invalid string, the result was: " + (this.partialResult = newArray))
        } else if (rightCount = 0) {
            throw new InvalidStringError("The entire string is invalid")
        }
        if (newArray.length === 0) {
            throw new EmptyStringError("The string is empty")              //does not return empty error
        } else {
            return newArray
        }
    }
}

let data;
try {
    data = fs.readFileSync("./test.csv", "utf8")
    console.log("Unparsed String", data);
} catch (err) {
    console.log(err);
}

try {
    let res = Parser.stringparser(data)
    console.log("Parsed String", res);
    const sum = res.reduce((p, c) => p + c)
    console.log(sum);
} catch (error) {
    console.log(error.message);
}
