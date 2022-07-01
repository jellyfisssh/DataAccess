require('./models/User');
 require('./models/ArticleModel');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes')
 const articleRoutes = require('./routes/ArticleRoutes')
const requireAuth = require('./middlewares/requireAuth')
const app = express()

app.use(bodyParser.json())
app.use(authRoutes)
 app.use(articleRoutes)

const mongoUri = 'mongodb+srv://adminuser:whitecliffe@whitecliffecluster.8dhlmba.mongodb.net/Project'
mongoose.connect(mongoUri)
app.get('/',requireAuth, (req, res) => {
  res.send(`your email:`)
})
mongoose.connection.on('connected', () => {
  console.log('connceted to mongo instance');
})

mongoose.connection.on('error', (err) => {
  console.error('error connecting to mongo', err);
})
const listener = app.listen(3001, () => {
  console.log('listening on port '  + listener.address().port);
  
})