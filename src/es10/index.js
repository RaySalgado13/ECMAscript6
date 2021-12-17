let array = [1,2,3,[1,2,3,[1,2,3]]];
console.log(array.flat());
console.log(array.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

let hello = '              hello world   ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

try {
    
} catch {
    error
}

/* From entries */

let entries = [["name","Ray"],["age",20]];
console.log(Object.fromEntries(entries)); //Transforma los valores de un arreglo a un objeto

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);

