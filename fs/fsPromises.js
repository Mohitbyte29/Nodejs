const fs = require("fs");
// const fs = require("fs/promises"); // ---> Don't need to write fs.promises again and again
const path = require("path");

const fileName = "fsPromises.txt"; 
const filePath = path.join(__dirname, fileName);
const file = __dirname;
// Why .then() and .catch();

fs.promises
.readdir(file) // ---> Read the directory
.then((data) => console.log(data))
.catch((err) => console.log(err));

const filePath1 = __dirname;

// fs.promises
// .readdir(filePath)
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// fspromises.writeFile() : Writes data to a file asynchronously. If the file exists, it overwrites the content
fs.promises.writeFile(filePath,
    "This is the initial data",
    "utf-8"
).then(console.log("File created successfully"))
.catch((err) => console.log(err))

fs.promises.readFile(filePath,
    "utf-8"
).then((data) => console.log(data))
.catch((err) => console.error("Error reading file:", err));

fs.promises.appendFile(filePath,
    "\nThis is the updated data",
    "utf-8"
).then(console.log("File updated successfully"))
.catch((err) => console.log(err))

fs.promises
  .unlink(filePath)
  .then(() => console.log("File deleted successfully"))
  .catch((err) => console.log("Error deleting file:", err.message));





