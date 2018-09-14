# Array Higher Order Methods

A higher order function is a function that may receive a function as parameter.

## Detailed examples with array methods

* map

* filter

The filter method can only accept a predicate function as an argument. It returns a new array of the elements that pass the test.

```
// example filter.js

const numbers = [1, 39, 7, 5, 3.2, , 2, 67]

const isGreaterThan10 = numbers.filter(num => num > 10)

// expected output [ 39, 67 ] <-------- new array

```

* find
The find method can only accept a predicate function as an argument. It returns the value of the first true element that passes the predicate test.

```
// example find.js

const pets = [
  { name: 'Max', alive: false }
  { name: 'Charlie', alive: true },
  { name: 'Max', alive: false }
]

const isAlive = pets.find(pet => !pet.alive)

// expected output [
  { name: 'Max', alive: false },
  { name: 'Max', alive: false }
] <--------------- new array

```

* some
The some method it can only take a predicate function as an argument. The some() method verifies if some of the elements of the array pass the test. It returns a true or false value.

```
// example some.js

const pet = [
  { name: 'Max', alive: false }
  { name: 'Charlie', alive: true },
  { name: 'undefined', alive: false }
]

const hasName = pets.some(pet => pet.name)

// expected output ----> true

```

* every 

The every method, same as filter(), find() and some() it can only take a function as argument. The every method verifies if all of the elements in the array pass the condition. It returns a true / false value.

```
// every.js

const numbers = [1, 39, -7, 5, -3.2, -2, 67]

const isAPositiveNumber = numbers.every(num => num > 0)

// expected output -----> false

```