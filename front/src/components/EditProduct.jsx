import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const endpoint = "http://localhost:8000/api/product";
const EditProduct = () => {
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}/${id}`, {
            description: description, price: price, stock: stock
        })
        navigate('/')
    }
    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}/${id}`)
            setDescription(response.data.description)
            setPrice(response.data.price)
            setStock(response.data.stock)
        }
        getProductById()
    }, [])
    return (
        <div>
            <h1 className="text-lg mb-6 mt-6">Edit Product</h1>
            <form onSubmit={update} className="mx-auto">
                <div className="mb-6">
                    <label htmlFor="description"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="text"
                           id="description"
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           required/>
                </div>
                <div className="grid grid-cols-6 gap-2">
                    <div className="col-start-1 col-end-4">
                        <label htmlFor="price"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" id="price"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                               required/>
                    </div>
                    <div className="col-start-4 col-end-7">
                        <label htmlFor="stock"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                        <input value={stock} onChange={(e) => setStock(e.target.value)} type="number" id="stock"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                               required/>
                    </div>
                </div>

                <br/>
                <button type="submit"
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
                    <span className="relative">Update</span>
                </button>
            </form>
        </div>
    );

}


export default EditProduct;
