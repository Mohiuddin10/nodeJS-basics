const http = require("http");
const port = 3001;
const hostname = "127.0.0.1";

http.createServer((req, res)=> {
    res.end("Hello, I am your first server")
}).listen(port, hostname, () => {
    console.log(`server is running successfully at http://${hostname}:${port}`);
});