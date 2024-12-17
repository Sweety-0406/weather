// A simple API function to fetch weather data
export const fetchWeatherData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
        const data = await response.json();
        return {
            city: data.name,
            temperature: data.main.temp - 273.15, // Convert from Kelvin to Celsius
            condition: data.weather[0].description,
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};
