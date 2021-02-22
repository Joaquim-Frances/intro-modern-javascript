

// const promesa = new Promise((resolve, reject)=>{

//     setTimeout(() => {
//         //Tarea
//         const heroe = getHeroeById(3);
//         resolve(heroe);
//         //reject('No se pudo encontrar el heroe.')
//     }, 4000);
// });

// promesa.then((heroe)=>{
//     console.log(heroe);
// })
// .catch(err=>console.warn(err))

const getHeroeByIdAsync = ( id ) =>{

    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            //Tarea
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el heroe.')
            }

        }, 4000);
    });
    
}

getHeroeByIdAsync(3)
        .then(  console.log )
        .catch(console.warn);