let http = require('http');
let request = require('request');
 
let apiKey = '9d0a3062c4206d9e08ec2694516da3c7';
let cidade = 'Guarda';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`
var dados;
 
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
	dados = `Dados ${weather.name}:
	 - Humidade: ${weather.main.humidity}%
	 - Temperatura: ${weather.main.temp}ºC`;
	console.log(dados);
  }
});


http.createServer(function(req,res){
	res.end(dados);
}).listen(80);