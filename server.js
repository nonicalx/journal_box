var express = require("express");
var app = express();
var http = require("http");
var path = require("path");
require("dotenv").config();
var PORT = process.env.PORT || 8100;

app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  console.log(path.join(__dirname, "/build/index.html"));
  return res.sendFile(path.join(__dirname, "/build/index.html"));
});

http
  .createServer(app)
  .listen(PORT)
  .on("listening", () => {
    console.info("Listening on port " + PORT);
  });
