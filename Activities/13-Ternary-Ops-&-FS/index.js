const { log } = require('console');
const fs = require('fs');



// console.log(arg1);

function determineIfPokemon(isPokemon) {
    
    return isPokemon == "pokemon" ? 'Catch yo mons' : 'Not a mons';
}


const arg1 = process.argv[2]
const argApokemon = determineIfPokemon(arg1);
console.log(arg1);
console.log(argApokemon);

//currently, not sure if there's a way to directly return a true/false boolean value from process.argv x.x

fs.writeFile('log.txt', arg1, (err) =>
    err ? console.log(err) : console.log('Sucess!')
)