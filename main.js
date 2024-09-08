#!/usr/bin/env node
import inquirer from "inquirer";
// Currency conversion rates
const conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 350,
        "GBP": 1
    },
    "USD": {
        "PKR": 277.58,
        "GBP": 0.83,
        "USD": 1
    }
};
// Using inquirer to get user input
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency..?"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your conversion amount"
    }
]);
// Output
const { from, to, amount } = answer;
// Check input in the given program
if (from && to && amount) {
    // Calculate the conversion
    const result = conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid inputs");
}
