//bring in router
const express = require('express');
const router = express.Router();

//bring in router. @route GET /api/posts/test not /test 
//Discription tests posts route
//access Public
router.get('/test', (req, res)=> res.json({msg: "Posts works"}));

module.exports = router;