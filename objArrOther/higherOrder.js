 // *** ARRAY METHODS *** //

// MAP

// What does map take in?
// A callback function
// That callback has three parameters: current element, the current index, the whole array
// Whatever the callback returns, will be pushed into the new copy

let mapArr = [1, 2, 3];
let mapCopy = [];
// console.log(mapArr, mapCopy)
for (let i = 0; i < mapArr.length; i++) {
  mapCopy.push(mapArr[i] + 1);
}

// console.log(mapArr, mapCopy)


let mapCopy2 = mapArr.map(function (element, index, array) {
  // Whatever I return will be put into the new copy
  // element = 4;
  return element + 2;
});
// console.log(mapArr, mapCopy2);

// What does map do?
// Creates a new copy of the original array. 
// Loops over the original array
// Gives you access to each element in the original
// Allows you to modify each element in your copy as you loop

// What does map return?
// The modified copy array

// FILTER

// What does filter take in?
// A callback function
// That callback has three parameters: current element, the current index, the whole array
// if the callback returns a truthy value, the current element will be added to the copy
// if the callback returns a falsy value, the current element will not be added to the copy
let filterArr = [ 1, 2, 3, 4, 5, 6, 7, 8, undefined, null];
let filterCopy = [];
// console.log('orignal unfiltered', filterArr, 'filtered array', filterCopy)
for(let i = 0; i < filterArr.length; i++) {
  if (filterArr[i] % 2 === 0) {
    filterCopy.push(filterArr[i]);
  }
}
// console.log('orignal unfiltered', filterArr, 'filtered array', filterCopy)

let filterCopy2 = filterArr.filter(function(el, i, arr){
  // if(el % 2 === 0) {
  //   return 'hello'
  // }
  return el
})

// console.log('original unfiltered', filterArr, 'filtered arr', filterCopy2)


// What does filter do?
// create a copy of the original array
// loop through that array
// gives you access to the current element
// determines if that element should added to the new copy or not, based on truthy or falsy values

// What does filter return?
// A copy of the original array
// That only contains the elements that passed the test

// REDUCE

// What does reduce take in?
// A callback
// that callback has four parameters, the current accumulation, the current element, the current index, and the whole array
// whatever the callback returns will be the value of the accumulation (aka sum);

let reduceArr = [1, 23, 45, 36];
let sum = 0;

for (let i = 0; i < reduceArr.length; i++) {
  sum = sum + reduceArr[i];
}
// console.log('orignal unreduced arr', reduceArr,'sum', sum)

let sum2 = reduceArr.reduce(function(sum, el, i, arr){
  // console.log(sum, el);
  return sum + el
},9);
// What does reduce do?
// loops through an array
// gives access to the current element
// takes a whole array, and turns it into a single value

// What does reduce return?
// the final accumulation (aka sum) of all the values in the original array

// *** OBJECTS *** //

// DELETE

// How do we remove a property from an object?

let dragon = {
  color: 'red',
  scales: 'shiny',
  claws: 'sharp',
  fur: 'fluffy'
}
let str = 'beth'
dragon.size = 'big';

dragon.fur = undefined;

delete dragon.fur;

delete dragon.color;



// Can we delete entire objects?
// delete dragon

// window.molerat = 'stuff'

// console.log(molerat)

// FOR IN LOOPS

// How do we access a property in an object using a variable?



let instructor = {
  name: 'Beth',
  hair: 'blonde',
  eyes: 'blue',
  work: 'DevMountain',
  hobby: 'code'
}
for (let prop in instructor) {
  // console.log(instructor[prop])
}


var prop = 'name';

// How do we access every property in an object?

// MINI (for in)

// OBJECT ASSIGN

// How do we copy objects in JavaScript?
var num1 = 7;

var num2 = num1;

num2++;
// console.log(num1);
// console.log(num2);


let cat1 = {
  color: 'white',
  furLength: 'long'
}

let cat2 = cat1;

cat2.color = 'black';
// console.log(cat1);
// console.log(cat2);

// How can we actually copy the object?
let cat3 = {
  color: cat1.color
}

// console.log(cat1);
// console.log(cat3);

cat3.color = 'brown';

// console.log(cat1);
// console.log(cat3);


// What methods can we use to accomplish this?
// for in loop (still kind of a lot of typing)
// Object.assign()

let cat4 = Object.assign({}, cat1);
cat4.color = 'calico'
// console.log(cat1);
// console.log(cat4);


// DESTRUCTURING

// Sometimes we need to store the data from an object property in a variable. How would we do this?
let myFavoriteDog = {
  breed: 'husky',
  color: 'white'
}
myFavoriteDog.breed

function breedLogger() {
  let breed = myFavoriteDog.breed;
  let color = myFavoriteDog.color;

  console.log(breed);
  console.log('my favorite dog is a ' + breed)
  console.log(`my favorite dog is a ${breed}`)
}

let arr2 = [1, 2, 3]; 
let [, , second] = arr2;
// console.log(second)

// ES6 brings a faster way to do this. What does destructuring look like?
function breedLogger2() {
  let {breed, color} = myFavoriteDog;

  console.log(breed);
  console.log('my favorite dog is a ' + breed)
  console.log(`my favorite dog is a ${breed}`)
}

// breedLogger2()


// MINI (destructuring)


// *** NESTING *** //

// Review complex data structures

// Nested looping

//// for loops

//// for in loops


// *** ARROW FUNCTIONS *** //

// What if we could write functions with less typing?

function first() {
  console.log('this function has no parameters')
  return 0;
}

let arrowFirst = () => 7

function second(param) {
  console.log('this function has one parameter: ' + param)
}

let arrowSecond = param => {return 8}

function third(param1, param2) {
  console.log('this function has two parameters: ' + param1 + ' & ' + param2)
}

let arrowThird = (param1, param2) => {
 return param1
}


// let mapCopy2 = mapArr.map(element => element + 2);

// MINI (arrows)


// *** CLASSES *** //

// We need an object factory! Let's use a function


function userCreator(name, age, email) {
  let newUser = {
    name: name,
    age: age,
    email: email
  }
  return newUser;
}

let bethObj = userCreator('beth', 23, 'beth@dm.com')

// What is a class?

class UserCreator {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  printName() {
    console.log(this.name)
    return this.name
  }                    
  printNameAndEmail() {
    this.printName();
  }
}

let joeObj = new UserCreator('joe', 67, 'joe@place.com')

joeObj.printName();


console.log(joeObj)

// How do we add functions (aka methods) to our object factory?

// MINI (classes)
