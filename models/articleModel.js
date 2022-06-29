const mongoose = require("mongoose");

const articleSchema = {
    Category: String,
    Type: String,
    Name: String
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
}

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
