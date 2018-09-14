# Array Higher Order Methods

A higher order function is a function that receives a function as parameter. (The parameter could be an anonymous function definition or an identifier token - which stores an anonymous function).

## Detailed examples with array methods

* map

The map method applies a function to each element in the array. It returns a new array of the same size with each of the elements is a function application (transformed) of the original element.
 
```

// example map.js

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

const daysToUpperCase = days.map(element => element.toUpperCase())

// expected output ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'] <----- returned new array transformed

```

* filter

The filter method can only accept a predicate function as an argument. It returns a new array of the elements that pass the predicate test. The return from the filter method will be an array, its size could be smaller than the original array.

```

// example filter.js

const numbers = [1, 39, 7, 5, 3.2, , 2, 67]

const numbersGreaterThan10 = numbers.filter(num => num > 10)

// expected output [ 39, 67 ] <-------- returned new array

```

* find

The find method can only accept a predicate function as an argument. It returns the value of the first element that passes the predicate test.

```

// example find.js

const pets = [
  { name: 'Max', alive: false }
  { name: 'Charlie', alive: true },
  { name: 'Max', alive: false }
]

const petsAlive = pets.find(pet => !pet.alive)

// expected output [
  { name: 'Max', alive: false },
  { name: 'Max', alive: false }
] <--------------- returned new array

```

* some
The some method can only take a predicate function as an argument. The some() method verifies if some (any, at least one) of the elements of the array pass the predicate test. It returns a boolean true / false value.

```
// example some.js

const pets = [
  { name: 'Max', alive: false }
  { name: 'Charlie', alive: true },
  { name: 'undefined', alive: false }
]

const atLeastOneName = pets.some(pet => pet.name)

// expected output ----> returned true

```

* every 

The every method, same as filter(), find() and some(), it can only take a predicate function as argument. The every method verifies if all of the elements in the array pass the predicate condition. It returns a boolean (true / false) value.

```

// every.js

const numbers = [1, 39, -7, 5, -3.2, -2, 67]

const allArePositiveNumbers = numbers.every(num => num > 0)

// expected output -----> returned false

```