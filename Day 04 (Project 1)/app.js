const http = require("http");
const path = require("path");
const fs = require("fs");



let server = http.createServer((req, res) => {
  if (req.url == "/") {
    let a = fs.readFileSync("index.html", "utf-8");
    res.end(a);
  } else if (req.url == "/about") {
    let b = fs.readFileSync("about.html", "utf-8");
    res.end(b);
  } else if (req.url == "/contact") {
    let c = fs.readFileSync("contact.html", "utf-8");
    res.end(c);
  } else {
    let d = fs.readFileSync("Pagenotfound.html", "utf-8");
    res.end(d);
  }
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});





// const http = require("http");
// const fs = require("fs");

// let server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     let a = fs.readFileSync("index.html", 'utf-8');
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(a);
//   } else if (req.url == "/login") {
//     let b = fs.readFileSync("Login.html", 'utf-8');
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(b);
//   } else if (req.url == "/signup") {
//     let c = fs.readFileSync("Signup.html", 'utf-8');
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(c);
//   } else {
//     let d = fs.readFileSync("Pagenotfound.html", 'utf-8');
//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.end(d);
//   }
// });

// server.listen(5000, () => {
//   console.log("server running at http://localhost:5000");
// });

