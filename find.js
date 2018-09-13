const { numbersObj, numbers, foods, songs, pets, classroom } = require ('./data.js')

const firstMale = classroom.find(student => student.gender === 'M')
console.log(firstMale)

const firstFemale = classroom.find(student => student.gender === 'F')
console.log(firstFemale)

const isPetAdopted = pet => !pet.owner && !pet.alive && !pet.lost

const firstPetAdopted = pets.find(isPetAdopted)
console.log(firstPetAdopted)

const 