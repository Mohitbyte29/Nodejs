const fs = require('fs');

// Synchronous task
console.log("Start");

// Asynchronous task
fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

// Synchronous task
fs.writeFileSync('file.txt', "This is the initial data", "utf-8");
const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data, "Start");

// Synchronous task
console.log("End");
