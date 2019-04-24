//bring in router
const express = require('express');
const router = express.Router();

//bring in router. referring to route 5000/api/users/test not only /test done through middleware
router.get('/test', (req, res)=> res.json({msg: "Users works"}));

module.exports = router;