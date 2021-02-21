import { heroes } from "./data/heroes";

// const getHeroeByOwner = (owner) => heroes.find(heroe => heroe.owner === owner);


const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

console.log(getHeroeByOwner('DC'));



