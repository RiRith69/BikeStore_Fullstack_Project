import axios from "axios";
import { useState } from "react";

export default function ProductForm() {
  const [form, setForm] = useState({
    product_name: "",
    model_year: "",
    price: "",
    is_available: false,
    CategoryId: "",
    BrandId: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const finalValue = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: finalValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:4000/api/products", // ✅ correct endpoint
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`, // include auth token if needed
          },
        }
      );
      alert("Product created!");
    } catch (error) {
      console.error("Error creating product:", error.message);
      alert("Failed to create product.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 space-y-4 bg-white shadow rounded"
    >
      <h2 className="text-lg font-bold">Add Product</h2>

      <input
        type="text"
        name="product_name"
        placeholder="Product Name"
        value={form.product_name}
        onChange={handleChange}
        className="w-full border p-2"
      />

      <input
        type="number"
        name="model_year"
        placeholder="Model Year"
        value={form.model_year}
        onChange={handleChange}
        className="w-full border p-2"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        className="w-full border p-2"
      />

      <label className="block">
        <input
          type="checkbox"
          name="is_available"
          checked={form.is_available}
          onChange={handleChange}
          className="mr-2"
        />
        Available
      </label>

      <input
        type="text"
        name="CategoryId"
        placeholder="Category ID"
        value={form.CategoryId}
        onChange={handleChange}
        className="w-full border p-2"
      />

      <input
        type="text"
        name="BrandId"
        placeholder="Brand ID"
        value={form.BrandId}
        onChange={handleChange}
        className="w-full border p-2"
      />

      <button
        type="submit"
        className="bg-teal-600 text-white px-4 py-2 rounded"
      >
        Create Product
      </button>
    </form>
  );
}
