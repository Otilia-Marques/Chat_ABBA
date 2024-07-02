const express = require("./config/express");
const {createServer} = require('node:http');

const app = express();
const server = createServer(app);

app.get("/", (req, res) => {
    res.render("login");
})

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});