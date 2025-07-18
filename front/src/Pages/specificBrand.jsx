import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Item from "../Components/Item/Item";
import imageArray from "../Components/Assets/productImages/imageMap";
import axios from "axios";

const SpecificBrand = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (name === "allbrands" ) {
          const res = await axios.get("http://localhost:4000/api/brands/allbrands")
          console.log("Brand Products Response:", res.data);
          if (Array.isArray(res.data)) {
            setProducts(res.data);
          } else if (Array.isArray(res.data.Products)) {
            setProducts(res.data.Products);
          } else {
            throw new Error("Unexpected response format");
          }
        }
        else {
          const res = await axios.get(
            `http://localhost:4000/api/brands/name/${name}`
          );
          console.log("Brand Products Response:", res.data);
          if (Array.isArray(res.data)) {
            setProducts(res.data);
          } else if (Array.isArray(res.data.Products)) {
            setProducts(res.data.Products);
          } else {
            throw new Error("Unexpected response format");
          }
        }
      } catch (error) {
        console.error("Error loading brand products:", error);
        setError(error.message);
      }
    };

    fetchProducts();
  }, [name]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize text-center text-indigo-600">
        {name} Products
      </h1>

      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No products found in this brand.
            </p>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                onClick={() => handleClick(product.id)}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <Item
                  image={imageArray[product.id]?.[0]}
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
      )}
    </div>
  );
};

export default SpecificBrand;
