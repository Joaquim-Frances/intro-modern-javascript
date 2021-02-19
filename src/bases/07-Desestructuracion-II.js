const personajes = ['Goku', 'Krilin', 'Yamcha'];

const [ , ,p1] = personajes;

console.log(p1);

const retornaArray = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArray();

console.log(numeros);

//Tarea
//1. primer valor del array se llamara nombre.
//2. se llamara ponNombre.
const state = (nombre) =>{
    return [nombre, ()=>{console.log('Hola Mundo')}];
}

const [nombre, ponNombre] = state('Sara');

console.log(nombre);

ponNombre();