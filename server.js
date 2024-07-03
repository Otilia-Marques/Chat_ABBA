process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require("./config/express");
const mongoose = require("./config/mongoose");
const {createServer} = require('node:http');

const db = mongoose();
const app = express();

const server = createServer(app);

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});