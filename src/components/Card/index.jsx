import { meta } from "@eslint/js";

const API_BASE_URL = meta;

import React from "react";
import { apiClient } from "../../API/axios";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store";
import { addProducts } from "../../store/productsSlice";
import { fetchProducts } from "../../service/productService";


const Card = () => {
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  const products = useSelector((store) => store.products)
  // console.log(products);
  

  // async function getProducts() {
  //   try {
  //     setLoading(true);
  //     const res = await apiClient.get("products?search=" + search);
  //     const products = res.data.data;
  //     dispatch(addProducts(products));
      
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setError(error?.message || "something went wrong");
  //   }
  // }
  

  // useEffect(() => {
  //   Aos.init({
  //     easing: "ease",
  //     offset: 200,
  //     duration: 300,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //   });
  //   getProducts();
  // }, [search]);

  // function handleSearch(e){
  //   setSearch(e.target.value)
  // }


  useEffect(() => {
    async function getProducts() {
      try {
        const products = await fetchProducts()
        dispatch(addProducts(products))        
      } catch (error) {
        console.log(error);
      }
    }
    getProducts()
  }, []);

  return (
    <>
      <section className="products__card mt-8">
        <div className="container">
      {/* <input onChange={handleSearch} className="border ml-3 mb-5 p-3 border-black" type="text" placeholder="Search something here" /> */}
          <div className="products__cards__wrapper grid items-center  grid-cols-4 gap-8 ">
            {error ? (
              <h1
                style={{ color: "red", fontSize: "32px", background: "black" }}
              >
                {error}
              </h1>
            ) : loading ? (
              <h1>Loading...</h1>
            ) : (
              products.map((item) =>
               (
                <div
                  key={item.id}
                  className="products__card items-center w-[304px] p-6 rounded-[10px]"
                  data-aos="fade"
                >
                  <h2 className="flex justify-between items-center">
                    <NavLink
                      className="flex justify-between"
                      to={"products-details/" + item.id}
                    >
                      <span className=" text-[#1A202C] font-bold text-xl">
                        {item.name}
                      </span>
                    </NavLink>
                    <img src="src\assets\Like.svg" alt="" />
                  </h2>
                  <img
                    className="px-[9px] object-cover mt-16 "
                    src={item.image}
                    alt="rasm"
                  />
                  <img
                    className="mt-16"
                    src="src\assets\Spesification.svg"
                    alt=""
                  />
                  <p className="mt-6 text-xl font-bold flex justify-between items-center">
                    ${item.price}
                    <span className=" first-letter:font-bold">/</span>
                    <span className="text-sm font-bold text-[#90A3BF]">
                      day
                    </span>
                    <button className="ml-6 py-[10px] px-4 rounded text-white bg-[#3563E9]">
                      Rent Now
                    </button>
                  </p>
                </div>
              ))
            )}
          </div>
          <button className="ml-[610px] mt-[67px] py-[10px] px-4 rounded text-white  bg-[#3563E9]">
            Show more car
          </button>
        </div>
      </section>
    </>
  );
};

export default Card;
