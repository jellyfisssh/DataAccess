const mongoose = require("mongoose");

const articleSchema = {
    category: String,
    type: String,
    name: String,
    born: String,
    died: String,
    nationality: String,
    known_for: String,
    notable_work: String,
    about: String,
    year: String,
    medium: String,
    dimensions: String,
    location: String,
    designed_by: String,
    developer: String
}

 mongoose.model("Article", articleSchema);
 