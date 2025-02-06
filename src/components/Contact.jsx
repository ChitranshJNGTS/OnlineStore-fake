import React from 'react'


export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Get in Touch</h3>
              <p className="text-gray-600 mt-2">Feel free to reach out to us through the following:</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  📍 <span className="ml-2">Malviya Nagar, Indore</span>
                </li>
                <li className="flex items-center text-gray-600">
                  📧 <span className="ml-2">contact@yourwebsite.com</span>
                </li>
                <li className="flex items-center text-gray-600">
                  📞 <span className="ml-2">+91 9876543210</span>
                </li>
              </ul>
            </div>
            
            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input type="text" className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input type="email" className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200" placeholder="Your Email" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
            </form>
          </div>
        </div>
      </div>
  
    );
}