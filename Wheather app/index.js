const API_KEY = `5ffc3f73e27df09e614ea69fcf0cf2ef`

const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#wheather")



const getweather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metic`
    const response = await fetch(url);
    //  console.log(response);
    const data = await response.json();
    console.log(data)
    return showWeather(data)
}

const showWeather = (data) => {
    weather.innerHTML = `
    <div class="temp">
                <h1>Temp : </h1>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                <h1> ${parseInt(data.main.temp - 273)} °C</h1>
            </div>

            <div class="wind">
                <h1> Wind : </h1>
                <h1> ${data.wind.speed} km/h</h1>
            </div> 
    `
}




form.addEventListener(
    "submit", function (event) {
        getweather(search.value)
        event.preventDefault();
    }
)


// *************dark mode js*****************

const toggle = document.getElementById('sun');
toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon');
    document.body.classList.toggle('dark-theme')
});