
class Parser2 {

    static parseCSVToArray(csv) {
        const cleanCSV = this.removeSpaces(this.changeCommawithFullStop(csv))
        const lines = this.splitByLine(cleanCSV);
        let array = [];

        for (const line of lines) {
            const lineArray = this.parseLine(line);
            array = array.concat(lineArray);
        }
        return array;


    }

    // static parseCSVToMatrix(csv) {

    // }

    // static parseCSV(csv) {

    // }

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
        const lines = string.split(/\n?\r/);
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

module.exports = Parser2;