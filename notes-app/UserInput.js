//userinput without use yargs


// console.log(process);
console.log(process.argv)
// const chalk = require('chalk')

console.log(process.argv[2]);

const command = process.argv[2];
console.log("user Input is : ", command);

// console.log(process.argv[3]);

if (command === 'add') {
    console.log('right print');
} else if (command === "keyur") {
    console.log(process.argv[3]);
} else {
    console.log("enter different");
}