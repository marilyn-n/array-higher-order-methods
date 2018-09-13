const { numbersObj, numbers, foods, songs, pets, classroom, negativeNumbers } = require ('./data.js')
// El método some() verifica si algún elemento de un array cumple con 
// el test implementado por la función brindada.

const greaterThan50 = numbers.some(num => num > 50)

const isAlive = pets.some(animal => animal.alive)

const songHasId = songs.some(item => item.id === item.id)

const doesSongExists = songs.some(song => song.name === 'La Malagueña')

const isPositiveNumber = negativeNumbers.some(num => num > 0)

const hasAgeProperty = item => item.age
const petHasAge = pets.some(hasAgeProperty)
console.log(petHasAge)

const doesStudentExists = element => element.name === 'Marilyn'
const student = classroom.some(doesStudentExists)
console.log(student)

const foodLenght = arr => arr.length > 5
const foodSize = foods.some(foodLenght)
console.log(foodSize, '--------------')