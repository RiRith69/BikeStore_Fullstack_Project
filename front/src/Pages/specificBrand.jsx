import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Item from "../Components/Item/Item";
// import imageData from "../Components/Assets/brandProduct/data_product.js";
import imageData from "../Components/Assets/brandProduct/data_product.js";
import axios from "axios";
import imageArray from "../Components/Assets/image.js";

// Optional fallback image
const fallbackImage = "/default-product.png"; // Ensure this exists in your public folder

const SpecificBrand = () => {
  const { name } = useParams(); // URL param for brand name
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const fetchBrand = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(
          `http://localhost:4000/api/brands/name/${name}`
        );
        if (res.data && res.data.Products) {
          setProducts(res.data.Products);
        } else {
          setProducts([]);
        }
      } catch (err) {
        setError("Failed to fetch brand products. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBrand();
  }, [name]);

  if (loading) {
    return <div className="p-4 text-gray-700">Loading products...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize text-center text-indigo-600">
        {name} Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No products found for "{name}".
          </p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleClick(product.id)}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              <Item
                image={imageArray[product.id] || fallbackImage}
                name={product.product_name}
                price={product.price}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default SpecificBrand;
