import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false)
            })
            .catch((error) => console.error("error Fetching data:", error))
    }, []);



    return (

        <>
            <section class="  bg-[url('https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/21c72584989b09a9.jpg?q=20')]   bg-blue-400 text-white mt-8 text-center py-20">


                <button class="mt-4 bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">Shop Now</button>
            </section>

            <nav className="bg-blue-100 shadow-md mt-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-3">

                        {/* Navbar Menu Items */}
                        <ul className="hidden md:flex  space-x-6">
                            {["Business & Services", "Store", "Creative", "Community", "Blog", "All Templates", "Blank Templates"].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden text-blue-600 text-2xl">☰</button>
                    </div>
                </div>
            </nav>





            <div className=" font-serif flex justify-center font-extrabold font text-4xl mt-5"><h1 className=' '>PICK THE ITEM YOU WANT</h1> </div>
            <div className="flex items-center justify-center mt-4 ">
                <div className="border-2 border-blue-500 w-1/2 flex items-center justify-center p-2 rounded-full shadow-lg shadow-blue-500/50">
                    <input
                        type="text"
                        aria-label="search"
                        className="w-full p-2 outline-none bg-transparent text-black placeholder-gray-500"
                        placeholder="Type here..."
                    />
                </div>
            </div>

            <h3 className="text-2xl font-bold mt-6 text-gray-800 text-center mb-8">
                Featured Products
            </h3>

            <section className=" min-h-screen w-screen bg-gray-100 p-6">

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {product.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white p-4 shadow-lg rounded-lg transform transition duration-500 hover:scale-105"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-40 object-contain mb-4"
                            />
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <p className="text-gray-600">${product.price}</p>
                            <button className="mt-4 w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition">
                                Add to Cart
                            </button>
                        </div>
                    ))}

                </div>
            </section>
            <div className="  lg:grid-cols-4 gap-6 min-w-full mt-6" >
                <div className="h-64 bg-blue-500 mb-10 shadow-md hover:scale-105 bg-[url('https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/32a67c6029439be8.jpg?q=20')] bg-contain bg-no-repeat bg-center mx-1 hover:shadow-xl text-white text-xl 
                hover:-translate-y-1 transition duration-300 ease-in-out">
                </div>
                <div className="h-64 bg-blue-500 mb-10 shadow-md hover:scale-105 bg-[url('https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/9c75af04c3fd7192.jpg?q=20')] bg-contain bg-no-repeat bg-center mx-1 hover:shadow-xl text-white text-xl 
                hover:-translate-y-1 transition duration-300 ease-in-out">
                </div>
                <div className="h-64 mb-10 shadow-md hover:scale-105 bg-[url('https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/5b9fccc383f1f498.jpg?q=20')] bg-contain bg-no-repeat bg-center mx-1 hover:shadow-xl text-white text-xl 
                hover:-translate-y-1 transition duration-300 ease-in-out">
                </div>
            </div>














        </>
    );
}