// """notes about JS syntax and commands"""

// #JavaScript is caseSensitive! objectOriented language

// variable assignment: var , let , const

// typeof command: get a type of a variable

// data types: number(int,float,...,12,0,0.1), string("",''),object({}),array([])
//             null , undifind , boolean

//  operators: + , - , / , * , % , ** , = , == , ===
//             != , !== , += , *= , -= , /= , %=
//             and: && , or: || , not: !
//             nullish-operator(not null and not undifind): ??
//             ternary operator: condition ? returnIfCondition=ture :returnIfCondition=false ;

// print: cosole.log()

// converting str(value) to int(value): +value
// converting positive number(value) to negative number and vice versa: -value

// truthy and falsy values : when other types convert to boolean
//                           if they become Truthy and vise versa it beocme Falsy

// falsy : 0 , "" , null , undifind , false
// truthy: everything but falsies!

// ??????????????????????????????????????
//challenge 1: checkout order details
/* 1.create 3 variables to store an item price. the last price 2 items were ordered
(multipication)
2.tell the user what the total price is before discount.
3.informs the user what average price of items is before discount.
4.informs them the final price after saving %5 dollars with promo code:"i got 5 on it"
5.compare final price with his/her account balance
6.log a message to tell user that he/she can buy or not.
*/
// solution
// const item1 = 10;
// const item2 = 15;
// const item3 = 18;
// const total_price = item1 + item2 + item3*2;
// const account_balance = 100;
// console.log("total price befor discount is: ",total_price," dollars")
// console.log("average price before discount is: ",(total_price)/4," dollars")
// console.log("I got 5 on it and now the final price is: ",total_price*0.95)
// account_balance > total_price ? console.log( "this fits your budget") : console.log( "this is'nt fit your budget");
// ??????????????????????????????????????????????????

// Nan : not a number

// when we wanna reset or empty a variable we use : null

// methods: like python we use "." for calling methods and give "()" at the end
// of command to make it executable

// value.toSting() : convert a value to type string

// float.toFixed(null,0,...,n) : gives a number without decimal digits or with n decimal digit
// const n1 = 12.09283465;
// console.log(n1.toFixed(3)) output: 12.093

// Number(string) : convert a str value to a number

// parsInt(string) : convert a string to integer

// parsFloat(string) : convert a string to float

// "\" uses in strings and texts for : multiline writing , using ' in an ''
// \n : makes new line in out put

// string.length : return length of a string

// index in strings: likewise python string[n] returns an n'th index in our string

// string.indexOf("char") : return index of a Character in our string returns -1 when char dosent exist

// string.charAt(index) : return character that matches a specific index ,"" if not exist

// string.includes("char") : check if char exist in our string or not

// string.toLowerCase() , string.toUpperCase() : make string lower/upper case

// string.split("char") : works exacly like python and returns array (object) includes of different substrings

// string.replace("somthing that exist in our string","somthing that we want instead of that")
// works exacly like python

// string.concat("","",...) : concat our existing string(text) with different new substrings (texts)

// string.trim() : works like pythons str.strip() and delete the start and end white spaces

// string.slice(startPoint,endPoint) : slicing a string base of its indexes

// string.substing : same use as slice but dosent get negative numbers

// string.substr(start Point, number Of Characters That We Want After That) : pretty similar to slicing

// ??????????????????????????????????????????????????
// challenge 2: Capitalize first letter of a text
// const text = "hello everybody my name is arian and im a co-founder and CEO of loleg ,\n im a billioner \n with a B!"
// let finalText = text[0].toUpperCase();
// finalText = finalText.concat(text.substr(1,text.length));
// console.log(finalText)
// ???????????????????????????????????????????????????
// ???????????????????????????????????????????????????
// Challenge 3: replace a part of phone number
// const phoneNumber = "09303251570";
// const sign = "#$#$#"
// let cryptedPhoneNumber = phoneNumber.substr(6, 5);
// cryptedPhoneNumber = phoneNumber.replace(cryptedPhoneNumber, sign);
// console.log(cryptedPhoneNumber);
// ?????????????????????????????????????????????

// template literals : like using % in strings for assigning variables into the string
// in JS we use "``" (backtick) for this and then write our variables in the string
// within a ${variable} structure...

// ???????????????????????????????????
// challenge 4: extract name and last name
// const fullName = "Arian Brojerdian";
// let message = `Hello dear ${fullName} welcome to your Panel \n we know that your first name is ${fullName.split(" ")[0]} \n and your lastname is ${fullName.split(" ")[1]}`
// console.log(message)
// ????????????????????????????????????

// Arrays : [1,2,3,....] , Array(1,2,3,...) is an object that can contains different values
// orders are important in Arrays
// Array.length : returns the length of the array
// array[index] : return value of that index in our array

// array methods
// array.push(value) : works like list.append in python : add value to the end of the array
// array.unshift(value) : add value to the start of the array
// array.pop():delete first item from end of the array
// array.shift() :delete first item from start of the array
// array.toString() : build a string using our array items seperaterd with comma ","
// delete array[idxn] : delete the idxn index from our array
// changing value in arrays is just like changing values in lists in python
// : like : array[0] = newValue;

// array.join("char thats gonna be between our items") : same as array.toString()
// array.concat(array1,array2,.....) : same as concat in strings
// array.flat() : reducing dimention from multidimention arrays

// array.indexOf(item) : return a index of desired item

// array.includes(item) : return a boolean value that tell us is this item exist in our array or not

// array.slice(idx1,idx2) : return another array that contains item from idx1 to idx2 of our original array
// : this also takes negative numbers : does not contain idx2 nut contains idx1
// array.slice(idx) : returns a array contain items from idx to the last index existed in the array
// this works right rounded

// array.splice(idx,n) :  remove n items start with index idx contains idx item also
// array.splice(idx) : remove items from idx to the end right rounded
// array.splice(idx,n,newItem1,newItem2,.....) : remove n items start with index idx contains idx item also
// : then added newItems In place of the previous items

// array.sort() : first convert every thing to string (sees everything as string)
// then sort the array by its items

// array.reverese() : return array contains reverse items of the previous one

// ??????????????????????????????????????????????????????????????
// challenge 5 :
// 1.create an array
// 2.add your favorite sports
// 3.use this list in a text
// 4.remove the last item from the list
// 5.create a new array for the first to items then replace it in main array
// const sports = [];
// sports.push(
//   "swimming",
//   "wrestling",
//   "running",
//   "weight-lifting",
//   "MMA",
//   "kick-boxing",
//   "mouintaining"
// );
// console.log(sports);
// const text = `my top 3 favorite sports are ${sports[0]} , ${sports[1]} and ${sports[3]}\n what is your top 3 favorite sports?`;
// console.log(text);
// sports.splice(-1);
// console.log(sports);
// const firstTwoSports = sports.slice(0, 2);
// console.log(firstTwoSports);
// sports.splice(0,2,firstTwoSports[0],firstTwoSports[1]);
// console.log(sports)
// ??????????????????????????????????????????????????????????

// `reference` types use heap and `primitive` types use stack memory
// primitive types are (string,number,boolean,null,undifined,symbol)
// reference types are (Array,Object,function)
// Garbage collector : deleting garbage from heap memory : if you dont wanna use a variable make it null and Garbage collector will do the rest

// Mutation : the act of changing the properties of a value : in JS all primitive values are immutable
// : reference types are mutable

// Shallow copy and Deep copy : Shallow copy uses when we have a flat array : deep copy uses when we have a nested array
// in copying arrays we should use slice method because slice method build a new array
//  reference types will copy by reference

// // // // // //Spread Operator | ES6 | "...variable"

// Array destructuring :const [var-name1,var-name2,.....] = Array : ",," if we dont want some of items :
// spread operator : use "..." if we want some of items all together as a new array

// ?????????????????????????????????????
// challenge 6 : Array Destructuring

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];
// const [frontEnd, backEnd] = fullStack;
// const [html, , JavaScript] = frontEnd;
// const [, , mongo] = backEnd;
// console.log(frontEnd, backEnd);
// console.log(html, JavaScript);
// console.log(mongo);
// ?????????????????????????????????????

// Objects
// : Order dosent matter like arrays
// similar to dictionaries in python : we have {key:value , ...} structure
// Object["key"] OR Object.key : returns value.: same as dict[key] returns valuer in python

// Object.key = newValue :assigning newValue to our object

// delete object.key : deletes key,value from our object

// null : if we just wanna delete the value : object.key = null

//dot (".") is call a :  chaining operator
// you can touch differente layers of an object using dot
// optional chaining operator "?." : check if value that we calling is not exist returns undifined instead of error

// in : check the condition if somthing exist in somthing else or not

// object.keys(objectName) : returns array of objects keys : just like python
// object.values(objectName) : returns array of objects values : just like python

// spread operator in objects : "..." gives all the items inside an object

// object destructuring : const {key1,,key3,...other} = object ;
// if keyName already exist in our program
// : we change the keyName inside of destructuring operation like :
// keyName : keyNewName

// challenge 7 : Destructure Object
// const data = [
//   {
//     identity: { name: "Arian", lastName: "Brojerdian", city: "karaj", age: 24 },
//   },
//   {
//     skills: ["lifegaured", "falmenco-master", "selfhelp-coach", "python", "JS"],
//   },
// ];

// console.log(data)
// const [identity,skills] = data;
// console.log(identity,skills)
// const {name,lastName,city,age} = identity.identity;
// console.log(name,lastName,city,age)
// const [skill1, skill2,skill3,skill4,skill5] = skills.skills;
// console.log(`my name is ${name} ${lastName} im ${age} and im from ${city}`)
// console.log(`in this year im focused on learning and maintaining ${skill1} ,${skill3} and ${skill5} `)

// ??????????????????????????????????????????????????????????????

// Conditional Statements in JavaScript{:;
//  some examples inorder to learn syntax
// const n = 0;
// if (n > 0) {
//   console.log("+ number");
// } else if (n < 0) {
//   console.log("- number");
// } else {
//   console.log("0 => number");
// }

// ؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟
// challenge 8 : check triangle type
// const a = 10;
// const b = 13;
// const c = 11;
// if (a == b && b == c) {
//   console.log("مثلث متساوی الاضلاع");
// } else if (a == b || a == c || b == c) {
//   console.log("مثلث متساوی الساقین");
// } else {
//   console.log("regular traingle");
// }
// ???????????????????????????????????????????????

// Switch Case : similar usecase as if-else statements
// : use when we condition has limited options
// example:
// const name1 = "Nazi"
// switch(name1) {
//     case "Nazi":
//         console.log("she is here");
//         break;
//     case "Amir":
//         console.log("hi")
//     default:
//         console.log("bye")
// }

// Loops in JS:
// syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (how many times?) {
//     which action?
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// const array = [1,2,3,4,5,6];
// for (let index= 0 ;index<array.length;index++){
//     console.log(array[index]*2)
// }

// forof : only for arrays
// syntax:
// for (const element of object) {
// }
// examples
// const array=[1,4,6,8,9];

// for (let i of array) {
//     console.log(i)
// }

// forin : only for objects
// syntax:
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//     }
// }

// const obey = { n: 1, n2: 4 };
// // for (const key in obey) {
// //   console.log(obey[key]);
// // }

// const keys = Object.keys(obey);
// for (let i = 0; i < keys.length; i++) {
//   console.log(obey[keys[i]]);
// }

// while LOops:
// while (till when?){do what?}

// do while Loops:
// do{action} while (condition) : first do the action and then check the condition

// break  and countinue : same use as have in python

// ?????????????????????????????????????????????
// challenge 9 : write a code that returns even numbers
// const numbers = [123, 34, 56, 22, 51, 57, 389, 65, 2, 465];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   } else {
//     continue;
//   }
// }
// ?????????????????????????????????????????????????
// ?????????????????????????????????????????????????
// challenge 10 : write a code that print this pattern:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// ...
// let emptyString;
// let limit = 17;
// for (let i = 1; i != limit; i++) {
//   emptyString = "";
//   for (let j = 1; j != i; j++) {
//     emptyString += j.toString() + " ";
//   }
//   console.log(emptyString);
// }
// ??????????????????????????????????????????????
// ???????????????????????????????????????????????
// challenge 11: remove duplicate calues from this array:
// const array = [4, 2, 34, 1, 12, 1, 4,3,3,3,5,5,7,8,8,10,34];
// let newArray = [array[0]];
// let flag;
// for (let i = 0; i < array.length; i++) {
//     flag = true;
//     for (let j = 0;j < newArray.length;j++){
//         if (array[i] == newArray[j]){
//             flag = false
//             break
//         }
//     }
//     if (flag == true){
//         newArray.push(array[i])
//     }
// }
// console.log(newArray);
// ??????????????????????????????????????????????????????????????????

// functions in JavaScript...!@#:
// function name(params) {
//     return result
// }

// global scope : variables that defined globally
// local scope : function scope : variables that defined inside of a function
// block scope : {       every area betwwen "}" and "{"       }
// lexical scope
// let and const knew the block scopes but var dosent recognize them
// hoisting
// strict mode : you can make it on and be hard on your self
// : write at top of your code : "use strict" : and strict mode is active now!

// old way of definding a function : function decleration
// function expression : different ways to define a function
// const funcName = function (var,...){action}
// anonymous function: function(){}
// IIFE : immediately invoked function expression : take all of the function syntax and put it inside of the ()
// to execute IIFE functions open a () in the end of function syntax and give value to it

// arrow functions | ES6 :
// const arrowFunctionName = () => {}
// this below is a regular function expression
// const sum = function (n1, n2) {
//   return n1 + n2;
// };
// this below its the one above but in arrow function structure
// const sum = (n1,n2) => { return n1 + n2}
// console.log(sum(3,4))

// callback functions : a  good feature of JS : a function that goes to another function as an input
// highorder function : function that callback function goes into!

// challenge 11 : write a function to find the count of a letter in a string

// function letterCounter(string, myLetter) {
//   let letterCount = 0;
//   let letter;
//   let newString = "";
//   for (let i = 0; i != string.length; i++) {
//     if (string[i] != " ") {
//       newString += string[i];
//     }
//   }
//   const finalStirng = newString.split().toString("");
//   for (letter = 0; letter != finalStirng.length; letter++) {
//     if (finalStirng[letter] == myLetter) {
//       letterCount++;
//     }
//   }
//   return letterCount;
// }
// console.log(letterCounter("salam bar dostan", "f"));
// ???????????????????????????????????????????????????????????????????/

// forEach : do an action on items of an array:  works only for arrays : you give it an array and one arrow function and it will loop your array automaticly
// array.forEach(element => {
// });

// map:do an action on items of an array : works pretty similar like forEach difference is map returns a new array
// you give it an array and one arrow function and it will loop your array automaticly

// array.find((element,index,array) => {action}) : return bollean :returns first item
// array.findIndex((element) => (condition))
// array.filter((element) => (condition)) :goes trough all the items and then return result

// array.reduce((accumulator , currentValue,index,array) => {},0)

// array.every((item) => {condition}) :check a condition on every item of a array
// array.some((item) => {condition}) :check a condition on some items of a array

// ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????

// Challenge 12. Find customers with age>60 and age<10
// Challenge 13. Build customer data with title and full name

// let customers = [
//   {
//     id: 1,
//     f_name: "Abby",
//     l_name: "Thomas",
//     gender: "M",
//     married: true,
//     age: 32,
//     expense: 500,
//     purchased: ["Shampoo", "Toys", "Book"],
//   },
//   {
//     id: 2,
//     f_name: "Jerry",
//     l_name: "Tom",
//     gender: "M",
//     married: true,
//     age: 64,
//     expense: 100,
//     purchased: ["Stick", "Blade"],
//   },
//   {
//     id: 3,
//     f_name: "Dianna",
//     l_name: "Cherry",
//     gender: "F",
//     married: true,
//     age: 22,
//     expense: 1500,
//     purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
//   },
//   {
//     id: 4,
//     f_name: "Dev",
//     l_name: "Currian",
//     gender: "M",
//     married: true,
//     age: 82,
//     expense: 90,
//     purchased: ["Book"],
//   },
//   {
//     id: 5,
//     f_name: "Maria",
//     l_name: "Gomes",
//     gender: "F",
//     married: false,
//     age: 7,
//     expense: 300,
//     purchased: ["Toys"],
//   },
// ];
// console.log("ok");
// ????????????????????????????????
// let result = Array();
// console.log(customers.filter(customer => (customer.age>=60 || customer.age <=10)))
// console.log(result)
// ????????????????????????????????

// let newCustomerData = Array();
// let title;
// for (const customer of customers) {
//   if (customer.gender.toLowerCase() == "m"){
//     title = "Mr"
//   } else if (customer.married == true){
//     title = "Miss"
//   } else {
//     title = "Mrs"
//   }
//   fullName = title +' '+customer.f_name + " " + customer.l_name;
//   newCustomerData.push({
//     id: customer.id,
//     fname: fullName,
//     married: customer.married,
//     age: customer.age,
//     expense: customer.expense,
//     purchased: customer.purchased,
//   });
// }

// console.log(newCustomerData);
// ????????????????????????????????????????????????????????

// another Way for problem 13 : using map

// customers.map((customer) => {
//   let fullName;
//   let title;
//   if (customer.gender.toLowerCase() == 'm'){
//     title = "Mr"
//   } else if (customer.married == true){
//     title = "Miss"
//   } else {
//     title = "Mrs"
//   }
//   fullName = title + ' ' + customer.f_name + ' ' + customer.l_name

//   customer.f_name= fullName
//   // delete customer.f_name
//   delete customer.l_name
//   delete customer.gender
// })

// console.log(customers)
// ????????????????????????????????????????????????

// `this` : is an object : refers to most outer layer that `this` exist in
// : refers to his scopes owner

// bind method : give a source to `this` and fixed `this` in a single place : output will be an object
// call method : bind and excute also
// apply method : just like `call` difrrence is you can give apply an array as a input

// Getter : defines inside the object , its like a function that calculates somthing and return the result when called
// get objectName() {action}
// Setter : defines inside the object , its like a function that calculates somthing and return the result when you set somthing
// set a data inside of an object
// set objectName() {action}

// Closure : fucntion that runs inside of another function
// factory function : function that have another function inside of it (Closure function)
// Closures gives us both State Retention and Encapsulation and memorazation

// pure functions : dont have side effects : returns a same output with same input every time we call it
// impure functions : vice versa of pure functions

// Math object
// Math.methods : differene methods of Maths
// methods : 0 < random < 1, min , max , sin , cos , pow , sqrt , abs , ....

// ???????????????????????????????????????????????????????
// challenge 14 : generate random integer

// const randInt = (startOfDomain, endOfDomain) => {
//   if (startOfDomain === undefined || endOfDomain === undefined){
//     return "koskhol you should enter min and max!!!"
//   }
//     let flag = false;
//     let randomNumber;
//     while (flag != true) {
//       randomNumber = Math.floor(Math.random() * (endOfDomain+1));
//       if (randomNumber >= startOfDomain) {
//         flag = true;
//       }
//     }
//   return randomNumber;
// };

// ?????????????????????????????????????????????????

// Date Object : for date and time calculations
// const date = new Date(); date of right now
// console.log(date);
// date.getTime : gives time from 1970 based on miliseconds
// new Date(year,month,day,hours,minuts,seconds ,...) : month are from 0,...,11
// hour range : 0 , 23
// toLocaleDateString
// toLocaleTimeString

// setInterval : do a action in a defined time over and over again : stop with : clear Interval: also you can use condiotional loops

// setTimeOut : run a function after amount of time

// ?????????????????????????????????????????????
// challenge 15 : determine age based on day

// const determineAge = (birthDate) => {
//   // const birthDate = "1/1/1999";
//   const birthDateMS = new Date(birthDate).getTime();
//   const nowTime = new Date().getTime();
//   const oneDay = 24 * 60 * 60 * 1000;
//   console.log((nowTime - birthDateMS) / oneDay / 365);
// };

// determineAge("10/16/2001");
// 23.549659162671233

// ????????????????????????????????????????????????

// Error Handling
// predicting where could an Error happens and how and handle them inside of my code
// try-catch : like try-exept in Python
// syntax
// try {

// } catch (error) {

// }

// finally : do somthing at `finally`
// throw : we can make hand error for ourselves with `throw`

// Map : is a data structure : its like objects with key-value and unlike objects have oreder
// syntax & methods = const vari = new Map() : vari.set(KEY,VALUE)
// vari.get(key)
// vari.delete(key)
// vari.clear()
// vari.has(key) : returns true or false
// typeof Map = object
