let request = require('request');
 
let apiKey = '9d0a3062c4206d9e08ec2694516da3c7';
let cidade = 'Guarda';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`
 
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});