const persona = {
    nombre: 'Quim',
    apellido: 'Francès',
    edad: 41,
    altura: 1.79,
    direccion: {
        calle: 'Verdaguer 5, 2a',
        poblacion: 'Odena',
        provincia: 'Barcelona',
    }

};

const persona2 = {...persona};
persona2.nombre = 'Peter';
persona2.apellido = 'Porker';

console.log(persona);
console.log(persona2);
// console.table(persona);