const { numbersObj, numbers, foods, songs, pets } = require ('./data.js')

// ES6 map with anonymous function

numbers.map(num => console.log(`number ${num} **************`))

const allSongIds = songs.map(song => song.id) 

const allMyPets = pets.map(animal => `My pet ${animal.name}` )

const aboutMyPets = pets.map(item => item)

const petsAreAlive = pets.map(pet => pet.alive) 

// ES6 map with assigned-anonymous-function

const songName = song => song.name
const allSongNames = songs.map(songName)

const songArtist = song => song.artist
const allSongArtist = songs.map(songArtist)

const iLike = element => `I like to eat ${element}`
const myLikes = foods.map(food => iLike(food)) 

// ES5 map with unassigned anonymous function

var categories = songs.map( function(item) {
  console.log(item.category, '```````^^^^^^^^')
})

pets.map(function(animal) { 
  console.log(animal)
})
