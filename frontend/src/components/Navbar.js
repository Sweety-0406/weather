
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const logoutHandler = async ()=>{
    try {
      localStorage.removeItem("token"); 
      toast.success("Successfully logged out.")
      navigate('/login')
    } catch (error) {
      toast.error("Something went wrong.")
    }
  }
  return (
    <nav className="fixed w-full bg-black bg-opacity-70 text-black border-b-2 border-zinc-500">
      <div className="container mx-auto px-4 py-3 flex justify-between  items-center">
        <div className="text-3xl font-extrabold bg-gradient-to-r to-green-600 from-sky-600 bg-clip-text text-transparent">
          Weather
        </div>


        {token == null ? (
          <div className="flex space-x-4">
            <button
              onClick={()=>navigate('/')}
              className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
            >
              Login
            </button>
            <button
              onClick={()=>navigate('/register')}
              className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded"
            >
              Register
            </button>
          </div>
        ):(
          <button
            onClick={logoutHandler}
            className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded"
          >
            Logout
          </button>
        )
        }
      </div>
    </nav>
  );
};

export default Navbar;
