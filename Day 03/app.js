// const http = require("http");

// http.createServer((req, res) => {
//     res.end("Server Is Running");
//   }).listen(3000);


// *****************************************


const http = require("http");

let server = http.createServer((req, res)=>{
    res.end("This Server Is Running!");

   
})
server.listen(3000, () => {
    console.log("Server is running on port 3000");
    });