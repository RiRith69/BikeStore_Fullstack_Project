import Item from "../Components/Item/Item.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
// import imageArray from "../Components/Assets/image.js";
import { useNavigate } from "react-router-dom";
// import imageData from "../Components/Assets/brandProduct/data_product.js";
import imageArray from "../Components/Assets/image.js";
export default function BrandList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/brands`);
      setProducts(res.data); // expecting brands with products included
    } catch (err) {
      console.error("Failed to fetch brands:", err.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize text-center text-indigo-600">
        All Brands
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No brands available.
          </p>
        ) : (
          products.map((brand) =>
            brand.Products.map((product, index) => (
              <div
                key={product.id || index}
                onClick={() => handleClick(product.id)}
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                <Item
                  key={product.id}
                  image={imageArray[product.id]}
                  name={product.product_name}
                  price={product.price}
                />
              </div>
            ))
          )
        )}
      </div>
    </div>
  );
}
