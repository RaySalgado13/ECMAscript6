const data = {
    frontend: 'Ray',
    backend: 'Rusia',
    design: 'Ana'
};


const entries = Object.entries(data); //Convierte un objeto a una matriz
console.log(entries);
console.log(entries.length);

//********//

const values = Object.values(data); //Convierte los valores de un objeto a un arreglo
console.log(values);
console.log(values.length);

//********//

const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12, '------'));
console.log('food'.padEnd(12, '--------'));



const obj = {
    name: 'Fisher', //La coma indica que puede haber un segundo valor
}


/*ASYNC AWAIT*/
const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true) ? setTimeout(() => resolve('Hello world'), 3000) : reject(new Error('Error en promesa'));
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    //const hello2 = await helloWorld2();
    console.log(hello);
}

helloAsync();

//Otro modo de hacerlo
const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }
    catch(error){
        console.log(error);
    }
};

anotherFunction();