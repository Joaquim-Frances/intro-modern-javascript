

const saludar = function(nombre) {
    return `Hola, me llamo ${nombre}`;
}

const saludar2 = (nombre, apellido) => `Hola, mi nombre es ${nombre}, y soy super guay! porcierto, mi apellido es ${apellido}`;

console.log(saludar2('Sira', 'Francès'));


const getUser = ()=>({          // els parentesis funcionen per englobar parametres a retornar.
   
        id:45,
        username:'El_Papito',
    
})

console.log(getUser());

//Tarea
//1.Transformar a funcion de flecha.
//2.Retornar un objeto impiclito.
//3.Pruebas.

const getUsuarioActivo = (nombre) =>({
        id:'EL777',
        nom: nombre,
});

const usuario = getUsuarioActivo('Farnandu');
console.log(usuario);