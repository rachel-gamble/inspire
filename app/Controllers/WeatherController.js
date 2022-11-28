import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Weather } from "../Models/Weather.js";


function _drawWeather() {
    let template = ''
    const weatherArray = appState.weather
    weatherArray.forEach(w => template += appState.fahrenheit ? w.FahrenheitTemplate : w.CelsiusTemplate)
    let weather = appState.weather
    // if (weather.bool == true) {
    //     w.FahrenheitTemplate
    // } else {
    //     w.CelsiusTemplate
    // }
    document.getElementById('weather').innerHTML = template
}

export class WeatherController {
    constructor() {
        this.getWeather()
        appState.on('weather', _drawWeather)
        appState.on('fahrenheit', _drawWeather)
        _drawWeather()
    }
    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            window.Error('something went wrong with the weather')
        }
    }
    toggleTemp() {
        weatherService.toggleTemp()
    }
}