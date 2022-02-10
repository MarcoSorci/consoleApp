"use strict"

const fs = require("fs")
const {Parser, PartialInvalidStringError, EmptyStringError, InvalidStringError} = require("./parser")
console.log(process.argv/*.slice(2)*/); //prints the arguments as an array, the slice cuts the first two since we don't need them
const argies = process.argv.slice(2)
const fileToRead = argies[0]
const fileToWrite = argies[1]  //select them after slicing

let data;
try {
    data = fs.readFileSync(fileToRead, "utf8")
    console.log("Unparsed String", data);
} catch (err) {
    console.log(err);
}

let res = []
try {
    res = Parser.stringparser(data)
    console.log("Parsed String", res);
    const sum = res.reduce((p, c) => p + c)
    console.log(sum);
} catch (error) {
    console.log(error.message);
    if (error instanceof PartialInvalidStringError) {
        res = error.partialResult
    }
}

try {
    fs.writeFileSync(fileToWrite, JSON.stringify(res))  //has to be a string, that's why you stringify
} catch (error) {
    console.log(error);
}

