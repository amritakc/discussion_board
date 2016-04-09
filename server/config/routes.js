var topics = require('./../controllers/topics.js')
var answers = require('./../controllers/answers.js')
var comments = require('./../controllers/comments.js')
var users = require('./../controllers/users.js')

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
	app.post('/createcomment', function(req,res){
		comments.create(req,res)
	})
	app.post('/createuser', function(req,res){
		users.create(req,res)
	})
	app.get('/showuser/:name', function(req,res){
		users.show(req,res)
	})
};