var mongoose = require('mongoose');
var fs = require('fs');
//Insert DB Name
mongoose.connect('mongodb://localhost/Insert_DataBaseName');

var models_path = __dirname + '/../models'

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})