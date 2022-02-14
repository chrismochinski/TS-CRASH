//basic types:

let id: number = 5;
let company: string = "Holy Moses Media";
let isPublished: boolean = true;
let x: any = "hello!";

console.log("id is: ", id);

x = 4; //able to change as "any"

let age: number; //initialize but not declare!

age = 40;

//inference = knows it's a number even if you don't specify

let ids: number[] = [1, 2, 3, 4];

let arr: any[] = [2, "barf", true];

//Tuple
//expects in particular order
let person: [number, string, boolean] = [5, "bob", false];

//Tuple Array or "array of tuples"
let employee: [number, string][];

employee = [
  [1, "brad"],
  [2, "jane"],
  [3, "jim"],
];

//Union
//want variable to hold more than one type
let anotherId: string | number = 22;

anotherId = "stuff";
anotherId = 6;

//Enum (Enumerated type)
//by default, these will have values of 0, 1, 2, 3 etc)
//if you change Up to 3, it'll be 3, 4, 5, 6, 7 etc
enum Direction1 {
  Up = 5,
  Down,
  Left,
  Right,
}

console.log("Direction1.Up is: ", Direction1.Up);
console.log("Direction1.Down is: ", Direction1.Down);
console.log("Direction1.Left is: ", Direction1.Left);
console.log("Direction1.Right is: ", Direction1.Right);

//Enum with strings

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log("Direction2.Up is: ", Direction2.Up + ",", Direction2.Down);

//Objects!
//Similar to interface but not quite
//less messy than putting those object property types into the variable
//you just need to declare that the variable is associated with the type
//EG: User: User

type User = {
  id: number;
  name: string;
};

const User: User = {
  id: 5,
  name: "Leila",
};

console.log("user is: ", User);

//Type Assertion
//explicitly telling compiler that we want to treat an entity as a different type
let cid: any = 1;
let customerId = <number>cid; //first way to do this

customerId = 5;

//OTHER WAY TO DO IT:

let cid2: any = 1;
let customerId2 = cid as number;

customerId2 = 53;

//Functions
const addNum = (x: number, y: number) => {
  return x + y;
};

console.log(addNum(4, 5));

//Void!
//returns nothing - totes fine to return nothing - party
const log = (message: string | number): void => {
  console.log("message is:", message);

};

log(55);
log("yeeea booiiii");

//Interfaces
//kind of like type
interface UserInterface {
  id: number;
  name: string;
  isAwesome: boolean;
  zipCode?: number; //optional
}

const User1: UserInterface = {
  id: 0,
  name: "Jimmy",
  isAwesome: true,
  // zipCode: 90210,
};

//Able to change properties like this:

User1.id = 5;
User1.name = "Bart";

//YOU CANNOT USE AN INTERFACE LIKE THIS:
//NO PRIMITIVES, NO UNIONS
type Point = number | string;
const p1: Point = 4;

//INTERFACES WITH FUNCTIONS:
//takes in x val number, y val number and RETURNS A number
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

//CLASSES
//not super duper relevant I don't think?
//classes are like objects

interface PersonInterface {
    id: number;
    name: string;
    register(): string;
  }

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
      return `${this.name} is registered`;
  } 
}

const brad = new Person(1, "bradley"); //creates new person object in variable called Brad
const mike = new Person(1, "michael");

console.log('brad is: ', brad);
console.log('mike is: ', mike);

//Generics
//T is Type placeholder
//instaad of having ANY...thi sis a placeholder and then we can say the type later (like below with those num/str)
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

//one array of numbers, one of strings..use above function to create them
let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['brad', 'jane', 'bob']);

numArray.push(1);
strArray.push("hello");