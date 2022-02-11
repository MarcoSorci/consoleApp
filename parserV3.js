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