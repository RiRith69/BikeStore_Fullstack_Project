import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Item from "../Components/Item/Item";
import imageArray from "../Components/Assets/productImages/imageMap";
import axios from "axios";

const SearchResult = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/products/search?query=${encodeURIComponent(query)}`);
        setResults(res.data);
      } catch (err) {
        console.error("Search failed:", err);
      }
    };
    fetchSearchResults();
  }, [query]);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-600">
        Search results for: <span className="italic">{query}</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        ) : (
          results.map((product) => (
            <div key={product.id} onClick={() => handleClick(product.id)}>
              <Item
                key={product.id}
                image={imageArray[product.id]?.[0] || ""}
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

export default SearchResult;
