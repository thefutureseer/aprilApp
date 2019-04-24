//bring in router
const express = require('express');
const router = express.Router();

//bring in router. @route GET /api/profile/test not only /test 
//Discription tests profile route
//access Public
router.get('/test', (req, res)=> res.json({msg: "Profile works"}));

module.exports = router;