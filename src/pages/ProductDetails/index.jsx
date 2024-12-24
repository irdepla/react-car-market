import { meta } from "@eslint/js";

const API_BASE_URL = meta;

import React from "react";
import { apiClient } from "../../API/axios";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router";

const ProductDetails = () => {
  const id = useParams().id;
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getProducts(id) {

    try {
      setLoading(true);
      const res = await apiClient.get("products/" + id);
      console.log(res);

      setProduct(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error?.message || "something went wrong");
    }
  }

  useEffect(() => {
    getProducts(id);
  }, []);

  return (
    <section className="products__card mt-8">
      <div className="container">
        <div className="products__cards__wrapper flex justify-center">
          <div>
          <h1 className="text-2xl text-center">{product.name}</h1>
          </div>
          <div className=" flex items-center">
          <img className="mt-8" src={product.image} alt="" />
          <p className="flex flex-col gap-5">
            <span className="text-2xl">{product.description}</span>
            <span className="font-bold text-xl">
            ${product.price}
            </span>
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
