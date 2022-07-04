const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Article = mongoose.model("Article");

const router = express.Router();

//router.use(requireAuth)

// read route
router.get("/article", async (req, res) => {
  const result = await Article.find({});

  res.send(result);
});

// read specific article route
router.get("/detail-content/:id", async (req, res) => {
  const id = req.params.id;
  await Article.findById(id, function (err, result) {
    console.log(result);
    res.send(result);
  });
});

// add new article route
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

// delete article route
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

//edit article route
router.put("/edit/:id").put((req, res) => {
  alert(req);
  const updatedArticle = {
    category: req.body.category,
    type: req.body.type,
    name: req.body.name,
    born: req.body.born,
    died: req.body.died,
    nationality: req.body.nationality,
    known_for: req.body.known_for,
    notable_work: req.body.notable_work,
    about: req.body.about,
    year: req.body.year,
    medium: req.body.medium,
    dimensions: req.body.dimensions,
    location: req.body.location,
    designed_by: req.body.designed_by,
    developer: req.body.developer,
  };

  Article.findByIdAndUpdate(
    console.log(req),
    { _id: req.params.id },
    { $set: updatedArticle },
    (req, res, err) => {
      if (!err) {
        alert("Article updated");
      } else {
        alert(err);
      }
    }
  );
});

module.exports = router;
