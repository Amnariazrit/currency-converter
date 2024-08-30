#! /usr/bin/env node

// This line is called a shebang, it tells us the OS  to run it with node.js

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold.underline("\n \t Currency Converter\n"));

// Define the list of currencies and their exchange rates
const exchange_rate: any = {
  USD: 1, // Base currency
  EUR: 0.9, // European Currency(Euro)
  SAR: 3.75, // saudi Riyal
  INR: 83.94, // Indian Rupee
  JYP: 113, // Japenese Currency(Yen)
  PKR: 278, // Pakistani Rupee
};
let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: chalk.green("Enter From Currency:"),
    type: "list",
    choices: ["USD", "EURO", "SAR", "INR", "JYP", "PKR"],
  },
  {
    name: "to",
    message: chalk.green("Enter To Currency:"),
    type: "list",
    choices: ["USD", "EURO", "SAR", "INR", "JYP", "PKR"],
  },
  {
    name: "amount",
    message: chalk.green("Enter Your Amount:"),
    type: "number",
  },
]);

// Perform currency conversion by using Formula
let userFromCurrency = user_answer.from;
let userToCurrency = user_answer.to;

let fromAmount = exchange_rate[userFromCurrency]; // exchange rate
let toAmount = exchange_rate[userToCurrency]; // exchange rate
let amount = user_answer.amount;

// Formula of conversion
let baseAmount = amount / fromAmount; // USD base currency
//    1500  /  278
let convertedAmount = baseAmount * toAmount;
console.log(
  chalk.yellow("\n Converted Amount:"),
  chalk.yellow(convertedAmount.toFixed(2))
);
