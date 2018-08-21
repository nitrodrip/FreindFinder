//Path package required to get the correct file path for html
var path = require('path');

module.exports = function(app){

//HTML Get Requests: code handles when a page is visited. 
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

//If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
	
}