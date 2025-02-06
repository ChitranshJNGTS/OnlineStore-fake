import React from 'react'
import { NavLink } from 'react-router-dom'
import Signup from './Signup'

const Login = () => {
  return (
    <>
      
      <div className=' flex justify-center  mt-36 mb-36'>
        <div className="w-1/2 flex flex-col border-black justify-center items-center p-8 bg-white text-black shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          <input
            type="email"
            placeholder="Enter Email"
            className="p-3 w-3/4 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="p-3 w-3/4 mb-4 border border-gray-300 rounded"
          />
          <button className="w-3/4 p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Login</button>
          <p className="mt-4 text-sm text-gray-500">New to our store?
            <span 
          > <NavLink to="Signup" className={"text-blue-600 cursor-pointer"}>Create an account</NavLink></span></p>
        </div>


        {/* <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-blue-600 text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 w-3/4 mb-4 border border-gray-300 rounded bg-white text-black"
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="p-3 w-3/4 mb-4 border border-gray-300 rounded bg-white text-black"
          />
          <input
            type="password"
            placeholder="Create Password"
            className="p-3 w-3/4 mb-4 border border-gray-300 rounded bg-white text-black"
          />
          <button className="w-3/4 p-3 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition">Sign Up</button>
        </div> */}
      </div>

    </>
  )
}

export default Login
