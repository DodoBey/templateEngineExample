const express = require("express");

const routes = express.Router();

const homeRoute = require("./homepage");

routes.get("/users", (req, res, next) => {
  res.render("usersList", {
    pageTitle: "Users List",
    users: homeRoute.userList,
  });
});

module.exports = routes;
