var express = require('express');
var path = require('path');
var compression = require('compression');
var routes = require('./app_api/routes/index');



var app = express();


app.use(compression());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname,'dist')));

// send all requests to index.html so browserHistory in React Router works
//app.get('*', function (req, res) {
//  res.sendFile(path.join(path.join(__dirname,'public'), 'index.html'))
//})
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use('/',routes);

var PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
