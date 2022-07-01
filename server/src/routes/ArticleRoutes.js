const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth')

const Article = mongoose.model('Article');

const router = express.Router();

//router.use(requireAuth)

router.get('/article', async (req, res) => {
  const result = await Article.find({})

  res.send(result)
})


module.exports = router;