//Startar server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


//------------------------------------------------------------------------------------------------------------------------------------------------------
//Hämtar api key
var request = require('request');
// var argv = require('yargs').argv;
//-------------------------------------------------------------------------------------------------------------------------------------------------------
// css mapp
app.use(express.static('public')); 
//--------------------------------------------------------------------------------------------------------------------------------------------------
//Hämtar pug
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));

//-------------------------------------------------------------------------------------------
//Api key
var apiKey = '66cf27da781d9551f542dd262827e6a8';
//let city = 'Stockholm';
//var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
//-----------------------------------------------------------------------------------------------
app.get('/', function(req,res){
	return res.render('index')
});

//Hämtar form
app.get('/', function(req, res){
	return res.render('get-form', list)
});
//---------------------------------------------------------------------------------------------
//Hämtar värde från api key och skriver ut 
 app.get('/getsubmit', function(req, res){
	var id =req.query.key;
	var url = `http://api.openweathermap.org/data/2.5/weather?q=`+id+`&units=metric&appid=${apiKey}`
//-----------------------------------------------------------------------------------------------
//Skriver ut data från api
request(url, function (err, response, body){
	

	if(err){
		console.log('error:', error);
	} else {
		var weatherList = JSON.parse(body)
		var message = `<h3 style="color:rgb(60, 57, 234); font-variant: small-caps; font-size:50px; position:fixed; left:35%;">Vädret i ${weatherList.name}</h3><br>
		<p style="color:rgb(5, 0, 121); font-variant: small-caps; font-size:35px; position:fixed; top:35%; left:35%; font-weight: bold; text-align:center;">Temperaturen ${weatherList.main.temp} grader<br>Luftfuktighet ${weatherList.main.humidity}%<br>Vindhastighet ${weatherList.wind.speed} m/s<br>Molnighet ${weatherList.clouds.all}%</p></body>`;
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Animation
			console.log(weatherList);				
			console.log(id);
			res.send(message);
		}
	});
	 });

//-----------------------------------------------------------------------------------------
//Server lyssnar på localhost:3000
app.listen(3000, listening);
function listening(){
   console.log("listening...")
}
