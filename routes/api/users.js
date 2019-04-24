//bring in router
const express = require('express');
const router = express.Router();

//bring in router. @route GET /api/users/test not /test
//Discription tests Users route
//access Private
router.get('/test', (req, res)=> res.json({msg: "Users works"}));

//bring in router. @route GET /api/users/test not /test
//Discription register Users route
//access Private


module.exports = router;