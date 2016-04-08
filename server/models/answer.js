var mongoose = require('mongoose');
var Schema = mongoose.Schema

var AnswerSchema = new mongoose.Schema({
  text: String, 
  user_name: String,
  _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
  comments: [{type: Schema.Types.ObjectId, ref:'Comment'}],  
  arrow: {type:Boolean, default: false },
  num_like:{type: Number, default: 0},
  num_dislike:{type: Number, default: 0},
  created_at: {type: Date, default: new Date}
});

mongoose.model('Answer', AnswerSchema);