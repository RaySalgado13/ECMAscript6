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