import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import imageMap from "../Components/Assets/productImages/imageMap.js";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [thumbnail, setThumbnail] = useState("");
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/products/${id}`);
        const productData = res.data;

        const productWithImg = {
          ...productData,
          images: imageMap[productData.id] || [],
        };

        setProduct(productWithImg);

        if (productWithImg.images.length > 0) {
          setThumbnail(productWithImg.images[0]);
        } else {
          setThumbnail("https://via.placeholder.com/500");
        }
        const userId = 4;
        const cartRes = await axios.get(`http://localhost:4000/api/cart/${userId}`);
        const cartData = cartRes.data;

        const productExists = cartData.Products.some(
          (p) => String(p.id) === String(id)
        );

        setInCart(productExists);
      } catch (error) {
        console.error("Error loading product or cart:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleClick = async () => {
    if (inCart) {
      try {
        await axios.delete(`http://localhost:4000/api/cart/${product.id}`)
      }
      catch (error) {
        console.error("Error handleClick 1: ", error);
      }
      console.log(`Remove from cart: ${product?.product_name}`);
      setInCart(false);
    } 
    else {
      try {
        await axios.put("http://localhost:4000/api/cart", {
          userId: 4,
          productID: id,
          quantity: 1,
        });
      }
      catch (error) {
        console.error("Error handleClick 2: ", error);
      }
      console.log(`Added to cart: ${product?.product_name}`);
      setInCart(true);
    }
  };

  return (
    product && (
      <div className="max-w-6xl w-full px-6">
        <div className="flex flex-col md:flex-row gap-16 mt-4">
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              {product?.images?.length > 0 ? (
                product.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setThumbnail(image)}
                    className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))
              ) : (
                <p>No image avialable</p>
              )}
            </div>

            <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
              <img
                src={thumbnail}
                alt="Selected product"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="text-sm w-full md:w-1/2">
            <h1 className="text-3xl font-medium">{product.product_name}</h1>

            <div className="flex items-center gap-0.5 mt-1">
              {Array(5)
                .fill("")
                .map((_, i) =>
                  product.rating > i ? (
                    <svg
                      key={i}
                      width="14"
                      height="13"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                        fill="#615fff"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="13"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z"
                        fill="#615fff"
                        fill-opacity="0.35"
                      />
                    </svg>
                  )
                )}
              <p className="text-base ml-2">({product.rating})</p>
            </div>

            <div className="mt-6">
              <p className="text-gray-500/70 line-through">
                Price: $
                {product.oldprice
                  ? Number(product.old_price).toFixed(2)
                  : (product.price * 1.2).toFixed(2)}
              </p>
              <p className="text-2xl font-medium">Price: ${product.price}</p>
              <span className="text-gray-500/70">(inclusive of all taxes)</span>
            </div>

            <p className="text-base font-medium mt-6">About Product</p>
            <ul className="list-disc ml-4 text-gray-500/70">
              {product?.description?.map((desc, index) => (
                <li key={index}>{desc}</li>
              )) || <li>No description available.</li>}
            </ul>

            <div className="flex items-center mt-10 gap-4 text-base">
              <button
                onClick={handleClick}
                className={`w-full py-3.5 cursor-pointer font-medium
                         bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition 
                            ${
                              inCart
                                ? "font-semibold text-teal-400"
                                : "text-gray-800/80"
                            }
                            `}
              >
                {inCart ? "Added" : "Add to Cart"}
              </button>
              <button className="w-full py-3.5 cursor-pointer font-medium bg-teal-400 text-white hover:bg-teal-600 transition">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetail;
