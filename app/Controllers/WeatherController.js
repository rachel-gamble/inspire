import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather()
{
    const weatherTemplate = appState.celsius ? appState.weather.CelsiusTemplate : appState.weather.FahrenheitTemplate;
    document.getElementById("weather").innerHTML = weatherTemplate;
}

export class WeatherController
{
    constructor()
    {
        appState.on("weather", _drawWeather);
        appState.on("celsius", _drawWeather);
        weatherService.getWeather();
    }

    toggleTemp()
    {
        try
        {
            weatherService.toggleTemp();
        }
        catch(error)
        {
            console.error("[WEATHER UNIT TOGGLE ERROR]", error.message);
            Pop.toast(error.message, "error");
        }
    }
}