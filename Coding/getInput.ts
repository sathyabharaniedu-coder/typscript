export {}

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input: string) => {
    let n: number = parseInt(input);
    console.log("You entered:", n);

    rl.close();
});