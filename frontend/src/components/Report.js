import React from 'react';

const Report = ({ weatherData }) => {
    return (
        <div className="bg-blue-100 mt-4 p-6 rounded-lg shadow-lg max-w-sm mx-auto text-center">
            <h3 className="text-green-500 text-4xl font-semibold mb-4">Weather Report</h3>
            <p className="text-xl mb-2 ">
                <strong className='text-sky-500'>Search By:</strong> {weatherData.user.username}
            </p>
            <p className="text-xl mb-2 ">
                <strong className='text-sky-500'>City:</strong> {weatherData.weatherData.location.name}
            </p>
            <p className="text-xl mb-2 ">
                <strong className='text-sky-500'>Temperature:</strong> {weatherData.weatherData.current.temperature}°C
            </p>
            <p className="text-xl mb-2 ">
                <strong className='text-sky-500'>Humidity:</strong> {weatherData.weatherData.current.humidity}%
            </p>
            <p className="text-xl mb-2 ">
                <strong className='text-sky-500'>Pressure:</strong> {weatherData.weatherData.current.pressure}Pa
            </p>
            <p className="text-xl mb-2 ">
                <strong className='text-sky-500'>Condition:</strong> {weatherData.weatherData.current.weather_descriptions}
            </p>
            <img
                src={weatherData.weatherData.current.weather_icons[0]} 
                alt={weatherData.weatherData.current.weather_descriptions}
                className="w-24 h-24 object-cover mx-auto"
            />
        </div>
    );
};



export default Report;
