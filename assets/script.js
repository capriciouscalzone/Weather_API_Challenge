var APIKey = "a7702cd16c3900bfd85bce8efc609fda";

var city = $("#cityName")

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;




$('#submitCity').click(function() {
    event.preventDefault();
    let cityName = $('#cityName').val();
    getWeatherDetails(cityName);
    getFutureWeather(cityName);
})

$('#pastCities').click(function() {
    let cityName = event.target.value;
    getWeatherDetails(cityName);
    getFutureWeather(cityName);
})

if (localStorage.getItem('localWeatherSearches')) {
    cityHistory = JSON.parse(localStorage.getItem('localWeatherSearches'));
    writeSearchHistory(cityHistory);
} else {
    cityHistory = [];
};
$('#clear').click(function() {
    localStorage.clear('localWeatherSEarches');
});


function getWeatherDetails(cityName) {
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apikey}';

       $.ajax({
        url: queryURL,
        type: 'GET',
        success: function(response){ 

            let currTime = new Date(response.dt*1000);
            let weatherIcon = 'https//openweathermap.org/img/wn/${response.weather[0].icon}@2x.png';
            currWeather.html('
            <h2> ${response.name}, ${respnse.sys.country} (${currTime.getMonth()+1}/$currTime.getDate()}/${currTime.getFullYear()})<img src=${weatherIcon} height="70px"></h2>')
            
        }
       })
}



