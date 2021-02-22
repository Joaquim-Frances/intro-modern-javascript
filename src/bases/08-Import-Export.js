import  heroes  from "../data/heroes";

// const getHeroeByOwner = (owner) => heroes.find(heroe => heroe.owner === owner);


export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);


export const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

//console.log(getHeroeById(2));


