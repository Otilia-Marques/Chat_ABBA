module.exports = function(app){
    //login
    app.post("/users/login", (req, res) => {
        res.render("login");
    });

    app.get("/login", (req, res)=>{
        res.render("login");
    })

    //signup
    app.post("/users", (req, res) => {
        res.render("login");
    });
}