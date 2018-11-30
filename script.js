//Startar server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Hämtar api key
var request = require('request');
var argv = require('yargs').argv;

// css mapp
app.use(express.static('public')); 
//--------------------------------------------------------------------------------------------------------------------------------------------------
//Hämtar pug
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));

//-------------------------------------------------------------------------------------------
//Api key
var apiKey = '66cf27da781d9551f542dd262827e6a8';
let city = argv.c || 'Stockholm';
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
//-----------------------------------------------------------------------------------------------
//Hämtar form
app.get('/weather', function(req, res){
	return res.render('get-form')
});
//---------------------------------------------------------------------------------------------
//Hämtar värde från api key och skriver ut 
// app.get('/getsubmit', function(req, res){
request(url, function (err, res, body){
	if(err){
		console.log('error:', error);
	} else {
		var weather = JSON.parse(body)
		var message = `Det är ${weather.main.temp} grader i ${weather.name}!`;
		console.log(message);		
		res.send(message);
	}
});


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//Server lyssnar på localhost:3000
app.listen(3000, listening);
function listening(){
   console.log("listening...")
}
