const pokeDatabase = require('./../15-Modularization/pokedatabase')

// console.log(pokeDatabase);

const pokeNameList = pokeDatabase.starterList;

// console.log(pokeNameList);

for (const pokemon of pokeNameList) {
    console.log(pokemon);
}


const pokeDetails = pokeDatabase.starterDetails

const moreMons = [

    [pokeNameList[0], pokeDetails[0].dex, pokeDetails[0].abilities],
    [pokeNameList[1], pokeDetails[1].dex, pokeDetails[1].abilities],
    [pokeNameList[2], pokeDetails[2].dex, pokeDetails[2].abilities],
    [pokeNameList[3], pokeDetails[3].dex, pokeDetails[3].abilities],

]


console.log(moreMons);

for (const pokemon of moreMons) {
    console.log(`${pokemon[0]}'s pokedex number is ${pokemon[1]} and its ability is ${pokemon[2]} `);
}