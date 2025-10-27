const fs = require("fs");
const path = require("path");

const fileName = "test2.txt";
const filePath = path.join(__dirname, fileName);

// fs.writeFile(path, data, options, callback);
// callback: A function with parameters (err, data).
// fs.readFile(filePath) ---> Reads the contents of a file asynchronously

fs.writeFile(filePath, "This is the starting phase", "utf-8", (err) => {
    if(err) console.error(err);
    else console.log("File has been saved");
});

// fs.readFile(path, options, callback);
// callback: A function with parameters (err, data).

// ********Reading the content of a file***********
fs.readFile(filePath, "utf-8", (err, data) => {
    if(err) console.error(err);
    else console.log(data);
})

// *********Appending the file*********
fs.appendFile(filePath, "\nThis is the updated phase", "utf-8", (err)=> {
    if(err) console.error(err);
    else console.log("File has been updated");
});


// ********** Deleting the file***********

// fs.unlink(); Deletes a file asynchronously

fs.unlink(filePath, (err) => {
    if(err) console.error(err);
    else console.log("File has been Deleted");
});




