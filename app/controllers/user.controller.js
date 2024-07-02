module.exports = function(app){
    //login endpoint
    app.post("/users/login", (req, res) => {
        res.render("login");
    });

    //signup
    app.post("/users", (req, res) => {
        res.render("login");
    });
}