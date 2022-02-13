"use strict";
//basic types:
let id = 5;
let company = "Holy Moses Media";
let isPublished = true;
let x = "hello!";
console.log('id is: ', id);
x = 4; //able to change as "any" 
let age; //initialize but not declare!
age = 40;
//inference = knows it's a number even if you don't specify
let ids = [1, 2, 3, 4];
let arr = [2, 'barf', true];
//Tuple
//expects in particular order
let person = [5, 'bob', false];
//Tuple Array or "array of tuples"
let employee;
employee = [
    [1, 'brad'],
    [2, 'jane'],
    [3, 'jim']
];
//Union 
//want variable to hold more than one type
let anotherId = 22;
anotherId = 'stuff';
anotherId = 6;
//Enum (Enumerated type)
//by default, these will have values of 0, 1, 2, 3 etc)
//if you change Up to 3, it'll be 3, 4, 5, 6, 7 etc
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 5] = "Up";
    Direction1[Direction1["Down"] = 6] = "Down";
    Direction1[Direction1["Left"] = 7] = "Left";
    Direction1[Direction1["Right"] = 8] = "Right";
})(Direction1 || (Direction1 = {}));
console.log('Direction1.Up is: ', Direction1.Up);
console.log('Direction1.Down is: ', Direction1.Down);
console.log('Direction1.Left is: ', Direction1.Left);
console.log('Direction1.Right is: ', Direction1.Right);
//Enum with strings
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log('Direction2.Up is: ', Direction2.Up + ',', Direction2.Down);
const User = {
    id: 5,
    name: 'Leila'
};
console.log('user is: ', User);
//Type Assertion
//explicitly telling compiler that we want to treat an entity as a different type
let cid = 1;
let customerId = cid; //first way to do this
customerId = 5;
//OTHER WAY TO DO IT:
let cid2 = 1;
let customerId2 = cid;
customerId2 = 53;
//Functions
const addNum = (x, y) => {
    return x + y;
};
console.log(addNum(4, 5));
//Void! 
//returns nothing - totes fine to return nothing - party
const log = (message) => {
    console.log('message is:', message);
};
