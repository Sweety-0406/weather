import axios from "axios"
import Search from "../models/search.js";
import User from "../models/user.js";


export const searchWeather =  async (req, res) => {
    const city = req.params.city;
    const API_KEY = process.env.WEATHER_API_KEY;
    try {
        const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
        );
        const weatherData = response.data;

        const weather = await Search.create({
        userId: req.user.id,
        city,
        weatherData: JSON.stringify(weatherData),
        });
        const user = await User.findOne({
            where:{
                id: weather.userId
            }
        })
        res.json({weatherData,user});
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
}

export const allSearches =  async (req, res) => {
  const searches = await Search.findAll({ where: { userId: req.user.id } });
  res.json(searches);
}


