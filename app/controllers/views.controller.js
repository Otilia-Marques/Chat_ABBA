module.exports = function(app){
    //post page
    app.get("/signup", (req, res)=>{
        if(req.session.logged_in)
            return res.redirect("/home");

        res.render("signup");
    });

    //login page
    app.get("/login", (req, res)=>{
        if(req.session.logged_in)
            return res.redirect("/home");
        
        res.render("login");
    });

    //logout
    app.get("/logout", (req, res)=>{
        if(req.session.logged_in)
            req.session.destroy();
        
        res.redirect("/login");
    });

    //home page
    app.get("/home", (req, res) => {
        console.log(req.session.user);
        if(!req.session.logged_in)
            return res.redirect("/login");


        res.render("home", {
            username: req.session.user.firstName
        });
    });

     //home page
     app.get("/", (req, res) => {
        console.log(req.session.user);
        if(!req.session.logged_in)
            return res.redirect("/login");


        res.redirect("/home");
    });

    //groups page
    app.get("/groups", (req, res) => {
        if(!req.session.logged_in)
            return res.redirect("/login");

        res.render("groups");
    });

    app.get("/**/", (req, res) =>{
        res.render("error/notFound");
    });
}