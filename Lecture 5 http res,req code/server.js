// const http = require("http");
// const port = 3001;
// const hostname = "127.0.0.1";

// http.createServer((req, res)=> {
//     res.end("Hello, I am your first server")
// }).listen(port, hostname, () => {
//     console.log(`server is running successfully at http://${hostname}:${port}`);
// });

const server = require("http");
const port = 3001;
const hostname = "127.0.0.1";
const myServer = server.createServer((req, res) => {
    res.writeHead(212, {"Content-Type": "text/html"})
    res.write("<h2> This is second server </h2>");
    res.end()
})

myServer.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
})