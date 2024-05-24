const server = require("http");
const fs = require("fs");
const PORT = 3003;
const hostName = "127.0.0.1";

const newServer = server.createServer((req, res) => {

    const handleRoute = (statusCode, file) => {
        fs.readFile(`./views/${file}.html`, (err, data) => {
            res.writeHead(statusCode, { "Content-Type": "text/html" });
            res.write(data)
            res.end()
        })
    }

    if (req.url === "/") {
        handleRoute(200, "index");
    }

    else if (req.url === "/about") {
        handleRoute(200, "about");
    }

    else if (req.url === "/contact") {
        handleRoute(200, "contact");
    }

    else {
        handleRoute(404, "error");
    }
})

newServer.listen(PORT, hostName, () => {
    console.log(`Server is running at http://${hostName}:${PORT}`);
})