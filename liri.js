//DEPENDENCIES
var keys = require("./keys.js");
var Twitter = require("twitter");
var spotify = require("spotify");


// TWITTER
var showTweets = function() { 
  var tKeys = new Twitter(keys.twitterKeys);
  client.get("statuses/user_timeline", "statisticbrain", function(err, tweet, res) {
      for (var i = 0; i < tweet.length; i++) {
          console.log(tweet[i].text);
      }
   });
};

//MY API KEY 32b70d0e
var showMovie = function(theMovie) {
  var obdb = "http://www.omdbapi.com/?t=" + theMovie + "&y=&plot=full&tomatoes=true&apikey=32b70d0e";
  
};
