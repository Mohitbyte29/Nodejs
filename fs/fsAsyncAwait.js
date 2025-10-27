const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);

const filePath1 = __dirname;

fs.readdir(filePath1)
.then((data) => console.log(data))
.catch((err) => console.log(err))

const readFolder = async() => {
    try{
        const res = await fs.readdir(filePath1);
        console.log(res);
    }
    catch(error){
        console.log(error)
    }
}

readFolder();

const writeFileExample = async () => {
    try{
        await fs.writeFile(filePath, "This is the initial Data", "utf-8");
        console.log("File Created Successfully!");
    }
    catch(err){
        console.error(err);
    }
};
writeFileExample();

const readFileExample = async () => {
    try{
        const data = await fs.readFile(filePath, "utf-8");
        console.log(data);
    }
    catch(err){
        console.error(err);
    }
};
readFileExample();

const appendFileExample = async () => {
    try{
        await fs.appendFile(filePath, "\nThis is the updated Data", "utf-8");
        console.log("File Created Successfullyr");
    }
    catch(err){
        console.error(err);
    }
};

appendFileExample();

const deleteFileExample = async() => {
    try{
        await fs.unlink(filePath);
        console.log("File Deleted Successfullyr");
    }
    catch(err){
        console.error("Error Deleting File:", err.message);
    }
}
deleteFileExample();


