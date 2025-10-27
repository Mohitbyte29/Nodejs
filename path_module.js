const { dir } = require("console");
const path = require("path");

console.log(__dirname);
console.log(__filename);

const filePath = path.join("school", "student", "details.txt");
console.log(filePath);

const parseData = path.parse(filePath)
const resolvedPath = path.resolve(filePath) // Provides absolute path from beginning
const extName = path.extname(filePath) // give extension name: .txt
const baseName = path.basename(filePath) // give base details: .details
const dirName = path.dirname(filePath); // dive directory name

console.log({parseData, resolvedPath, extName, baseName, dirName, separator: path.sep});

// in clg we get // instead of / because while we do console.log we get json look alike interface not actual. Thus, because / contains different meaning so we get // instead of /
