var express = require("express");
var path = require("path");
var port = process.env.port || 3000;
var path = require("path");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// getting json data
app.get("/api/tables", function(err, res) {
  res.send(table);
});
app.get("/api/waitlist", function(err, res) {
  res.send(waitlist);
});

app.listen(port, function() {
  console.log(`server running on port ${port}`);
});

app.post("/api/newReserve", function(req, res) {
  var reqbody = req.body;

  if (table.length > 5) {
    waitlist.push(reqbody);
    res.json(true);
  } else {
    table.push(reqbody);
    res.json(false);
  }
});
