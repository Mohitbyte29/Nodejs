const EventEmitter = require("events");
const { emit } = require("process");
const { json } = require("stream/consumers");
const emitter = new EventEmitter();
const fs = require("fs");

let eventCounts = {};
const filePath = "./eventCounts.json";


emitter.on("user-login",(username) => {
    eventCounts["user-login"]++;
    console.log(`${username} logged in!`);
})

emitter.on("user-logout",(username) => {
    eventCounts["user-logout"]++;
    console.log(`${username} logged out!`);
})

emitter.on("user-purchase",(username, product) => {
    eventCounts["user-purchase"]++;
    console.log(`${username} purchased this ${product}`);
})

emitter.on("profile-update", (username, profile) => {
    eventCounts["profile-update"]++;
    console.log(`${username} updated his ${profile} successfully!`);
})

if (fs.existsSync(filePath)){
    eventCounts = JSON.parse(fs.readFileSync(filePath, "utf-8"));
}else{
    eventCounts = {
        "user-login": 0,
        "user-logout": 0,
        "user-purchase": 0,
        "profile-update": 0
    };
}

// Emit Events
emitter.emit("user-login", "Mohit");
emitter.emit("user-logout", "Mohit");
emitter.emit("user-purchase", "Mohit", "Laptop");
emitter.emit("profile-update", "Mohit", "email");

fs.writeFileSync(filePath, JSON.stringify(eventCounts, null, 2));
// JSON.stringify(value, replacer, space)
// value → object to convert (our eventCounts).
// replacer → usually null (you can use it to filter properties).
// space → number of spaces used for indentation (here 2 = nicely formatted JSON).


emitter.on("summary", () => {
    console.log("Event Summary: ", eventCounts);
})

emitter.emit("summary")

