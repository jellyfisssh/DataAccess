const express = require("express");
const router = express.Router();
const Article = require("../models/articleModel");

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
        developer
    });

    newArticle.save();
})

router.route("/main-content").get((req, res) => {
    Article.find()
    .then(foundArticles => res.json(foundArticles))
})

module.exports = router;