import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-300 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input type="text" placeholder="Enter your full name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input type="email" placeholder="Enter your email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input type="password" placeholder="Enter your password" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Confirm Password</label>
            <input type="password" placeholder="Confirm your password" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition" required />
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg transition-all shadow-lg hover:shadow-xl">Sign Up</button>
        </form>
        <p className="text-center text-gray-600 mt-4">Already have an account? <a href="#" className="text-blue-500 hover:underline">Log in</a></p>
      </div>
    </div>
    </>
  )
}

export default Signup
