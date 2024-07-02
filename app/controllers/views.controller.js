module.exports = function(app){
    //post page
    app.get("/signup", (req, res)=>{
        res.render("signup");
    });

    //login page
    app.get("/login", (req, res)=>{
        res.render("login");
    });

    //home page
    app.get("/home", (req, res) => {
        res.render("home");
    });

    //groups page
    app.get("/groups", (req, res) => {
        res.render("groups");
    });

    app.get("/**/", (req, res) =>{
        res.render("error/notFound")
    })
}