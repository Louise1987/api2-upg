//Startar server
var express = require('express');
//var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

//Hämtar api key
var request = require('request');
var argv = require('yargs').argv;

// css mapp
app.use(express.static('public')); 
//-----------------------------------------------------------------------------------------
//Hämtar rhyme.json
// var fs_data = fs.readFileSync('./file.json');
// var rhyme = JSON.parse(fs_data);
//---------------------------------------------------------------------------------------------
//Hämtar pug
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));

//-------------------------------------------------------------------------------------------

var apiKey = '66cf27da781d9551f542dd262827e6a8';
let city = argv.c || 'Stockholm';
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
//-----------------------------------------------------------------------------------------------
//Api key
app.get('weather', function(request, response){
	return response.render('get-form')
});

//Hämtar värde från api key och skriver ut

request(url, function (err, response, body){
	if(err){
		console.log('error:', error);
	} else {
		var weather = JSON.parse(body)
		var message = `Det ${weather.main.temp} grader i ${weather.name}!`;
		console.log(message);		
		response.send("visar väder");
		//console.log(body);
	}
});
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//Server lyssnar på localhost:3000
app.listen(3000, listening);
function listening(){
   console.log("listening...")
}
