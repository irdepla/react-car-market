import { meta } from "@eslint/js";

const API_BASE_URL = meta

import React from 'react';
import { apiClient } from "../../API/axios";
import { useState, useEffect } from 'react'


const Card = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


    async function getProducts() {
        try {
            setLoading(true)
            const res = await apiClient.get("products")
            setProducts(res.data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts()
    }, []);
    

    return (
        <>
        <section className="products__card mt-8">
            <div className="container">
                <div className="products__cards__wrapper grid items-center  grid-cols-4 gap-8 ">
                    
                    {loading ? (<h1>Loading...</h1>) :
                        products.map((product) => (
                            <div key={product.id} className="products__card items-center w-[304px] p-6 rounded-[10px]">
                                <h2 className="flex justify-between items-center">
                                    <span className=" text-[#1A202C] font-bold text-xl">{product.name}</span>
                                    <img src="src\assets\Like.svg" alt="" />
                                </h2>
                                <img className=" w-[232px] h-[100px] object-cover mt-16 " src={product.image} alt="rasm" />
                                <img className="mt-16" src="src\assets\Spesification.svg" alt="" />
                                <p className="mt-6 text-xl font-bold ">${product.price}
                                    <span className=" first-letter:font-bold">/</span>
                                    <span className="text-sm font-bold text-[#90A3BF]">day</span>
                                    <button className="ml-6 py-[10px] px-4 rounded text-white bg-[#3563E9]">Rent Now</button>
                                </p>
                            </div>
                        ))
                    }
                </div>
                <button className="ml-[610px] mt-[67px] py-[10px] px-4 rounded text-white  bg-[#3563E9]">Show more car</button>
            </div>
        </section>
        </>
    );
}

export default Card;
