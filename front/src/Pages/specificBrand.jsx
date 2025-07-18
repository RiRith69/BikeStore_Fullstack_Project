import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Item from "../Components/Item/Item";
import imageData from "../Components/Assets/brandProduct/data_product.js";
import axios from "axios";

const SpecificBrand = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:4000/api/brands/name/${name}`
        );

        console.log("API Response:", res.data); // Debugging

        if (res.data?.Products && Array.isArray(res.data.Products)) {
          // Ensure each product has required fields
          const validatedProducts = res.data.Products.map((product) => ({
            id: product.id || Math.random().toString(36).substring(2, 9),
            product_name: product.product_name || "Unnamed Product",
            price: product.price || 0,
            old_price: product.old_price || (product.price * 1.2).toFixed(2),
            image: product.image || "default", // Fallback image key
          }));

          setProducts(validatedProducts);
        } else {
          throw new Error("Invalid products data structure");
        }
      } catch (error) {
        console.error("Failed to load products", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [name]);

  // Get first image key from imageData as fallback
  const fallbackImage = Object.keys(imageData)[0] || null;

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        <p>Loading {name} products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10 text-center text-red-500">
        <p>Error loading products: {error}</p>
      </div>
    );
  }

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
          products.map((product) => {
            // Debug each product's data
            console.log("Rendering product:", product);

            return (
              <div
                key={product.id}
                onClick={() => handleClick(product.id)}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <Item
                  image={imageData[product.image] || imageData[fallbackImage]}
                  name={product.product_name}
                  new_price={product.price}
                  old_price={product.old_price}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SpecificBrand;
