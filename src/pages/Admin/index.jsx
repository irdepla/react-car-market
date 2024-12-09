import React, { useState } from "react";
import { apiClient } from "../../API/axios";

const Admin = () => {
  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    category: "",
    image: "",
    price: "",
    rating: "",
    stock: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      ...productInfo,
      price: parseFloat(productInfo.price), 
      rating: parseFloat(productInfo.rating),
      stock: parseInt(productInfo.stock, 10), 
    };

    console.log("Formatted Data:", formattedData);

    try {
      const res = await apiClient.post("/products", formattedData);
      console.log("Response:", res);
      setProductInfo({
        name: "",
        description: "",
        category: "",
        image: "",
        price: "",
        rating: "",
        stock: "",
      });
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
    }
  };

  return (
    <>
      <div className="wrapper w-[300px] m-auto">
        <p>{productInfo.price}</p>
        <h1 className="text-3xl text-center ">Admin Panel</h1>
        <form
          id="name"
          className="form__wrapper flex flex-col gap-3 mt-4"
          onSubmit={handleSubmit}
          action="name"
        >
          <input
            value={productInfo.name}
            onChange={(e) => {
              setProductInfo((prev) => ({ ...prev, name: e.target.value }));
            }}
            className="border p-2"
            type="text"
            placeholder="Name"
          />
          <input
            value={productInfo.description}
            onChange={(e) => {
              setProductInfo((prev) => ({
                ...prev,
                description: e.target.value,
              }));
            }}
            className="border p-2"
            type="text"
            placeholder="Description"
          />
          <input
            value={productInfo.category}
            onChange={(e) => {
              setProductInfo((prev) => ({ ...prev, category: e.target.value }));
            }}
            className="border p-2"
            type="text"
            placeholder="Category"
          />
          <input
            value={productInfo.image}
            onChange={(e) => {
              setProductInfo((prev) => ({ ...prev, image: e.target.value }));
            }}
            className="border p-2"
            type="file"
            placeholder="Image"
          />
          <input
            value={productInfo.price}
            onChange={(e) => {
              setProductInfo((prev) => ({ ...prev, price: e.target.value }));
            }}
            className="border p-2"
            type="number"
            placeholder="Price"
          />
          <input
            value={productInfo.rating}
            onChange={(e) => {
              setProductInfo((prev) => ({ ...prev, rating: e.target.value }));
            }}
            className="border p-2"
            type="number"
            placeholder="Rating"
          />
          <input
            value={productInfo.stock}
            onChange={(e) => {
              setProductInfo((prev) => ({ ...prev, stock: e.target.value }));
            }}
            className="border p-2"
            type="number"
            placeholder="Stock"
          />
          <button
            type="submit"
            className="rounded bg-[#3563E9] py-[10px] px-5 text-white text-base font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;
