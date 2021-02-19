//Desestructuracion
//Asignacion desestructurante
const persona = {
    nombre: 'Steve',
    edad: 41,
    clave: 'Capitan America,'
}

const {nombre, edad, clave} = persona;

// console.log(nombre, edad, clave);


const Context = ({clave, nombre, edad, rango = 'Liutenant'})=>{
    //console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 45565,
            lng: 7554,
        }
    }
}

const avenger = Context(persona);

const {nombreClave, anios, latlng:{lat, lng}} = avenger;

console.log(nombreClave, anios, lat, lng);