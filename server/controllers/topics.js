var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Answer = mongoose.model('Answer');
var User = mongoose.model('User');

module.exports = (function() {
 return {
   index: function(req,res){
   		Topic.find({}, function (err, results){
   			if(err) {
	         	console.log(err);
	       	} else {
	       		// console.log(results)
	         	res.json(results);
	       }
   	    })
    },
    show: function(req,res){
   		Topic.find({_id:req.params.id})
   		.populate({
					path:'answers',
					model:'Answer',
					populate:{
						path:'comments',
						model:'Comment'
					}
				})
			.exec(function (err, results){
   			if(err) {
	         	console.log(err);
	       	} else {
	       		// console.log("found the topic!")
	         	res.json(results);
	       }
   	    })
    },
   create: function(req, res){
   	// console.log("create topics controller", req.body.user_name)
   		User.update({user_name:req.body.user_name}, {$inc: {total_topics:1}},function(err, results){
		  	var topic = new Topic({title:req.body.title, description: req.body.description, user_name:req.body.user_name, category:req.body.category})
		  	topic.save(function(err,results){
		  		if(err){
		  			console.log("something went wrong" + results.message)
		  		}
		  		else{
		  			console.log("successfully add a topic!" + results)
		  			res.json(results)
		  		}
		  	 })
		  })
  	  },
	}
})();