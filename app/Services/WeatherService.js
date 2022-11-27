import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js";

class WeatherService {
    async getWeather() {
        const res = await sandboxApi.get('weather')
        const weatherData = new Weather(res.data)
        console.log('the res', res.data, 'my {New} weather object', weatherData);
        appState.weather = [...appState.weather, weatherData]

    }
    toggleTemp() {
        appState.fahrenheit = !appState.fahrenheit
        console.log('toggle weather type', appState.fahrenheit);
    }
}


export const weatherService = new WeatherService()