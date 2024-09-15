const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const usersRouter = require("./routes/users.route");

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//route not found
app.use((req, res, next) => {
  res.status(404).json({ message: "Bad requst not found " });
});

app.use((err, req, res, next) => {
  res.status(404).json({ message: " something  is broke " });
});
module.exports = app;
