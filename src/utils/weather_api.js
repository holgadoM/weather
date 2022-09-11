const fetch = require('node-fetch')

require('dotenv').config({path:'./.env'})

const key = process.env.WEATHER_KEY

const getWeather = async (lat, lng)=>{
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${key}`
    try {

        const response = await fetch(url);
        const data = await response.json()
        return data
    } catch (error) {
        return {'msg':'we could not get weather information'}
    }
}

const getExtendedForecast = async (lat, lng)=>{
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&cnt=5&appid=${key}`
    try {
        const response = await fetch(url);
        const data = await response.json()
        return data
    } catch (error) {
        return {'msg':'we could not get extended forecast'}
    }
}

const getCityInformation = async (city)=>{
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`
    try {
        const response = await fetch(url);
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return {'msg':'we could not get weather information'}
    }
}

module.exports = {
    getWeather, 
    getCityInformation,
    getExtendedForecast
}