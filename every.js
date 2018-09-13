const { numbersObj, numbers, foods, songs, pets, classroom } = require ('./data.js')
// El método every() verifica si todos los elementos en el arreglo pasan la prueba 
// implementada por la función dada.

const allPetsHaveOwner = pets.every(animal => animal.owner)
console.log(allPetsHaveOwner)