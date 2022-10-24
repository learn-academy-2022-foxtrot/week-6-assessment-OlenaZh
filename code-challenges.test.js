// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("mySentence", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(mySentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee.",])
  })
})
// FAIL  ReferenceError: mySentence is not defined

// b) Create the function that makes the test pass.

// first I define a function and name it mySentence
// pass array as a parameter
// I use .map() method to iterate through each object
// I use .toUpperCase() method  and chartOf() to convert the first letters of name value to capital letter
// I add a substring to my capitalized letters 
// I use + operator and "is" to connect values of occupation with name values

const mySentence = (arr) => {
  
  return  arr.map((obj) => obj.name.charAt(0).toUpperCase() + obj.name.substring(1, obj.name.indexOf(' '))+ ' ' + obj.name.charAt(obj.name.indexOf(' ') + 1).toUpperCase() + obj.name.slice(obj.name.indexOf(' ') + 2) +' is ' + obj.occupation + '.')
  
}

// PASS  ./code-challenges.test.js
// mySentence
// ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.14 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.53s.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("onlyRemainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
   
    expect(onlyRemainders(hodgepodge1)).toEqual([2, 0, -1, 0 ])
    expect(onlyRemainders(hodgepodge2)).toEqual([2, 1, -1])
  })
})
// FAIL   ReferenceError: onlyRemainders is not defined

// b) Create the function that makes the test pass.

// first I define a function and name it onlyRemainders 
// I pass array as a parameter
// use .filter() method to iterate though the array and check the datatype of each value. 
// filter and return numbers only
// use .map() method to iterate through the filtered array 
// use modulus to divide each number by 3
// return the reminders only

const onlyRemainders = (arr) => {
  return arr.filter((value) => typeof value === "number").map((element) => element % 3)
}

//  PASS  ./code-challenges.test.js
//   onlyRemainders
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.139 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.55s.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumOfCubedNums", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
   
    expect(sumOfCubedNums(cubeAndSum1)).toEqual(99)
    expect(sumOfCubedNums(cubeAndSum2)).toEqual(1125)
  })
})
// FAIL      ReferenceError: sumOfCubedNums is not defined

// b) Create the function that makes the test pass.

// first I define a function and name it sumOfCubedNums 
// I pass array as a parameter
// create a new variable to store my result
// use for loop to iterate through each element in the array and cube it and add to the result. 
// return the sum of all the numbers cubed.

const sumOfCubedNums = (arr) => {
  let result = 0;
  
  for (let i = 0; i < arr.length; i++) {
    result = result + (arr[i] * arr[i] * arr[i])
  }
  return result
}

//  PASS  ./code-challenges.test.js
//   sumOfCubedNums
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.139 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.56s.
