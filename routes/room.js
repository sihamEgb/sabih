var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:num', function(req, res) {
  res.render('chatroom', { room_number: req.params.num });
});

module.exports = router;
