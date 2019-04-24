//bring in router
const express = require('express');
const router = express.Router();

//bring in router. @route GET /api/users/test not /test
//Discription tests Users route
//access Privae
router.get('/test', (req, res)=> res.json({msg: "Users works"}));

module.exports = router;