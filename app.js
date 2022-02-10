"use strict"

const fs = require("fs")

class Parsey {

    static parse1(string) {
        let parsedArray = []
        let stringNumber = string
        stringNumber = (string.replace(/[,]+/, ".")).replace(/[ ]/g, "")
        parsedArray = stringNumber.split(";")
        return parsedArray
    }
}

try {
    const data = fs.readFileSync("./test.csv", "utf8")
    console.log(Parsey.parse1(data));
} catch (err) {
    console.log(err);
}




//after parsing as numberarray do sum