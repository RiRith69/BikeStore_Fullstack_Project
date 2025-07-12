import React, { useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import Item from "../Components/Item/Item";
import imageArray from "../Components/Assets/image";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ShopCategory = () => {

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  }
  const { categoryName} = useParams();
  const [products, setProducts] = useState([]);

  useEffect( () => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/products`);
        setProducts(res.data);
        console.log("Hello : ", res.data)
      }
      catch (error) {
        console.error("Failed to load products", error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  console.log("Fetched Product: ", products)
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize text-center text-indigo-600">
        {products.length} Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No products found in this category.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} onClick= {() => handleClick(product.id)}>
              <Item
                key={product.id}
                image={imageArray[product.id]}
                name={product.product_name}
                new_price={product.price}
                old_price={product.old_price ? Number(product.old_price).toFixed(2) : (product.price * 1.2).toFixed(2)}
                />
              </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
