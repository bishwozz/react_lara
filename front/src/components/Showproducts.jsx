import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`);
        setProducts(response.data);
    };

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/product/${id}`);
        getAllProducts();
    };

    return (
        <div>
            <h1 className="py-4 text-xl font-semibold text-center">Products</h1>
            <div className="d-grid gap-2">
                <Link
                    to="/create"
                    className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                    <span
                        className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

                    <span
                        className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                    <span
                        className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                    <span
                        className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                    <span
                        className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                    <span
                        className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                         className="bi bi-plus relative" viewBox="0 0 16 16" id="IconChangeColor">
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                            id="mainIconPathAttribute"></path>
                    </svg>
                    <span className="relative">Add product</span>
                </Link>
            </div>
            <br/>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden"></div>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                    className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">Description</th>
                                    <th scope="col" class="px-6 py-3">Price</th>
                                    <th scope="col" class="px-6 py-3">Stock</th>
                                    <th scope="col" class="px-6 py-3">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {products.map((product) => (
                                    <tr key={product.id} className="bg-white border-b dark:bg-black dark:border-gray-700">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.description}</td>
                                        <td className="mb-2">{product.price}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.stock}</td>
                                        <td className="grid grid-cols-1 gap-1">
                                            <Link to={`/edit/product/${product.id}`} className="col-start-1">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="w-7 h-7 mr-2 text-yellow-300 hover:text-yellow-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                    />
                                                </svg>
                                            </Link>
                                            <button onClick={() => deleteProduct(product.id)} className="col-start-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="w-7 h-7 text-red-400 hover:text-red-600"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;
