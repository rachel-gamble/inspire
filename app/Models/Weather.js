export class Weather
{
    constructor(data)
    {
        this.temperature = data.main.temp - 273.15;
        this.feelsLike = data.main.feels_like - 273.15;
        this.high = data.main.temp_max - 273.15;
        this.low = data.main.temp_min - 273.15;

        this.weatherIcon = data.weather[0].icon;
        this.weatherText = data.weather[0].description;
        // Capitalize each word
        this.weatherText = this.weatherText.split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(" ");
    }

    get CelsiusTemplate()
    {
        return `
        <div>
            <img src="http://openweathermap.org/img/wn/${this.weatherIcon}@2x.png" title="${this.weatherText}" />
        </div>
        <div class="d-flex flex-column text-center justify-content-center" title="Feels Like ${this.feelsLike.toFixed(1)}°C">
            <span class="fs-3">${this.temperature.toFixed(1)}°C</span>
            <span class="on-hover">${this.low.toFixed(0)}°C | ${this.high.toFixed(0)}°C</span>
        <div>
        `;
    }

    get FahrenheitTemplate()
    {
        return `
        <div>
            <img src="http://openweathermap.org/img/wn/${this.weatherIcon}@2x.png" title="${this.weatherText}" />
        </div>
        <div class="d-flex flex-column text-center justify-content-center" title="Feels Like ${_CtoF(this.feelsLike).toFixed(1)}°F">
            <span class="fs-3">${_CtoF(this.temperature).toFixed(1)}°F</span>
            <span class="on-hover">${_CtoF(this.low).toFixed(0)}°F | ${_CtoF(this.high).toFixed(0)}°F</span>
        <div>
        `;
    }
}

function _CtoF(deg)
{
    return (deg * 9 / 5) + 32;
}