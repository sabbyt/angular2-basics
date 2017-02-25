function areTheyAwesome (name) {
  if (name === 'nico') {
    var awesome = true
  }
  return awesome
}
areTheyAwesome('nico')
// <- true
areTheyAwesome('christian heilmann')
// <- undefined

// let = follows block scoping rules instead of the default function scoping rules
let outer = 'I am so eccentric!'
{
  let inner = 'I play with neighbors in my block and the sewers'
  {
    let innermost = 'I only play with neighbors in my block'
  }
  // accessing innermost here would throw
}
// accessing inner here would throw
// accessing innermost here would throw

// TDZ
there = 'far away'
// <- ReferenceError: there is not defined
let there = 'dragons'

// If your code tries to access there in any way before the let there statement is reached, the program will throw. Declaring a method that references there before it’s defined is okay, as long as the method doesn’t get executed while there is in the TDZ, and there will be in the TDZ for as long as the let there statement isn’t reached (while the scope has been entered). This snippet won’t throw because return there isn’t executed until after there leaves the TDZ.
function readThere () {
  return there
}
let there = 'dragons'
console.log(readThere())
// <- 'dragons'

// const - is also block-scoped
// const variables must be declared using an initializer
// const variables can only be assigned to once, in said initializer
// const variables don’t make the assigned value immutable
