// **FileSystem**

const fs = require("fs");

fs.readFile("app.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("data: " + data);
  }
});




// **OS**

const os = require("node:os");

console.log(`Uptime: ${os.uptime()} seconds`);
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Free Memory: ${os.freemem()}`);
console.log(`Hostname: ${os.hostname()}`);
console.log(os.cpus());
console.log(os.platform());




//  **Path**

const path = require("path");

let a = path.join(__dirname, "app.txt");

console.log(path.extname(a));
