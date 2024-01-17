// const fs = require("fs");
// const path = require("path");
// const http = require("http");
// const server = http.createServer((req, res) => {
//     if (req.url === "/test") {
//         fs.readFile(path.join(__dirname, "test", "googlehomepage.html"), "utf-8", (err, data) => {
//             if (err) throw err;
//             res.writeHead(200, {
//                 "Content-Type": "text/html"

//             });
//             res.end(data);
//         });
//         // fs.readFile(path.join(__dirname, "test/css", "googlehomepage.css"), "utf-8", (err, data) => {
//         //     if (err) throw err;
//         //     res.writeHead(200, {
//         //         "Content-Type": "text/css"

//         //     });
//         //     res.end(data);
//         // });

//     }
//     if (req.url === "/gmail") {
//         fs.readFile(path.join(__dirname, "views", "cont.html"), "utf-8", (err, data) => {
//             if (err) throw err;
//             res.writeHead(200, {
//                 "Content-Type": "text/css"
//             });
//             res.end(data);
//         });
//     }
// });
// const PORT = process.env.PORT || 3001;
// server.listen(PORT, () => console.log(`server is running on ${PORT}`));


const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const path = require("path");
app.get("/", (req, res) => {
    res.json("<h1>home</h1>");
    // res.send("<h1>home</h1>");
});
app.get("/contact", (req, res) => {
    // res.json("<h1>home</h1>");
    res.sendFile(path.join(__dirname, "views", "googlehomepagecopy.html"));
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    `server running on ${PORT}`
})