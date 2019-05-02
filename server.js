var express = require("express");
var port = process.env.port || 3000;
var path = require("path");

var app = express();

//array to store data
var table = [
  {
    name: "xyz",
    number: "000-000-0000",
    id: "12344",
    email: "email@email"
  }
];

var waitlist = [
  {
    name: "xyz",
    number: "000-000-0000",
    id: "12344",
    email: "email@email"
  }
];

// .get routes for getting file
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./home.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "./reserve.html"));
});
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "./tables.html"));
});

app.listen(port, function() {
  console.log(`server running on port ${port}`);
});
