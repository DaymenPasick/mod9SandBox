// const createPokeBerry = function(flavor, perk) {
//     return "The flavor is " + flavor + " and it " + perk;
// }

// console.log(createPokeBerry("sour", "recovers 10 hp"));

// // => replaces "function" keyword
// const createPokeBerry = (flavor, perk) => {
//     return "The flavor is " + flavor + " and it " + perk;
// }

// console.log(createPokeBerry("sour", "recovers 10 hp"));

//because it contains only 1 expression, we can remove curly braces, and "return" keyword is implied
const createPokeBerry = (flavor, perk) => "The flavor is " + flavor + " and it " + perk;

console.log(createPokeBerry("sour", "recovers 10 hp"));

const announceBerry = berry => console.log(berry);

const appaBerry = createPokeBerry("bitter", "restores any lowered stat")

announceBerry(appaBerry)