var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/vaccines');
var Vaccines = db.get('vaccines');

/* GET home page. */
router.get('/vaccines', function(req, res, next) {
  Vaccines.find({}).then(function(vaccines){
    res.json(vaccines);
  })
});

module.exports = router;
