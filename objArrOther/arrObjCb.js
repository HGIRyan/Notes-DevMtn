// *** ARRAYS *** //

// How can we store a list? 
var first = 'buy groceries';
var second = 'take out trash';
var third = 'wash laundry';
var fourth = 'buy pizza';

// What is an array?
// List of data
var arr = []

// What can we keep in an array?
var todo = [first, 'take out trash', 'wash laundry', 'buy pizza'];

// console.log(todo);

var arr2 = ['string', { name: 'Beth' }, 1, true, [1, 2, 3], function returnsFour() { return 4 }, undefined, null]

// console.log(arr2[0])

arr2[5]();

// How can we access the items in an array?
// Bracket notation []

let arr3 = [1, 'string', true, function () { return 3 }, 1, 2, 3, 67, 9, 10, 44, 56, 78]

// console.log(arr3[3])
arr3[7]

// console.log(arr3.length - 1)

let lastIndex = arr3.length - 1;

// console.log(arr3[lastIndex])
// How can we access the end of an array?


// METHODS //
let groceries = [];
// push
// Method that adds data to an array
// can be invoked as many times as you want
// takes in the new item as an argument
// always puts data on the end of the array
// returns new length of array
groceries.push('milk');
groceries.push('bread');
let pushResult = groceries.push(4);
// console.log('push', pushResult)
groceries.push(groceries.pop())
// console.log(groceries)


// pop
// removes an item from the end of an array.
// can be invoked as many times as you have items in the array.
// returns the item it just removed
let last = groceries.pop();
// console.log(last)
let empty = [];
let last1 = empty.pop();
// console.log(last1)
// groceries.pop();
// console.log(groceries)

// unshift
// method that adds data to an array
// always adds new item to the beginning
// takes an argument for the new data
// can be invoked as many times as you want
// returns new length of array
groceries.unshift('chocolate')
let result = groceries.unshift('eggs')
// console.log(result)
// console.log(groceries)


// shift
// removes item from the front of an array
// returns that item
// can be invoked as many times as you have items
let shiftResult = groceries.shift();
// console.log(shiftResult)

// console.log(groceries)

// slice
// Makes a copy of an array
// takes two arguments, the starting index, and the ending index
// the starting index is inclusive, meaning it will be a part of the copy
// the ending index is exclusive, meaning it will not be a part of the copy
// arguments are not required
let groceriesCopy = groceries.slice();
// console.log(groceriesCopy);
// console.log(groceries)


// splice
// removes items from an array
// takes in two arguments, the starting index, and how many items to remove
// the starting index is inclusive, meaning it will be removed from the array
// returns the removed items
// takes in an infinite number of extra arguments. These items will be added to the array at the same place that the removed items used to be
let spliceResults = groceries.splice(1, 0, 'cotton candy', 'skor bar')
// console.log(groceries)
// console.log(spliceResults)





// *** FOR LOOPS *** ///

// What is a for loop?
// allows us to repeat actions without typing them out multiple times
// allows us to determine how many times we want the action to happen

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// How many different ways can we loop?
for (let i = 2; i < 4; i += 2) {
  console.log(i);
}

// Can we go backwards?
for (let i = 10; i > 0; i--) {
  console.log(i)
}


// How can we use a for loop with an array?
let chores = ['take out the trash', 'change the oil', 'wash the dishes', 'make the bed']
// console.log(chores[0])
// console.log(chores[1])
// console.log(chores[2])

for (let i = 0; i < chores.length; i++) {
  console.log(chores[i])
}

for (let i = chores.length - 1; i >= 0; i--) {
  console.log(chores[i])
}




// *** OBJECTS *** //

// How can we store related pieces of data?
var name = 'Beth';
var hair = 'blonde';
var email = 'beth@dm.com';
var password = '$ecret';
var hobby = 'coding';


// Would an array work?
let userArr = ['Beth', 'blonde', 'beth@dm.com', '$ecret', 'coding']

// What is an object?
// is a way to store related data
// the data retains its context
// the data has a label

let userObj = {
  name: 'Beth', hair: 'blonde', email: 'beth@dm.com', password: '$ecret', hobby: 'coding'
}

// What can we keep in an object?
let obj2 = {
  str: 'beth',
  num: 3,
  bool: true,
  arr: [1, 2, 3],
  obj: { name: 'test' },
  func: function () {
    return 3
  },
  empty: undefined,
  deleted: null,
  // 2: 'something',
  // 'cute dog': 'husky'
}
function log(param) {

  return obj2[param]
}

log('num')



// How can we access the items in an object?
// Dot notion
// Bracket notion
console.log(obj2.arr);
console.log(obj2['str']);

var prop = 'str'

console.log(obj2[prop]);
console.log(obj2.prop)


// How can we add more data to an object?

obj2.newProp = 'new value';
obj2.dog = 'husky';

obj2.cat = 'fluffy';

console.log(obj2);

// What if have arrays and objects inside of each other???

let newArr = [{ name: 'beth', hair: 'blonde' }, [1, 2, 3, { name: 'Joe' }]]
console.log(newArr[1][3].name)
// METHODS //

arr2.push();

// What are functions that are stored in objects called?

// How do we write them?
let obj3 = {
  func: function (num) {
    return 3 + num
  }
}



// How do we invoke them?
obj3.func(5);

// *** TERNARY *** //

// Let's review if/else statements

if (1 === 1) {
  console.log('math makes sense')
} else {
  console.log('everything I know is a lie')
}

// What if we could write the same thing, but with less typing?

1 === 1 ? console.log('math makes sense') : console.log('everything I know is a lie')

2 + 1 === 4 ? console.log('math makes sense') : console.log('everything I know is a lie')

// How do we use an if/else statement to assign a variable?
var sum;
if (2 + 1 === 4) {
  sum = 4;
  // if () {

  // }
} else {
  sum = 'this is not valid math'
}

console.log(sum);


// How do we do it with a ternary?

var sum2 = 2 + 1 === 4 ?
  4 :
  1 + 1 === 2 ?
    2 :
    'this is not valid math';

console.log(sum2)

var name = 'Steve';

if (name === 'Beth') {
  console.log('hello Beth')
} else {
  console.log('I do not know you')
}

name === 'Beth' ? console.log('hello Beth') : console.log('I do not know you')

// Can we nest ternaries?


// *** CALLBACKS *** //

// What datatypes can we pass into a function?
function logger(parameter) {
  console.log(parameter);
  console.log(typeof parameter);
}

var str = 'Beth';
var num = 2;
var bool = true;
var obj = {
  name: 'Joe'
}
function func() {
  console.log('I am a function')
}

logger(func);


// What is a callback?
// a function that is passed into another function as an argument

// Can we invoke a callback?
function parent(callback, str) {
  console.log(str)
  let result = callback();
  console.log(result);
}

function inner() {
  console.log('I am a callback')
}
parent(inner);

function greeting() {
  console.log('hello')
  return 'hello';
}

parent(greeting);
// Why on earth would we do this madness?

//// Dry code
function mapper(arr) {
  let arrCopy = [];
  for (let i = 0; i < arr.length; i++) {
    arrCopy.push(arr[i] + 1)
  }

  return arrCopy;
}


function mapper2(arr, operator) {
  let arrCopy = [];
  for (let i = 0; i < arr.length; i++) {
    arrCopy.push(arr[i] - 1)
  }

  return arrCopy;
}

function betterMapper(arr, callback) {
  let arrCopy = [];
  for (let i = 0; i < arr.length; i++) {
    let newNumVal = callback(arr[i]);
    arrCopy.push(newNumVal);
  }
  return arrCopy;
}

function addOne(num) {
  return num + 1
}
function subractOne(num) {
  return num - 1
}
function multipleByTwo(num) {
  return num * 2;
}

let arr6 = [1, 2, 3];
let arr6Copy = betterMapper(arr6, addOne);
console.log(arr6Copy);

let arr7 = [2, 3, 4];
let arr7Copy = betterMapper(arr7, subractOne);
console.log(arr7Copy);



// .map(function(el, i, arr){
//   return el + 1
// })
//// Higher order functions that already exist

//// Asynchronous processes

//// Event listeners

let stuffFromInternet = 'super cool cat videos'
let waiting = 'tell funny jokes';


setTimeout(function() {console.log('time consuming thing is finished')}, 5000);
console.log('doing other cool things');