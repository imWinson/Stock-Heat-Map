var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var getStockprice = require('../controllers/stockprice')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});


/* GET home page. */
router.get('/stock/:symbol',getStockprice.getStockprice);
router.get('/current',getStockprice.getCurrent);


module.exports = router;
