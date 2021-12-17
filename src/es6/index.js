
/*PARAMETROS*/

//Antes de ES6
function newFunction(name,age,country){
    var name = name || 'Ray'; //Si no hay valor por parametro, se le asigna el valor 'Ray' 
    var age = age || 32;
    var country = country || 'Mexico';

    console.log(name,age,country);
}

//Con Es6
function  newFunctionES6(name = 'Ray', age = 32, country = "Mexico"){
    console.log(name,age,country);
}

newFunctionES6();//se ejecuta con los valores por defecto
newFunctionES6('Fisher',21,'Colombia');

/*TEMPLATE LITERALS*/

let hello = "Hello";
let world = "World";

//Antes de ES6
let phrase = hello + ' ' + world;
console.log(phrase);

//Con ES6
let phraseES6 = `${hello} ${world} with ES6`;
console.log(phraseES6);

/*MULTILINEA*/

//Antes de ES6
let lorem = "una michi sorprendente, curvigorda y elocuente \n"
+ "magnificamente colosal, extravagante y animal";
console.log(lorem);

//Con ES6
let loremES6 = `una michi sorprendente, curvigorda y elocuente
magnificamente colosal, extravagante y animal with ES6`;
console.log(loremES6);

/*DESTRUCTURACION DE ELEMENTOS*/

let person = {
    'name': 'Ray',
    'age': 20,
    'country': 'Mexico'
};

//Antes de ES6
console.log(person.name, person.age, person.country);

//Con ES6
let {name, age, country} = person; //Se puede modularizar los parametros 
console.log(name,age,country);


let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Rusia', 'Camila'];

//Antes de ES6
let education = ['David','Oscar', 'Julian', 'Ricardo','Valeria', 'Rusia', 'Camila'];

//Con ES6
let education = ['David',...team1, ...team2];
console.log(education);


/*VARIABLES Y CONTEXTOS*/

var hola = 'hola'; //varibale global modificable
let holaLet = 'hola'; //variable que solo existe en el scope (o bloque) en el que es llamado
const constante = 'constante';//Variable gloabl pero no modificable

{
    var globalVar = "global var"; 
}

{
    let globalLet = "global Let";
    console.log(globalLet); //Aqui si es alcanzable el let
}

console.log(globalVar);
//console.log(globalLet); -> error ya que en este punto no es alcanzable 
//constante = 'variable'; -> error, ya que no se puede modificar el valor de un const


/*PARAMETROS EN OBJETOS*/

let name = 'Ray';
let age = 21;

//Antes de ES6
obj = {name: name, age: age};
console.log(obj)

//Con ES6
objES6 = {name, age};
console.log(objES6);


/*ARROW FUNCTIONS*/

const names = [
    {name: 'Ray', age: 20},
    {name: 'Rusia', age: 21}
];

//Antes de ES6
let listOfNames = names.map( 
    function(item){ //Funcion anonima
        console.log(item.name); //Por cada uno de los elementos del arreglo se imprime el nombre
    }
);

//Con ES6
let listOfNamesES6 = names.map(item => console.log(item.name));

const listOfNamesES6_2 = (name, age) => {
    //... codigo a realizar
}

const listOfNamesES6_3 = name => {
    //... codigo a realizar
}

const square = num => num * num; //Se crea funcion que recibe un valor num y lo que realiza es multiplicarlo por si mismo


/*PROMESAS*/

//Async = dos eventos no suceden al mismo tiempo sino que en una serie de situaciones segun dado el caso (como llamar un API) se llama a una promesa
//Promesa = en un tiempo establecido se realizará una instruccion indicada

const helloPromise = () =>{
    return new Promise((resolve, reject) =>{
        if(false){
            resolve('Hey, todo bien, se resolvió la promesa');
        }
        else{
            reject('Ups jeje');
        }
    });
}

helloPromise()
.then(response => console.log(response))
//.then(... //instrucciones)
.catch(error => console.log(error));


/*CLASES*/

class Calculator{
    
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        
        return this.valueA + this.valueB;
    }

}

const calc = new Calculator();
console.log(calc.sum(2,2));

/*MODULOS*/

import {hello} from './module';
hello();


/*GENERATORS*/
//un generator es una funcion especial que retorna una serie de valores segun el algoritmo definido

function* helloWorld(){

    if(true){
        yield 'Hello, '; //step 1
    }
    if(true){
        yield 'World'; //step 2
    }
};

const generatorHello = helloWorld();
//next() = permite ejecutar la primer logica y obtener el valor segun sea el caso y al ejecutar el siguiente valor next va  recordar donde estaa la asignacion logica recien creada para mostrar el segundo valor, asi sucesivamente por cada step dentro de la logica del generator     
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
//console.log(generatorHello.next().value); -> como solo hay dos yields este tercer console es undefined
