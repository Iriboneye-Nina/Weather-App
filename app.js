const apikey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
}
checkWeather();