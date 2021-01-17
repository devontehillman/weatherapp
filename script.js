const temp = Array.from(document.querySelectorAll('.temp'));
const humi = Array.from(document.querySelectorAll('.humi'));


// api key for weather api 129a08d8024726f96ac0562f98394ae9
// var city = userInput
// var APIkey = "129a08d8024726f96ac0562f98394ae9"
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="
// + city + "&appid=" + APIkey 

var queryURL 



// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//   });
//   // current weather should display temperature, humidity,wind speed, and UV index
//   // future weather 5-day forecast that displays the date, an icon representation of weather conditions, temperature, and humidity

//functions
function composeURL(userString){
  var city = userString
  var APIkey = "129a08d8024726f96ac0562f98394ae9"
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="
  + city + "&appid=" + APIkey 
  return queryURL

  var dailyURL
  }
  // 5 day forcat 
  function dailyURL(arr){
    var lat = arr[0]
    var lon = arr[1]
    //console.log(lat)
    //console.log(lon)
    var APIkey = "129a08d8024726f96ac0562f98394ae9"
    var dailyURL = "https://api.openweathermap.org/data/2.5/onecall?lat="
    + lat + "&lon="+ lon +"&exclude=current,minutely,hourly,alerts&units=imperial&appid=" + APIkey
    //console.log(dailyURL)
    return dailyURL;
    
    }

  // take in url to get lat and lon and returns it as an array
function dailyWeatherinfo(URL){ // pass in the url 
    //console.log(URL)
    var dataToReturn = [];
    

    $.ajax({
    url: URL,
    method: "GET",
    async: false,
    success: function(response){
      dataToReturn[0] = response.city.coord.lat
      dataToReturn[1] = response.city.coord.lon
      //console.log(dataToReturn)
    }
  });
  return dataToReturn;
};

function Weatherinfo(URL){ // pass in the url 
  var weeklyweather = [];
  var weeklyhumidity= [];
  var dataToReturn = "Error";
$.ajax({
  url: URL,
  method: "GET",
  async: false,
  success: function(response){
    var i  
    for(i = 0;i < 5; i ++ ){
    weeklyweather[i] = response.daily[i].temp.eve;
    weeklyhumidity[i]= response.daily[i].humidity;
    }
    dataToReturn = weeklyweather.concat(weeklyhumidity)
    //console.log(dataToReturn)
} 
});
return dataToReturn;
};

  $("#btn").click(function(){
    event.preventDefault();
    let userInput = $(".userCity").val()
    $('.mycity').text(userInput)

     var finalURL = composeURL(userInput)//getsURL
    var myarr = dailyWeatherinfo(finalURL)//gets lat and lon
    var newURl = dailyURL(myarr) //gets URL for daily forecast
    var weatherHumidity = Weatherinfo(newURl)//pass into ajax now we need to return val
    console.log(weatherHumidity)
    
    var j=5
for (let i = 0; i < 5; i++) {
    temp[i].innerHTML = weatherHumidity[i];
    humi[i].innerHTML = weatherHumidity[j];
    j++;
}
  })



  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function(response) {
  //   console.log(response);
  // });
  //weather Icons 
  
  //<i class="fas fa-cloud"></i> 
  //<i class="fas fa-bolt"></i>
  //<i class="far fa-snowflake"></i>
  //<i class="fas fa-cloud-rain"></i>
  //<i class="fas fa-moon"></i>
  //
  //
