const nom = 'Quim';
const cognom = 'Frances';

const nomComplet = `
${nom} 
${cognom}
${1000 - 3}
`;
//const nomComplet = nom + ' ' + cognom;

console.log(nomComplet);

function getSaludo(nom){
    return 'Hola Arnau!! Soc el ' + nom;
}

console.log( `${getSaludo(nom)}`);