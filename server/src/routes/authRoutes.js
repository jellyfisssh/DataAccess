const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User')

const router = express.Router();

router.post('/signup', async (req, res) => {
  const {username, password, role} = req.body
  try {
    const user = new User({username, password, role})
    await user.save()
    const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY')
    res.send({token})
  } catch (error) {
    return res.status(422).send(error.message)
  }

})

router.post('/signin', async (req, res) => {
  const {username, password, role} = req.body
  if (!username || !password || !role) return res.status(422).send({error: 'Must provide email and password'})

  const user = await User.findOne({username})
  if(!user) return res.status(404).send({error: 'invalid email or password'})
   if ( user.role !== role ) return res.status(404).send({error: 'wrong login role'})
   console.log(user.role);
  try {
    await user.comparePassword(password)
    const token = await jwt.sign({userId: user._id}, 'MY_SECRET_KEY')
    res.send({token})
  } catch (error) {
    return res.status(422).send(error.message)
  }
    
  
  
})

module.exports = router;