/*
1) clean string from spaces and commas
2) line array (lines) splitted on newline
3) make an array of properties (properties) splitting the first line on semicolons
4) make empty array (users) to contain objs
5) cycle on remaining lines 
for each line: 
        6) make an array of words (words), breaking on semicolon and parsing words,
        7) make an empty object,
        8) cycle on property array, and for each property:
                9)assign to obj the property attribuendogli il valore corrispondente all'indice della proprietà nell'array di parole
        10) add the obj to the users array
11) return users array
*/

class ParserV3 {

    static parseCSVofObjects(csv) {
        const cleanCSV = this.removeSpaces(this.changeCommawithFullStop(csv))
        const lines = this.splitByLine(cleanCSV);
        console.log(lines);
        let properties = this.splitStringOnSemicolon(lines[0]);
        let users = []
        for (let i = 1; i < lines.length; i++) {
            let words = this.parseLine(lines[i])
            let obj = {}
            for (let a = 0; a < properties.length; a++) {
                const prop = properties[a];
                obj[prop] = words[a]
            }
            users.push(obj)
        }
        return users;
    }

    static parseWord(word) {

        if (!isNaN(word)) {
            return parseFloat(word);
        }
        if (word.toLowerCase() === "true" || word.toLowerCase() === "false") {
            return word.toLowerCase() === "true";
        }
        if ((new Date(word) !== "Invalid Date") && !isNaN(new Date(word))) {
            return new Date(word)
        }
        return word;
    }

    static parseLine(line) {
        const words = this.splitStringOnSemicolon(line);
        const array = [];
        for (const word of words) {
            const value = this.parseWord(word)
            array.push(value);
        }
        return array;
    }

    static splitByLine(string) {
        const lines = string.split(/\r?\n/);  //sometimes the order of /r and /n matters, so first and foremost do it like this
        return lines
    }

    static replaceAll(string, charToReplace, newChar) {
        const regex = new RegExp(charToReplace, 'g')
        return string.replace(regex, newChar)
    }

    static removeSpaces(string) {
        return this.replaceAll(string, " ", "")
    }

    static changeCommawithFullStop(string) {
        return this.replaceAll(string, ",", ".")
    }

    static splitStringOnSemicolon(string) {
        return string.split(";")
    }
}

module.exports = ParserV3;