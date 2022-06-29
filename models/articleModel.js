const mongoose = require("mongoose");

const articleSchema = {
    category: String,
    type: String,
    name: String
}

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;

    // Born: String,
    // Died: String,
    // Nationality: String,
    // KnownFor: String,
    // NotableWork: String,
    // About: String,
    // Year: String,
    // Medium: String,
    // Dimensions: String,
    // Location: String,
    // DesignedBy: String,
    // Developer: String