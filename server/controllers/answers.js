var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Topic = mongoose.model('Topic');


module.exports = (function() {
 return {
   create: function(req, res){
   		Topic.findOne({_id:req.body.comment}, function(err,topic){
	   		// console.log("in create" + topic._id)
		  	var answer = new Answer({text:req.body.answer, user_name:req.body.user_name})
		  	answer._topic = topic._id;
		  	topic.answers.push(answer)
		  	// console.log("about save" + answer)
		  	answer.save(function(err,results){
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