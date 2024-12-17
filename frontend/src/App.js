import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterFrom';
import WeatherForm from './components/WeatherForm';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import weatherBg from './assets/weather-bg.jpg';

const App = () => {
  return (
      <div
      style={{
        backgroundImage: `url(${weatherBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }} 
      className='min-h-screen  '>
        <Router >
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<WeatherForm />} />
        </Routes>
      </Router>
      <Toaster />
      </div>
  );
};

export default App;
