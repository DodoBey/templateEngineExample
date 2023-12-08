const express = require("express");

const routes = express.Router();

const userList = [];

routes.get("/", (req, res, next) => {
  res.render("homepage", { pageTitle: "Homepage" });
});

routes.post("/add-user", (req, res, next) => {
  userList.push({ user: req.body.user });
  res.redirect("/users");
});

exports.routes = routes;
exports.userList = userList;
