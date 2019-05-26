var path = require("path");
//var publicDir = require("path").join(__dirname, '/public')


module.exports = function(app) {
//app.use(express.static(publicDir));
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})


app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"))
})

// app.get("/charmander", function(req, res){
//     res.sendFile(path.join(__dirname, "images/charmander.png"))
// })
}