const userService = require("../services/user.service");

module.exports = function(app){
    //login endpoint
    app.post("/users/login", async (req, res) => {
        let user = await userService.authenticate(req.body.email, req.body.password);
        if(user){
            req.session.logged_in = true;
            req.session.user = user;
            res.redirect("/home");
        }
    });

    //signup
    app.post("/users", async (req, res) => {
        userService.postUser(req.body).then( user => {
            res.json(user);
        })
    });

    app.get("/users", async (req, res) => {
        userService.getUsers().then( users => {
            res.json(users);
        });
    });

    app.get("/users/:userId", async (req, res, next) => {
       userService.getUser(req.params.userId).then(user => {
        console.log(user);
        res.json(user);
       });
    });
}