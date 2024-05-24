const server = require("http");
const fs = require("fs");
const PORT = 3001;
const hostName = "127.0.0.1";

const newServer = server.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("./views/index.html", (err, data) => {
            res.writeHead(207, { "Content_type": "text/html" });
            res.write(data);
            res.end();
        })
    }

    else if (req.url === "/about") {
        fs.readFile("./views/about.html", (err, data) => {
            res.writeHead(207, { "Content_type": "text/html" });
            res.write(data);
            res.end();
        })
    }

    else if (req.url === "/contact") {
        fs.readFile("./views/contact.html", (err, data) => {
            res.writeHead(207, { "Content_type": "text/html" });
            res.write(data);
            res.end();
        })
    }

    else {
        fs.readFile("./views/error.html", (err, data) => {
            res.writeHead(207, { "Content_type": "text/html" });
            res.write(data);
            res.end();
        })
    }

})

newServer.listen(PORT, hostName, () => {
    console.log(`Server is running at http://${hostName}:${PORT}`);
})