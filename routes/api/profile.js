//bring in router
const express = require('express');
const router = express.Router();

//bring in router. referring to route 5000/api/profile/test not only /test done through middleware
router.get('/test', (req, res)=> res.json({msg: "Profile works"}));

module.exports = router;