//import inquirer and chalk 
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.bgCyanBright("\n \t\t Code with Yousha - Word Counter"));
console.log("=".repeat(60));

//prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);

//Triming nd spliting 

let words = answers.Sentence.trim().split(" ");

//Analysis of user input
console.log("=".repeat(60));
console.log(chalk.bold("  Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.bgRedBright(words.length)}`));
console.log("=".repeat(60));