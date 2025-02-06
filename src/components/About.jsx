import React from 'react'

export default function About() {
    return (
        <>

            <div
                className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8 animate-fadeInUp"
                style={{ animation: "fadeInUp 1s ease-in-out" }}
            >
                <h1 className="text-4xl font-bold text-center text-indigo-600 mb-4">About Our Store</h1>
                <p className="text-lg text-gray-700 text-center mb-6">
                    Welcome to our online store, your one-stop shop for quality products at great prices.
                </p>

                <div className="flex items-center justify-center space-x-6 mt-6">
                    <div className="p-4 bg-indigo-500 text-white rounded-lg transform transition duration-500 hover:scale-110">
                        <h2 className="text-xl font-semibold">Quality Products</h2>
                        <p className="text-sm">We offer only the best and most reliable products.</p>
                    </div>
                    <div className="p-4 bg-green-500 text-white rounded-lg transform transition duration-500 hover:scale-110">
                        <h2 className="text-xl font-semibold">Fast Shipping</h2>
                        <p className="text-sm">Get your orders delivered quickly and safely.</p>
                    </div>
                    <div className="p-4 bg-red-500 text-white rounded-lg transform transition duration-500 hover:scale-110">
                        <h2 className="text-xl font-semibold">24/7 Support</h2>
                        <p className="text-sm">Our team is always ready to assist you.</p>
                    </div>
                </div>
            </div>



            <div className="min-h-screen flex items-center mt-10 mb-10 justify-center bg-gradient-to-r from-green-400 to-blue-500 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-3xl transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Welcome to Our Online Store</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          An online store is a digital platform that allows businesses to sell products and services over the Internet. It provides a seamless and efficient way for customers to browse, select, and purchase items from the comfort of their homes. Online stores offer various features such as product listings, secure payment gateways, and customer reviews to enhance the shopping experience.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Rights of an Online Store</h3>
        <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
          <li>Right to conduct business online securely.</li>
          <li>Right to protect customer data and privacy.</li>
          <li>Right to set pricing and promotions.</li>
          <li>Right to provide customer support and resolve disputes.</li>
        </ul>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Benefits of Using React & Tailwind CSS</h3>
        <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
          <li>Fast and dynamic UI development with React.</li>
          <li>Highly customizable and responsive designs with Tailwind CSS.</li>
          <li>Seamless user experience with smooth transitions and effects.</li>
          <li>Improved performance with lightweight components.</li>
        </ul>
      </div>
    </div>


















       
        </>
    );
}