var express = require("express");
var router = express.Router();
var { Users, Courses } = require("../models");
const { authenticateUser } = require("../middleware/auth-user");

//user get route
router.get("/", authenticateUser, (req, res, next) => {
  Users.findOne({
    include: [
      {
        model: Courses,
      },
    ],
  })
    .then((users) => {
      res.status(200);
      res.json(users).end();
    })
    .catch((error) => {
      res.status(400);
      res.json(error).end();
    });
});
//user post route
router.post("/", (req, res, next) => {
  const user = req.body;

  Users.create({
    firstName: user.firstName,
    lastName: user.lastName,
    emailAddress: user.emailAddress,
    password: user.password,
  })
    .then((user) => {
      res.status(201).location("/");
      res.end();
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
      res.end();
    });
});

module.exports = router;
