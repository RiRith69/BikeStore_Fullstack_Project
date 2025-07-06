import React, { useState, useMemo } from "react";

const Cart = () => {
  const [showAddress, setShowAddress] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      image: '/product1.jpg',
      size: 'M',
      offerPrice: 19.99,
      quantity: 1
    },
    {
      id: 2,
      name: 'Product 2',
      image: '/product2.jpg',
      size: 'L',
      offerPrice: 29.99,
      quantity: 2
    },
  ]);

  const { subtotal, tax, total } = useMemo(() => {
    const subtotal = products.reduce(
      (sum, product) => sum + product.offerPrice * product.quantity,
      0
    );
    const tax = subtotal * 0.02;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  }, [products]);

  const updateQuantity = (index, newQuantity) => {
    const quantity = Math.max(1, Math.min(99, Number(newQuantity) || 1));
    setProducts((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], quantity };
      return copy;
    });
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto gap-8">
      {/* LEFT */}
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
                {/* Remove button at top right of product */}
                <button
                  onClick={() => removeProduct(product.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl font-bold"
                  aria-label="Remove product"
                >
                  ×
                </button>

                {/* Product Info */}
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

                {/* Quantity Controls */}
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

                {/* Subtotal */}
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

      {/* Summary */}
      <div className="max-w-[360px] w-full bg-gray-50 p-5 border rounded-lg shadow sticky top-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Order Summary</h2>
        <hr className="mb-4" />
        <div className="text-sm mb-4">
          <p className="font-medium uppercase">Delivery Address</p>
          <div className="relative mt-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">No address found</span>
              <button
                onClick={() => setShowAddress(!showAddress)}
                className="text-indigo-500 hover:underline"
              >
                Change
              </button>
            </div>
            {showAddress && (
              <div className="absolute top-10 left-0 bg-white border rounded shadow text-sm w-full z-10 mt-2">
                <p
                  onClick={() => setShowAddress(false)}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  New York, USA
                </p>
                <p
                  onClick={() => setShowAddress(false)}
                  className="p-2 text-indigo-500 hover:bg-indigo-50 text-center cursor-pointer"
                >
                  Add Address
                </p>
              </div>
            )}
          </div>
          <p className="font-medium uppercase mt-6">Payment Method</p>
          <select className="w-full border mt-2 rounded px-2 py-2">
            <option>Cash On Delivery</option>
            <option>Online Payment</option>
          </select>
        </div>
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
        <button className="w-full mt-6 py-3 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
