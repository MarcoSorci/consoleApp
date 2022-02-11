"use strict"

const fs = require("fs")
const Parser2 = require("./parser2.js")
console.log(process.argv.slice(2));
const argies = process.argv.slice(2)
const fileToRead = argies[0]
const fileToWrite = argies[1]  

// fs.readFile(fileToRead, "utf8", (error, data)=>{
//     if (error) {
//         console.log(error);
//     } else {
//         const array = Parser2.parseCSVToArray(data);
//         console.log(array);
//     }
// })

fs.readFile(fileToRead, "utf8", manageFileData)

function manageFileData(error, data) {
    if (error) {
        console.log(error);
    } else {
        const array = Parser2.parseCSVToArray(data);
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

// let data;
// try {
//     data = fs.readFileSync(fileToRead, "utf8")
//     console.log("Unparsed String", data);
// } catch (err) {
//     console.log(err);
// }

// let res = []
// try {
//     res = Parser2.parseCsvLine(data)
//     console.log("Parsed String", res);
// } catch (error) {
//     console.log(error.message);
//     if (error instanceof PartialInvalidStringError) {
//         res = error.partialResult
//     }
// }

// try {
//     fs.writeFileSync(fileToWrite, JSON.stringify(res))  
// } catch (error) {
//     console.log(error);
// }

