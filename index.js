var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var message2 = "This" + chalk.blue(" needs") + chalk.yellow(" the") + chalk.green(" color") + chalk.red(" pink!");
console.log(message2);