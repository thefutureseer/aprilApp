//bring in router
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

//load User model
const User = require('../../models/User');

//bring in router. @route GET /api/users/test not /test
//Discription tests Users route
//access Private
router.get('/test', (req, res)=> res.json({msg: "Users works"}));

//@route GET /api/users/test not /test
//Discription register Users route
//access Public
router.post('/register', (req, res) => {
  User.findOne({name: req.body.name })
   .then(user => {
     if(user) {
       return res.status(400).json({name: "Name already exists"});
      } else {
       const newUser = new User({
         name: req.body.name,
         phone: req.body.phone,
         password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt)=>{
          bcrypt.hash(newUser.password, salt, (err, hash) => {
           if(err) throw err;
           newUser.password= hash;
           newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
          })
        })
    }
  });
});



module.exports = router;