import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sandboxApi } from "../Services/AxiosService.js"

function _saveTemp() {
    window.localStorage.setItem("inspire_celsius", appState.celsius);
}

class WeatherService {
    constructor() {
        const loadedTemp = window.localStorage.getItem("inspire_celsius");
        if (loadedTemp) {
            appState.celsius = loadedTemp === "true" ? true : false;
        }
    }

    async getWeather() {
        const res = await sandboxApi.get("weather");
        const newWeather = new Weather(res.data);
        appState.weather = newWeather;
    }

    toggleTemp() {
        appState.celsius = !appState.celsius;
        _saveTemp();
    }
}

export const weatherService = new WeatherService();