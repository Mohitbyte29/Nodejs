const http = require("http");

// server is like event emitter
// const server = http.createServer();

// server.emit
// server.on

// Web Server
const server = http.createServer((req, res) => {
    if(req.url === "/contact"){
        res.setHeader("Content-Type", "text/html");
        res.write("<h1> Have a Project or want to Collaborate?</h1>");
        res.end()//---> Use for sending thr request
    }
    // if(req.url === "/source-code"){
    //     res.write("I am Coding Smasher aka Mohit Upadhyay ");
    //     res.end()//---> Use for sending thr request
    // }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})



