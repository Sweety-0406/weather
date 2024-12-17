import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`,{username,password})
            const data = await response.data;
            localStorage.setItem('token', data.token);
            toast.success(response.data.message)
            navigate('/')
        } catch (error) {
            toast.error("Something went wrong.")
        }
    };

    return (
        <div className='bg-black min-h-screen bg-opacity-50'>
            <div className=' mx-auto max-w-md   pt-56 '>
                <div className='flex bg-gradient-to-r to-sky-200  from-green-200 flex-col border p-2 rounded-xl shadow-md shadow-slate-300'>
                <h2 className='flex justify-center border-b-2 border-sky-800 pb-2 text-sky-800 text-4xl font-serif font-bold'>Login</h2>
                
                <form className='flex border-b-2 border-sky-800 pb-2 flex-col my-3' onSubmit={handleLogin}>
                    <input className='mb-1 p-1 rounded-md border-[3px] border-sky-300  ' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Name" required />
                    <input className='mb-1 p-1 rounded-md border-[3px] border-sky-300  ' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <div>
                    <button className='flex mt-1 justify-start border border-sky-300 p-2 px-4 text-lg font-semibold rounded-md bg-blue-500 hover:bg-blue-600 ' type="submit">Login</button>
                    </div>
                </form>
                <div className='text-lg mt-1 mb-2 text-center text-black'>
                    <p>Don't have an account? <span onClick={()=>navigate('/register')} className='text-sky-800 hover:text-sky-700 hover:cursor-pointer font-bold '>Register</span></p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
