const { numbersObj, numbers, foods, songs, pets } = require ('./data.js')

// ES6 filter with anonymous function
const petIsAlive = pets.filter(animal => animal.alive === true)

const lenghtName = pets.filter(animal => animal.pornstarName.length > 10)

const album = songs.filter(song => song.id != song.albumId)

const albumIds = songs.filter(song => song.albumId === song.id)

const withoutOwner = pets.filter(animal => !animal.owner)

const withoutOwnerAndAlive = pets.filter(animal => !animal.owner && !animal.alive)

// ES6 filter with function expression over the array

const eightCharAtFoods = food => food.length > 8
const foodLenght = foods.filter(eightCharAtFoods)

const isNotLosted = pet => !pet.lost
const findPet = pets.filter(isNotLosted)

// ES5 filter

var myNumbers = numbers.filter(function(num) {
  return num % 2 == 0
})

var myFavSongs = songs.filter(function(song) {
  return song
})
console.log(myFavSongs[0])