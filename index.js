const http = require("http");
<<<<<<< HEAD
const url = require("url");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    switch (parsedUrl.pathname) {
        case '/':
            if (req.method === "GET") {
                res.end(`Path is ${parsedUrl.pathname}, This is home page`);
            }
            break;
        case '/about':
            if (req.method === "GET") {
                res.end(`Path is ${parsedUrl.pathname}, This is about page`);
            }
            break;
        default:
    }
=======
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
>>>>>>> f5f0d6c957ed40d137dc5499fbba0fa24d389772
});

myServer.listen(8000, () => console.log("Server is running !"));
