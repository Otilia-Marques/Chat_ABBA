const express = require("express");


module.exports = function () {
    var app = express();

    //set ejs as view engine
    app.set("views", "./app/views");
    app.set("view engine", "ejs");

    app.use(express.static('./public'));

    //register routes
    require("../app/routes/index.routes")(app);
    require("../app/routes/groups.routes")(app);
    require("../app/routes/user.routes")(app);

    return app;
}