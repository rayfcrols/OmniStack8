const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const server = express();

mongoose.connect(
  // "mongodb+srv://omnistack:kill6133@cluster0-utkyw.mongodb.net/omnistack8?retryWrites=true&w=majority",
  "mongodb://localhost/omnistack8",
  { useNewUrlParser: true }
);

server.use(express.json());

server.use(routes);

server.listen(3333);
