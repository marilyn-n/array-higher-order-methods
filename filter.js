const { numbersObj, numbers, foods, songs, pets } = require ('./data.js')

// filter with  ES6 FART unassigned anonymous function
const alivePets = pets.filter(animal => animal.alive === true)

const longPornStarNames = pets.filter(animal => animal.pornstarName.length > 10)

const untitledSongs = songs.filter(song => song.id != song.albumId)

const titledSongs = songs.filter(song => song.albumId === song.id)

const petsWithoutOwner = pets.filter(animal => !animal.owner)

const petsWithoutOwnerAndAlive = pets.filter(animal => !animal.owner && !animal.alive)

// filter with ES6 FART assigned anonymous function

const isFoodMoreThan8Chars = food => food.length > 8

const longFoodNames = foods.filter(isFoodMoreThan8Chars)

const isPizza = food => food === 'pizza'

const isPizza2 = food => isPizza(food)

const pizzas = foods.filter(isPizza)

const pizzas2 = foods.filter( food => isPizza(food))

const isNotLost = pet => !pet.lost
const notLostPets = pets.filter(isNotLost)

// filter with ES5 unassigned anonymous function

var evenNumbers = numbers.filter(function(num) {
  return num % 2 == 0
})

var myFavSongs = songs.filter(function(song) {
  return song.name === 'Traitor'
})
console.log(myFavSongs)