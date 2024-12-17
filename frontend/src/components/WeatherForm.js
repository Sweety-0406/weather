import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Report from './Report';
import axios from "axios"
import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast';

const WeatherForm = () => {
    const token = localStorage.getItem("token");
    const [weatherData, setWeatherData] = useState('')
    const navigate = useNavigate()
    const [city, setCity] = useState('');


    useEffect(() => {
        // const token = localStorage.getItem("token");
        if (!token) {
            navigate('/login'); 
        }
    }, [navigate]);


    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(process.env.REACT_APP_BACKEND_URL)
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather/:${city}`,
                {
                    headers: {
                      Authorization: `Bearer ${token}`, 
                    }
                }
            )
            console.log(response.data)
            if(response.data.weatherData.error){
                toast.error("Please give the correct city name!")
                setWeatherData('')
            }else{
                setWeatherData(response.data)
            }
        } catch (error) {
            toast.error("Something went wrong")
        }
    };

    return (
        <div className='bg-black min-h-screen px-4 bg-opacity-50 pt-32'>
            <div className='container mx-auto '>
                <div className='flex justify-center'>
                    <form className='flex gap-2' onSubmit={handleSubmit}>
                        <input 
                            className='mb-1 p-2 w-full sm:w-80  rounded-full border-[3px] border-sky-300  '
                            type="text" 
                            value={city} 
                            onChange={(e) => setCity(e.target.value)} 
                            placeholder="Enter city name"
                            required
                        />
                        <button className='  bg-sky-400 rounded-full p-[6px] px-4' type="submit">
                            <FaSearch />
                        </button>
                    </form>
                </div>
                {weatherData && (
                    <div>
                        <Report weatherData={weatherData}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherForm;
