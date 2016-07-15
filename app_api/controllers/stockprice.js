var mongoose = require('mongoose');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


module.exports.getStockprice = function(req,res){
  if(req.params.symbol){

    var connection = mongoose.createConnection('mongodb://localhost:27017/stock');

    var subject = connection.model('',{},req.params.symbol);


    subject.find({},{"_id":0},function(err,subjectdetail){
      if(err){
        sendJSONresponse(res, 400, err);
        return;
      }else{
        sendJSONresponse(res,200,subjectdetail);
      }
  })
  }else{
    sendJSONresponse(res, 404, {
      "message": "Not found, stockid required"
    });
  }
}


module.exports.getCurrent = function(req,res){

    var connection = mongoose.createConnection('mongodb://localhost:27017/stock_realtime');

    var subject = connection.model('',{},'current');

    subject.find({},{"_id":0},function(err,subjectdetail){

      if(err){
        sendJSONresponse(res, 400, err);
        return;
      }else{
        sendJSONresponse(res,200,subjectdetail);
      }
    })
}
