const pokeInfo = [
    { name: "Slaking", dexNumber:1, pokeType:"Normal", trait:"Lazy" },
    { name: "Gothica", dexNumber:2, pokeType:"Dark", trait:"Gaunt" },
    { name: "Regice", dexNumber:3, pokeType:"Ice", trait:"Clear Body" },
    { name: "Snorlax", dexNumber:4, pokeType:"Normal", trait:"Lazy" },
    { name: "Bayleef", dexNumber:5, pokeType:"Grass", trait:"Chlorophyl" },
    { name: "Munchlax", dexNumber:6, pokeType:"Water", trait:"Lazy" }
  ];


  const infoCopy = structuredClone(pokeInfo);

  infoCopy.unshift({ name: "Pikachu", dexNumber:0, pokeType:"Electric", trait:"Jolly" })
//   infoCopy.pop();

  console.log(infoCopy);

  const pokeNames = infoCopy.filter(pokemon => console.log(pokemon.name))

  console.log(pokeNames);

  const dexNumberSift = pokemon => {
    if (pokemon.dexNumber > 3) {
        return pokemon
    }
  }

  const siftedMons = infoCopy.filter(dexNumberSift);

  console.log(siftedMons);


  const dexArray = pokeInfo.map(function(pokemon){
    return pokemon.dexNumber
  })


  console.log(dexArray);
  console.log(pokeInfo);