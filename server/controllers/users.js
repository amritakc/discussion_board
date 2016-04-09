var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports = (function() {
 return {
    create: function(req, res){
    	console.log(req.body)
	  	var user = new User({user_name:req.body.name})
	  	user.save(function(err,results){
	  		if(err){
	  			console.log("something went wrong")
	  		}	
	  		else{
	  			console.log("successfully add a user!")
	  			res.json(results)
	  		}	
	  	})
  	  },
  	show: function(req,res){
   		User.findOne({user_name:req.params.name}, function(err,results){
   			if(err) {
	         	console.log(err);
	       	} else {
	       		// console.log("found the topic!")
	         	res.json(results);
	       }
   	    })
      },
	}
})();