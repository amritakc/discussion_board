var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
var Comment = mongoose.model('Comment');

module.exports = (function() {
 return {
   create: function(req, res){
   		console.log(req.body)
   		Answer.findOne({_id:req.body.userid}, function(err,answer){
		  	var new_comment = new Comment({comment:req.body.text, user_name:req.body.user_name})
		  	new_comment._answer = answer._id;
		  	answer.comments.push(new_comment)
		  	// console.log("about save" + new_answer)
		  	new_comment.save(function(err,results){
		  	answer.save(function(err){ 
		  		if(err){
		  			console.log("something went wrong")
		  		}
		  		else{
		  			console.log("successfully added a comment!")
		  			// console.log(results)
		  			res.json(results)
		  			}
	  	  		})
		 	})
	  	})
  	  },
	}	
})(); 