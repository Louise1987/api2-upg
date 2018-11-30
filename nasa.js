//Startar server
var express = require('express');
var app = express();



app.get('/nasa', function(request, response){

});

var request = require("request");
var url = "https://api.nasa.gov/planetary/apod?api_key=jWhYlrNOgvfSw8D3YR5UeinTamaoznwphpD6zT6m";

request(url, function(error, response, body) {

	console.log(body);
	
	});




//Server lyssnar på localhost:3000
app.listen(3000, listening);
function listening(){
   console.log("listening...")
}