let apples: number = 34;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//! built in  objects

let now: Date = new Date();

let colors: string[] = ["red", "blue", "green"];
let myNumbers: number[] = [1, 2, 3, 45, 7];
let truths: boolean[] = [true, false, false];

// classes

class Car {}

let car: Car = new Car();

// object literals

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// then to use annotation
// functions that returns any type

const json = '{"x":10,"y":20}';

const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let words = ["red", "green", "blue"];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

//3) variable whose type cannot be inferred correctly

let number = [-10, -1, 12];
let numberAboveZero:boolean|number = false;

for(let i = 0;i<number.length;i++){
    if(number[i]>0){
        numberAboveZero=number[i];
    }
}
