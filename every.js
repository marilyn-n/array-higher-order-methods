const { numbersObj, numbers, foods, songs, pets, classroom, negativeNumbers } = require ('./data.js')
// El método every() verifica si todos los elementos en el arreglo pasan la prueba 
// implementada por la función dada.

const allPetsHaveOwner = pets.every(animal => animal.owner)

const areAllPositiveNumbers = numbers.every(num => num > 0)

const areAllFemale = classroom.every(alumn => alumn === 'F')

const petsAreDead = pets.every(pet => !pet.alive)

const onlyRancheras = songs.every(item => item.category === 'Rancheras')

const areAllUndefinedArtists = artist => artist === undefined
const undefinedArtist = songs.every(areAllUndefinedArtists)

const positiveIds = item => item.id > 0
const positiveSongIds = songs.every(positiveIds)
console.log(positiveSongIds)