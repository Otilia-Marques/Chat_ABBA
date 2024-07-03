const express = require("express");
const config = require("./config");
const session = require("express-session");
const body_parser = require("body-parser");


module.exports = function () {
    var app = express();

    //set ejs as view engine
    app.set("views", "./app/views");
    app.set("view engine", "ejs");

    app.use(body_parser.json());
    app.use(body_parser.urlencoded({extended: false}));

    //static folder
    app.use(express.static('./public'));

    //express-session
    app.use(session({
        secret: config.sessionSecret,
        resave: true,
        saveUninitialized: true,
        cookie: { 
            secure: false,
            maxAge: 60 * 60 * 1000
        }
    }));

    //register routes
    require("../app/routes/user.routes")(app);
    require("../app/routes/views.routes")(app);

    return app;
}