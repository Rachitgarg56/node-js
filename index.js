const http = require("http");
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
});

myServer.listen(8000, () => console.log("Server is running !"));
