const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Article = mongoose.model("Article");

const router = express.Router();

//router.use(requireAuth)

router.get("/article", async (req, res) => {
  const result = await Article.find({});

  res.send(result);
});

router.route("/add-new").post((req, res) => {
  const category = req.body.category;
  const type = req.body.type;
  const name = req.body.name;
  const born = req.body.born;
  const died = req.body.died;
  const nationality = req.body.nationality;
  const known_for = req.body.known_for;
  const notable_work = req.body.notable_work;
  const about = req.body.about;
  const year = req.body.year;
  const medium = req.body.medium;
  const dimensions = req.body.dimensions;
  const location = req.body.location;
  const designed_by = req.body.designed_by;
  const developer = req.body.developer;

  const newArticle = new Article({
    category,
    type,
    name,
    born,
    died,
    nationality,
    known_for,
    notable_work,
    about,
    year,
    medium,
    dimensions,
    location,
    designed_by,
    developer,
  });

  newArticle.save();
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  Article.findByIdAndDelete({ _id: id }, (req, res, err) => {
    if (!err) {
      console.log("Item deleted");
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
