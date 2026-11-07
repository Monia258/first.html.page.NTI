const name = "Mona";
const city = "Cairo";
const age = 38;

console.log("==== My Card ====");
console.log(`Name: ${name} `);
console.log(`Age: ${age} `);
console.log(`City: ${city} `);
console.log("=================");

console.log("20 + 6 = " , (20+6));
console.log("20 - 6 = " , (20-6));
console.log("20 * 6 = " , (20*6));
console.log("20 / 6 = " , (20/6));

const hours = 3;
const minutes = hours * 60;
const seconds = hours * 60 * 60;

console.log(hours, "hours =", minutes, "minutes", seconds, "seconds");

const birthyear = 1988;
const futureYear = 2030;

const futureAge = futureYear - birthyear;

console.log("===== Bonus =====");
console.log(`In ${futureYear}, I will be ${futureAge} years old.`);