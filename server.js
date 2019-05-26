var express = require("express");
var app = express();

var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//var publicDir = require("path").join(__dirname, '/public')
app.use(express.static('public'))
app.use('/images', express.static('public'))
//app.use(express.static(__dirname + 'public'))
// module.exports = function(app) {
// //app.use(express.static(publicDir));
// }

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});