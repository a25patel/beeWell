var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/vaccines-info');
var Vaccines = db.get('vaccines');

/* GET home page. */
router.get('/vaccines', function(req, res, next) {
  Vaccines.find({}).then(function(vaccines){
    res.json(vaccines);
  })
})

// GET One Vaccine
router.get('/vaccines/:id', function(req,res,next){
  console.log('Hello 1');
  Vaccines.findOne({_id: req.params.id}).then(function(oneVaccine){
    console.log('Hello 2');
    console.log(oneVaccine);
    res.json(oneVaccine);
  })
})

module.exports = router;
