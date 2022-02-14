//node appV3.js ./assets/input/test4.csv ./assets/output/test4_res.json

"use strict"

const fs = require("fs")
const ParserV3 = require("./parserV3.js")
console.log(process.argv.slice(2));
const argies = process.argv.slice(2)
const fileToRead = argies[0]
const fileToWrite = argies[1]  

fs.readFile(fileToRead, "utf8", manageFileData)

function manageFileData(error, data) {
    if (error) {
        console.log(error);
    } else {
        const array = ParserV3.parseCSVofObjects(data);
        const json = JSON.stringify(array);
        writeJSONFile(json);
    }
}

function writeJSONFile(jaySon) {
    fs.writeFile(fileToWrite, jaySon, error => {
        if (error) {
            console.log(error);
        } else {
            console.log("noice!");
        }
    })
}

console.log("here ends thy code");


