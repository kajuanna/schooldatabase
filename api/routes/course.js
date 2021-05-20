var express = require("express");
var router = express.Router();
var { Courses, Users } = require("../models");
const { authenticateUser } = require("../middleware/auth-user");
/* GET api router. */
router.get("/", (req, res) => {
  Courses.findAll({
    include: [
      {
        model: Users,
      },
    ],
  })
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
});
//get id route
router.get("/:id", (req, res) => {
  Courses.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Users,
      },
    ],
  })
    .then((course) => {
      res.status(200).json(course).end();
    })
    .catch((error) => {
      console.log(error);
      res.status(400);
      res.json(error).end();
    });
});
//post route
router.post("/", authenticateUser, (req, res) => {
  console.log(req.body);
  Courses.create(req.body)
    .then((course) => {
      res.status(201).location("/api/courses/${course.id}").end();
    })
    .catch((error) => {
      console.log(error);
      res.status(400);
      res.json(error).end();
    });
});

//put couse (update)

router.put("/:id", authenticateUser, function (req, res, next) {
  if (!req.body.title || !req.body.userId) {
    res.status(400);
    res.json({ error: "you must supply a title or user" });
    return;
  }
  Courses.findByPk(req.params.id)
    .then(function (course) {
      course
        .update(req.body)

        .then((course) => {
          res.status(204).json(course).end();
        })
        .catch((error) => {
          res.status(400);
          res.json(error).end();
        });
    })
    .catch((error) => {
      res.status(400);
      res.json(error).end();
    });
});

//delete course
router.delete("/:id", authenticateUser, function (req, res, next) {
  Courses.findByPk(req.params.id)
    .then((course) => {
      course.destroy();
      res.status(204).end();
    })
    .catch((error) => {
      res.status(400);
      res.json(error).end();
    });
});

module.exports = router;
