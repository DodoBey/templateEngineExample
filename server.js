const express = require("express");
const bodyParser = require("body-parser");

const usersRoute = require("./routes/users");
const homeRoute = require("./routes/homepage");

const host = "localhost";
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(usersRoute);
app.use(homeRoute.routes);

app.use((req, res, next) => {
  res.status(404).render("error", { pageTitle: "Nothing Found" });
});

app.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`);
});
