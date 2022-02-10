"use strict"

const fs = require("fs")
const {Parser, PartialInvalidStringError, EmptyStringError, InvalidStringError} = require("./parser.js")
console.log(process.argv);
const argies = process.argv.slice(2)
const fileToRead = argies[0]
const fileToWrite = argies[1]  

let data;
try {
    data = fs.readFileSync(fileToRead, "utf8")
    console.log("Unparsed String", data);
} catch (err) {
    console.log(err);
}

let res = []
try {
    res = Parser.stringSplitter(data)
    console.log("Parsed String", res);
} catch (error) {
    console.log(error.message);
    if (error instanceof PartialInvalidStringError) {
        res = error.partialResult
    }
}

try {
    fs.writeFileSync(fileToWrite, JSON.stringify(res))  
} catch (error) {
    console.log(error);
}

