const apikey = "d43ebd8f88f28f3260113bd9206d843f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round( data.main.temp )+ "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
          weatherIcon.src = "images/cloud.png";
        }
        else if(data.weather[0].main == "clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "moon"){
            weatherIcon.src = "images/moon.png";
        }
    
    var data = await response.json();
    


    document.querySelector(".Weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

 