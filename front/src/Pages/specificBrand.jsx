import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Item from "../Components/Item/Item";
import imageData from "../Components/Assets/brandProduct/data_product.js"; // ✅ Use the right import
import axios from "axios";

const SpecificBrand = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/brands/name/${name}`
        );
        setProducts(res.data.Products); // ✅ Get the array
      } catch (error) {
        console.error("Failed to load products", error);
      }
    };
  
    fetchProducts();
  }, [name]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize text-center text-indigo-600">
        {name} Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No products found in this brand.
          </p>
        ) : (
          products.map((product) => (
            <div key={product.id} onClick={() => handleClick(product.id)}>
              <Item
                image={imageData[product.id] || imageData[1]} // fallback if index out of range
                name={product.product_name}
                new_price={product.price}
                old_price={
                  product.old_price
                    ? Number(product.old_price).toFixed(2)
                    : (product.price * 1.2).toFixed(2)
                }
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default SpecificBrand;
