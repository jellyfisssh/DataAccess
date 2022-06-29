const express = require("express");
const router = express.Router();
const Article = require("../models/articleModel");

router.route("/add-new").post((req, res) => {
    const category = req.body.category;
    const type = req.body.type;
    const name = req.body.name;
    const newArticle = new Article({
        category,
        type,
        name
    });

    newArticle.save();
})

router.route("/main-content").get((req, res) => {
    Article.find()
    .then(foundArticles => res.json(foundArticles))
})

module.exports = router;