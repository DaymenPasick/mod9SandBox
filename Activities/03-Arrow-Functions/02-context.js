// const pokemon = {
//     name: "Pikachu",
//     specialAttack: "Thunderbolt",
//     attack: function() {
//         console.log(this.name + " used " + this.specialAttack + "!");
//         setTimeout(function() {
//             console.log(this.name + "!");
//         }, 100)
//     }
// };

// pokemon.attack()

//first example wont fully work because "this" within setTimeout doesn't refer to the object
//arrow functions make any function refer to the object it's created within 

const pokemon = {
    name: "Pikachu",
    specialAttack: "Thunderbolt",
    attack: function() {
        console.log(this.name + " used " + this.specialAttack + "!");
        setTimeout(() => console.log(this.name + "!"), 100)
    }
};

pokemon.attack()