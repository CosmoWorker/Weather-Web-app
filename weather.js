

const date=document.getElementById("date")
const city=document.getElementById("city")
const temp=document.getElementById("temp")
const tempImg=document.getElementById("temp-img")
const description=document.getElementById("description")
const maxTemp=document.getElementById("max-temp")
const minTemp=document.getElementById("min-temp")

const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let dateObj= new Date()
let month=months[dateObj.getMonth()]
let day=dateObj.getDay()+11
let year=dateObj.getFullYear()


date.innerHTML=`${month} ${day}, ${year}`

const webApp=document.getElementById("web-app")

const getWeather=async()=>{
    try{
        const cityName=document.getElementById("search-inp").value
        const weatherFetch=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=154ce9c4290971119d1e19bac1a4e4ad&`,
        {
            headers:{
                Accept:"application/json"
            }
        })
        const weatherData=await weatherFetch.json()
        console.log(weatherData) 
        city.innerHTML=`${weatherData.name}`
        description.innerHTML=`${weatherData.weather[0].main}`
        tempImg.innerHTML=`<img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"/>`
        temp.innerHTML=`<h2>${Math.round(weatherData.main.temp-273)}°C</h2>`
        maxTemp.innerHTML=`${((weatherData.main.temp_max)-273).toFixed(2)}°C`
        minTemp.innerHTML=`${((weatherData.main.temp_min)-273).toFixed(2)}°C`


    }catch(error){
        console.log(error)
    }
}

