const FileIO = require("./fileIO");

const fileIO = new FileIO();

fileIO.write("message.txt", "Goodbye World!");

const message = fileIO.read("message.txt");

console.log(message);
