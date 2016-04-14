var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

module.exports = (function() {
 return {
   create: function(req, res){
   		console.log("create answers controller", req.body)
   		User.update({user_name:req.body.user_name}, {$inc: {total_answers:1}}, function(err,results){
   		Topic.findOne({_id:req.body.comment}, function(err,topic){
		  	var new_answer = new Answer({text:req.body.answer, user_name:req.body.user_name})
		  	new_answer._topic = topic._id;
		  	topic.answers.push(new_answer)
		  	new_answer.save(function(err,results){
		  		topic.save(function(err){ 
		  		if(err){
		  			console.log("something went wrong" + results.message)
		  		}
		  		else{
		  			console.log("successfully added an answer!")
		  			res.json(results)
		  			}
	  	  		})
		 	})
		  })
	  	})
  	  },
  	like: function(req, res){
  		console.log("hello")
   		console.log(req.params.id)
   		Answer.update({_id:req.params.id}, {$inc: {num_like:1}, arrow:"like"}, function(err,results){
		  		if(err){
		  			console.log("something went wrong")
		  		}
		  		else{
		  			console.log("successfully added a like!")
		  			console.log(results)
		  			res.json(results)
		  			}
			  	})
  	  		},
  	dislike: function(req, res){
  		console.log("hello")
   		console.log(req.params.id)
   		Answer.update({_id:req.params.id}, {$inc: {num_dislike:1}, arrow:"dislike"}, function(err,results){
		  		if(err){
		  			console.log("something went wrong")
		  		}
		  		else{
		  			console.log("successfully added a dislike!")
		  			console.log(results)
		  			res.json(results)
		  			}
			  	})
  	  		},




	}	
})(); 