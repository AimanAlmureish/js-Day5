// Math methods

Math.floor();
Math.ceil();
Math.round();
Math.random();

// Booleans

let y = 5 != "5"; // false
let q = 5 == "5"; // true
let e = 5 === "5"; // false

let t = 5 > 5;
let o = 5 >= 5;
let u = 5 < 5;
let p = 5 <= 5;

let a = 5 + 5;
let b = 3 + 6;
// console.log(a == b);

let string = "hello world";

console.log(string.length);

if (string.length == 12) {
    // console.log("This is false");
    // } else if (a == b && a > b) {
    // } else if (string.length == 15 && string == "hello world") {
    //     console.log(
    //         `This is true! string length ${string.length} and the text is ${string}`
    //     );
} else {
    // console.log("This is nothing");
}

// We can write only if
if (string == "hello world") {
    // console.log(true);
    // return true;
    if (string.length > 0) {
        console.log("thats right");
    }
}

// if (string == "hello world") return true;
// else return false;

console.log(
    string == "hello world" ? (string.length > 0 ? string.length : false) : false
);