const http = require("http");

const server = http.createServer((req, res) => {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Welcome to Smart Utility Toolkit");
        res.end()
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("This is the About page");
        res.end()
    } else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("This is the Contact page");
        res.end()
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});