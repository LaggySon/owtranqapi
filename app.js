const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const app = express();

app.use(cors());
app.use(bodyParser.json());

//import routes
const teamsRoute = require("./routes/teams");
app.use("/teams", teamsRoute);

//Middlewares - functions that execute when routes are hit
app.use("/teams", () => {
  console.log("accessed teams page");
});

//ROUTES
//get - get information
//post - send information
//delete - delete information
//patch - modify information
app.get("/", (req, res) => {
  res.send("Home Page");
});

//CONNECT TO DATABASE
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to Database Successfully.");
  }
);

//LISTEN TO SERVER
app.listen(3000);
