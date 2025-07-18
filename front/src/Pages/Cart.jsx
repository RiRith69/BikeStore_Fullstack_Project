import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import imageMap from "../Components/Assets/productImages/imageMap";
import ABAQR from "../Components/Payment/ABAQR.png";
import ACQR from "../Components/Payment/ACQR.png";
import Address from "../Components/Address/Address";
import OnlinePaymentModal from "../Components/Payment/Payment";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [address, setAddress] = useState(null);
  const [showAddress, setShowAddress] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showQROnly, setShowQROnly] = useState(false);


  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = 4;
        const res = await axios.get(`http://localhost:4000/api/cart/${userId}`);

        const cart = res.data;
        if (cart && cart.Products) {
          const formattedProducts = cart.Products.map((product) => ({
            id: product.id,
            name: product.product_name,
            image:
              imageMap[product.id] && imageMap[product.id][0]
                ? imageMap[product.id][0]
                : "/default-image.jpg",
            size: product.size || "N/A",
            offerPrice: product.price,
            quantity: product.orderProduct ? product.orderProduct.quantity : 1,
          }));
          setProducts(formattedProducts);
        }
      } catch (error) {
        console.error("Error fetchCart:", error);
      }
    };
    fetchCart();
  }, []);

  const { subtotal, tax, total } = useMemo(() => {
    const subtotal = products.reduce(
      (sum, product) => sum + product.offerPrice * product.quantity,
      0
    );
    const tax = subtotal * 0.02;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  }, [products]);

  const updateQuantity = async (index, newQuantity) => {
    const quantity = Math.max(1, Math.min(99, Number(newQuantity) || 1));
    const productId = products[index].id;

    try {
      await axios.put(`http://localhost:4000/api/cart/${productId}`, {
        quantity,
        userId: 4,
      });
      setProducts((prev) => {
        const copy = [...prev];
        copy[index] = { ...copy[index], quantity };
        return copy;
      });
    } catch (error) {
      console.error("Error at update Function: ", error);
    }
  };

  const removeProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/cart/${id}`, {
        data: { userId: 4 },
      });
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error at delete function: ", error);
    }
  };

  const handlePlaceOrder = async () => {
    // 1. Cart empty check
    if (products.length === 0) {
      alert("Your cart is empty. Please add some products before placing an order.");
      return;
    }
  
    // 2. Address check
    if (!address) {
      alert("Please choose a delivery address.");
      return;
    }
  
    // 3. Determine order status based on payment method
    if ( paymentMethod === "Online Payment") {
      setShowPaymentModal(true);
      return;
    }
    await completeOrder("Pending");
  }

  const completeOrder = async (orderStatus) => {
    const orderPayload = {
      address,
      items: products,
      paymentMethod,
      orderStatus,
      userId: 4,
    };
  
    try {
      await axios.post("http://localhost:4000/api/orders", orderPayload);
  
      await axios.put("http://localhost:4000/api/cart/status", {
        newStatus: orderStatus,
      });
  
      alert(
        `Order placed successfully! Your payment method is "${paymentMethod}". Status: ${orderStatus}`
      );
      setProducts([]);
      setAddress(null);
      setPaymentMethod("Cash On Delivery");
      setShowPaymentModal(false);
      setSelectedBank("");
      setAgreeToTerms(false);
    } 
    catch (error) {
      console.error("Order failed:", error);
      alert("Order failed. Please try again.");
    }
  };
  

  return (
    <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto gap-8">
      {/* LEFT: Cart Items */}
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl font-semibold mb-8 text-center">Shopping Cart</h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
              <p className="text-left">Product Details</p>
              <p className="text-center">Quantity</p>
              <p className="text-center">Subtotal</p>
            </div>
            {products.map((product, index) => (
              <div
                key={product.id}
                className="grid grid-cols-[2fr_1fr_1fr] items-center py-4 border-b border-gray-200 last:border-none relative"
              >
                <button
                  onClick={() => removeProduct(product.id)}
                  className="absolute top-2 right-2 text-teal-500 hover:text-teal-700 text-xl font-bold"
                  aria-label="Remove product"
                >
                  ×
                </button>

                <div className="flex items-center gap-4 md:gap-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 md:w-24 md:h-24 border rounded object-contain"
                  />
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-500">Size: {product.size}</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="flex items-center rounded overflow-hidden border">
                    <button
                      className="bg-gray-100 px-3 py-1 hover:bg-gray-200 transition disabled:opacity-50"
                      onClick={() => updateQuantity(index, product.quantity - 1)}
                      disabled={product.quantity <= 1}
                    >
                      −
                    </button>
                    <span className="px-4 py-1">{product.quantity}</span>
                    <button
                      className="bg-gray-100 px-3 py-1 hover:bg-gray-200 transition"
                      onClick={() => updateQuantity(index, product.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-center font-medium text-gray-800">
                  ${(product.offerPrice * product.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </>
        )}

        <button className="flex items-center mt-8 gap-2 text-indigo-500 hover:underline">
          <svg
            width="15"
            height="11"
            fill="none"
            viewBox="0 0 15 11"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1"
              stroke="#615fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Continue Shopping
        </button>
      </div>

      {/* RIGHT: Order Summary */}
      <div className="max-w-[360px] w-full bg-gray-50 p-5 border rounded-lg shadow sticky top-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Order Summary</h2>
        <hr className="mb-4" />
        <div className="text-sm mb-4">
          <p className="font-medium uppercase">Delivery Address</p>
          <div className="relative mt-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">
                {address ? (
                  address.province === "Phnom Penh" ? (
                    `Selected: Phnom Penh, Khan ${address.khan}, Street ${address.streetNo}`
                  ) : (
                    `Selected: ${address.district}, ${address.province}`
                  )
                ) : (
                  "No address found"
                )}
              </span>

              <button
                onClick={() => setShowAddress(!showAddress)}
                className="text-indigo-500 hover:underline"
              >
                Change
              </button>
            </div>
            {showAddress && (
              <div className="mt-2">
                <Address onSave={(add) => {
                  setAddress(add);
                  setShowAddress(false);
                }} />
              </div>
            )}
          </div>

          <p className="font-medium uppercase mt-6">Payment Method</p>
          <select
            className="w-full border mt-2 rounded px-2 py-2"
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Cash On Delivery">Cash On Delivery</option>
            <option value="Online Payment">Online Payment</option>
          </select>
        </div>
        {showPaymentModal && (
          <OnlinePaymentModal
            products={products}
            selectedBank={selectedBank}
            setSelectedBank={setSelectedBank}
            agreeToTerms={agreeToTerms}
            setAgreeToTerms={setAgreeToTerms}
            onCancel={(type) => {
              if (type === "showQR") {
                setShowQROnly(true);
              } else {
                setShowPaymentModal(false);
              }
            }}
            showQR={showQROnly}
            total={total}
            qrImage={
              selectedBank === "ABA"
                ? ABAQR
                : selectedBank === "KHQR"
                ? ACQR
                : selectedBank === "ACLEDA"
                ? ACQR
                : ABAQR
            }
          />
        )}
        <hr className="my-4" />
        <div className="space-y-2 text-gray-600">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (2%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-3">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button
          onClick={handlePlaceOrder}
          className="w-full mt-6 py-3 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;