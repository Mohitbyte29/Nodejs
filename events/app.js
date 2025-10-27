const EventEmitter = require("events");
const { emit } = require("process");
// We're calling a className so we use pascal case variable

// Create an instance of EventEmitter

const emitter = new EventEmitter();
// 1. Define an event listener (addListener)
emitter.on("greet", () => {
    console.log(`Hello Mohit Upadhyay`);
});

// 2. Trigger (emit) the "great" event

emitter.emit("greet");
// Jb koi greet function call/emit karega to on event work karega

// greet()

// We can also pass arguments while emitting.
// emitter.on("greet", (username, prof) => {
//     console.log(`Hello ${username}, Now You're a ${prof} !`);
// })
// Will show Mohit Upadhyay again so we comment above statement

// emitter.emit("greet", "Mohit Bajaj", "Full Stack Developer");

// By destructuring
emitter.on("greet", (arg) => {
    console.log(`Hello ${arg.name}, Now You're a ${arg.prof} !`);
})
emitter.emit("greet", {name: "Mohit Upadhyay", prof: "Full Stack Developer"});





