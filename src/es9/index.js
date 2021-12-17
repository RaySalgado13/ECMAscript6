/*Operador de reposo*/
//el operador de reposo permite extraer las propiedades de un objeto que aun no se ha construido
const obj = {
    name: 'Ray',
    age: 21,
    country: 'MX',
};

let { name, ...all} = obj;
console.log(name, all);

let {country, ...all2} = obj;
console.log(all2);

/*Propiedades de propagacion*/

const obj = {
    name: 'Ray',
    age: 21
};

const obj2 = {
    ...obj, //Une el obj con obj2
    country: 'MX'
}

console.log(obj2);

/*Promise .finally */

const helloWorld = () =>{
    return new Promise((resolve, reject) =>{
        (true) ? 
        setTimeout(() => resolve('Hello word'),3000) :
        reject(new Error('Error xd'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'));


/*REGEX*/

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2021-03-27');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day);