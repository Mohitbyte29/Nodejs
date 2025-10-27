const fs = require("fs");
const path = require("path");

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);

// ********* Create and Write **********

// fs.writeFileSync(): Writes data to a file. If the file doesn't exist, it will be created. If the file exists, it overwrites the content.
// // fs.writeFileSync(filePath, data, options)

// syntax: fs.writeFileSync(filePath, data, options);;
// filePath: The file path to write to.
// data: The content to write to the file.
// options: Optional. Includes encoding('utf8'), mode or flags.

const writeFile = fs.writeFileSync(
    filePath,// If file is already present then we use fileName instead of filePath
    "This is the initial Data",
    "utf-8"
);

console.log(writeFile);

// ******** Read a File *********
// fs.readFileSync(filePath) ---> Reads the contents of a file synchronously

// If i write utf-8 then i don't have to use tostring() method
// const readFile = fs.readFileSync(filePath);
const readFile = fs.readFileSync(filePath, "utf-8");
console.log(readFile); // ---> It will return buffer value of given file
console.log(readFile.toString()); // ---> It will show data inside a file as string


// ********* Append **********
const appendFile = fs.appendFileSync(
    filePath,// If file is already present then we use fileName instead of filePath
    "\nThis is the updated Data",
    "utf-8"
);

console.log(appendFile);

// ********* Delete a file *********

// const fileDelete = fs.unlinkSync(filePath)
// console.log(fileDelete);

// ******** Renaming a file ********** 
// Rename File (fs.renameSync) : Renames a file from one name to another.
// syntax: fs.renameSync(oldPath, newPath);
// oldPath: Current file path
// newPath: New file path or name


const newUpdateFileName = "updateTest.txt"
const newFilePath = path.join(__dirname, newUpdateFileName);
const renameFile = fs.renameSync(filePath, newFilePath)
console.log(renameFile);

const fileDelete = fs.unlinkSync(newFilePath)
console.log(newFilePath);


