var friendData 		= require('../data/friends.js');
var path 			= require('path');

var totalDifference = 0;

//API Get Requests: (localhost:PORT/api/admin) JSON of data shown:
module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

//API Post Request: User submited form data (JSON) is pushed to the Javascript array:
	app.post('/api/friends', function(req, res){
		var greatMatch = {
			name: "",
			image: "",
			matchDifference: 1000
		};
		var usrData 	= req.body;
		var usrName 	= usrData.name;
		var usrImage 	= usrData.image;
		var usrScores 	= usrData.scores;

		var totalDifference = 0;

		//Loop the friends data array of objects to get each friends scores:
		for(var i = 0; i < [friends].length-1; i++){
			console.log(friends[i].name);
			totalDifference = 0;

			//Loop through friends and users scores to find the difference between the two and push that to the totalDifference variable set above
			for(var j = 0; j < 10; j++){
				
			//Calculate the difference between the scores and sum them into the totalDifference:
				totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(friends[i].scores[j]));
				
				// If the sum of differences is less then the differences of the current "best match":
				if (totalDifference <= greatMatch.friendDifference){

				//Reset the bestMatch to be the new friend:
					greatMatch.name = friends[i].name;
					greatMatch.photo = friends[i].photo;
					greatMatch.matchDifference = totalDifference;
				}
			}
		}

		friends.push(usrData);
 
		res.json(greatMatch);
	});
};
