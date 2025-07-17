import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Item from "../Components/Item/Item";
import imageData from "../Components/Assets/brandProduct/data_product.js";
import axios from "axios";

const SpecificBrand = () => {
  const navigate = useNavigate();
  const { name } = useParams(); // matches /name/:name route
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
        setProducts(res.data);
        console.log("Hello : ", res.data);
      } catch (error) {
        console.error("Failed to load products", error);
      }
    };

    fetchProducts();
  }, [name]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <Item
          key={product.id}
          image={imageData[product.id]} // adjust if your key is different
          name={product.product_name}
          price={product.price}
          onClick={() => handleClick(product.id)}
        />
      ))}
    </div>
  );
};

export default SpecificBrand;
