module.exports = function(app){
    app.get("/groups", (req, res) => {
        res.render("groups");
    })
}