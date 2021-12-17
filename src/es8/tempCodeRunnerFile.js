const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (false) ? setTimeout(() => resolve('Hello world'), 3000) : reject(new Error('Error en promesa'));
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