class WeatherService {
    constructor() {
        this.API_KEY = "MY_API";
        this.BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
    }

    async getWeather(city) {
        const response = await fetch(
            `${this.BASE_URL}?q=${encodeURIComponent(city)}&appid=${this.API_KEY}&units=metric`
        );
        if (response.status === 401) {
            throw new Error("Invalid API key (401 Unauthorized)");
        }
        if (!response.ok) {
            throw new Error(`City "${city}" not found`);
        }
        const data = await response.json();
        return {
            city: data.name,
            temp: data.main.temp,
            condition: data.weather[0].description
        };
    }
}
const weatherService = new WeatherService();
//ui logic
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");
let searchHistory = [];
searchBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    resultDiv.textContent = "Loading...";
    resultDiv.className = "";
    try {
        const data = await weatherService.getWeather(city);
        const { temp, condition, city: cityName } = data;

        resultDiv.innerHTML = `
            <strong>${cityName}</strong><br/>
            🌡 Temperature: ${temp}°C<br/>
            🌥 Condition: ${condition}
        `;
        searchHistory = [...searchHistory, cityName];
        console.log("Search History:", searchHistory);
    } catch (error) {
        resultDiv.textContent = error.message;
        resultDiv.className = "error";
    }

});
