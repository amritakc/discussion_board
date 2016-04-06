var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Topic = mongoose.model('Topic');


module.exports = (function() {
 return {
   create: function(req, res){
   		// console.log(req.body.comment)
   		Topic.findOne({_id:req.body.comment}, function(err,topic){
	   		// console.log("in create" + topic._id)
		  	var new_answer = new Answer({text:req.body.answer, user_name:req.body.user_name})
		  	new_answer._topic = topic._id;
		  	topic.answers.push(new_answer)
		  	// console.log("about save" + new_answer)
		  	new_answer.save(function(err,results){
		  		topic.save(function(err){ 
		  		if(err){
		  			console.log("something went wrong" + results.message)
		  		}
		  		else{
		  			console.log("successfully added an answer!")
		  			// console.log(results)
		  			res.json(results)
		  			}
	  	  		})
		 	})
	  	})
  	  },
	}	
})(); 