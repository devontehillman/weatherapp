// api key for weather api 129a08d8024726f96ac0562f98394ae9
var city ='detroit'
var APIkey = "129a08d8024726f96ac0562f98394ae9"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="
+ city + "&appid=" + APIkey 



// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//   });
  //current weather should display temperature, humidity,wind speed, and UV index
  //future weather 5-day forecast that displays the date, an icon representation of weather conditions, temperature, and humidity