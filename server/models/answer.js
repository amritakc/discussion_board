var mongoose = require('mongoose');
var Schema = mongoose.Schema

var AnswerSchema = new mongoose.Schema({
  text: String, 
  user_name: String,
  _topic: {type: Schema.Types.ObjectId, ref: 'Topic'}, 
  created_at: {type: Date, default: new Date}
});

mongoose.model('Answer', AnswerSchema);