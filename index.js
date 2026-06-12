const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `Request is received on ${req.url} at ${Date.now()}\n`
    fs.appendFile("logs.txt", log, (err, data) => {
        switch(req.url) {
            case "/":
                res.end("Home page");
                break;
            case "/about":
                res.end("About page");
                break;
            default:
                res.end("404 Not Found");
        }
    });
});

myServer.listen(8000, () => console.log("Server is running !"));
