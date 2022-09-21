var APIKey = "a7702cd16c3900bfd85bce8efc609fda";

var city = $("#cityName")

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)

