function searchWeather() {
    var city = document.getElementById("cityInput").value;
    var dropdown = document.getElementById("countryDropdown");
    var countryName = dropdown.value;
    var apiKey = '5T9E68GCGMP7NPQLLW7MKAWGW';
    var apiUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + ',' + countryName + '?unitGroup=us&key=' + apiKey + '&units=metric';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            var city = document.getElementById("cityName").innerText = data.address;
            var temp = document.getElementById("temperature").innerText = data.days[0].temp;
            var des = document.getElementById("description").innerText = data.description;
            var hum = document.getElementById("humidity").innerText = data.days[0].humidity;
            var feel = document.getElementById("feels_like_max").innerText = data.days[0].feelslikemax;
            var feel = document.getElementById("feels_like_min").innerText = data.days[0].feelslikemin;

            var wea = document.getElementById("weatherInfo").style.display = "block";

        })
        .catch(error => alert('Error: please enter the correct location', error))
}

const countries = [
    "India",
    "USA",
    "Canada",
    "Australia",
    "Brazil",
    "China",
    "France",
    "Germany",
    "Japan",
    "Mexico",
];


document.addEventListener("DOMContentLoaded", function () {
    const getCountry = document.getElementById("countryDropdown");
    const countryRender = (parent, value) => {
        const countryElement = document.createElement('option');
        countryElement.textContent = value;
        countryElement.setAttribute('value', value);
        parent.appendChild(countryElement);
    }
    countries.forEach(element => {
        countryRender(getCountry, element);
    });
});
