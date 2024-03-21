import inquirer from "inquirer";
import chalk from "chalk";
async function gradeSystem() {
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "obtain",
            message: chalk.blue("Enter your obtain marks:"),
        },
        {
            type: "input",
            name: "total",
            message: chalk.blue("Enter your total marks:")
        },
    ]);
    let obtain = answer.obtain;
    let total = answer.total;
    let percentage = (obtain / total) * 100;
    console.log(chalk.yellow("Percentage:", percentage));
    if (percentage > 100) {
        console.log(chalk.red("Invalid Input"));
    }
    else if (percentage >= 90 && percentage <= 100) {
        console.log(chalk.green("Grade A+"));
    }
    else if (percentage >= 80 && percentage <= 89.99) {
        console.log(chalk.blue("Grade A"));
    }
    else if (percentage >= 70 && percentage <= 79.99) {
        console.log(chalk.blue("Grade B"));
    }
    else if (percentage >= 60 && percentage <= 69.99) {
        console.log(chalk.yellow("Grade C"));
    }
    else if (percentage >= 50 && percentage <= 59.99) {
        console.log(chalk.red("Grade D"));
    }
    else {
        console.log(chalk.red("FAIL! NEED HARD WORK."));
    }
}
gradeSystem();
