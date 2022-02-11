//node appV2.js ./assets/input/ex1.csv ./assets/output/result1.json -a

"use strict"

const fs = require("fs")
const ParserV2 = require("./parserV2.js")
console.log(process.argv.slice(2));
const argies = process.argv.slice(2)
const fileToRead = argies[0]
const fileToWrite = argies[1]  
const outputType = argies[2]

// fs.readFile(fileToRead, "utf8", (error, data)=>{
//     if (error) {
//         console.log(error);
//     } else {
//         const array = ParserV2.parseCSVToArray(data);
//         console.log(array);
//     }
// })

fs.readFile(fileToRead, "utf8", manageFileData)

function manageFileData(error, data) {
    if (error) {
        console.log(error);
    } else {
        const array = ParserV2.parseCSV(data, outputType);
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


