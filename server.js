var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("assets"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var route = require("./routes/htmlRoutes");
app.use(route);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

