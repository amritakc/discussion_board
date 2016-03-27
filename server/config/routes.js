var topics = require('./../controllers/topics.js')


module.exports = function(app){
	app.get('/topics', function(req,res){
		topics.index(req,res)
	})
	app.post('/createtopic', function(req,res){
		topics.create(req,res)
	})
};