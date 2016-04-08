var topics = require('./../controllers/topics.js')
var answers = require('./../controllers/answers.js')

module.exports = function(app){
	app.get('/topics', function(req,res){
		topics.index(req,res)
	})
	app.post('/createtopic', function(req,res){
		topics.create(req,res)
	})
	app.get('/show/:id', function(req,res){
		topics.show(req,res)
	})
	app.post('/createanswer', function(req,res){
		answers.create(req,res)
	})
	app.post('/createlike/:id', function(req,res){
		answers.like(req,res)
	})
	app.post('/createdislike/:id', function(req,res){
		answers.dislike(req,res)
	})
};