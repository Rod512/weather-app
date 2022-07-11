let weather = {
    'apiKey': 'fc62695859357c2753c81031c6bc2ca5',
    fetchWeather : function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            +"&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))

    },
    displayWeather: function(data){
        const {name} = data
        const {icon , description} = data.weather[0]
        const {temp,humidity} = data.main
        const {speed} = data.wind
        console.log(name,icon,description,temp,humidity,speed)

        document.querySelector(".city").innerHTML = "Weather In " + name
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png"
        document.querySelector(".description").innerHTML = description
        document.querySelector(".temp").innerHTML = temp + '°C'
        document.querySelector(".humidity").innerHTML = "Humidity " + humidity + "%"
        document.querySelector(".wind").innerHTML = "wind speed " + speed + " km/h"
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

document.querySelector(".search button").addEventListener('click',()=>{
    weather.search();

})