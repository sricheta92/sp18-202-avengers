var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("/error");
  res.send('<h1> 404 error; Do not worry, our monkeys are fixing it! </h1> ');
});

module.exports = router;
