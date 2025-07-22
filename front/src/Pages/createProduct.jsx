import axios from "axios";
import { useState } from "react";

export default function ProductForm() {
  const [form, setForm] = useState({
    product_name: "",
    model_year: "",
    price: "",
    is_available: "",
    CategoryId: "",
    BrandId: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.product_name ||
      !form.model_year ||
      !form.price ||
      !form.is_available ||
      !form.CategoryId ||
      !form.BrandId
    ) {
      alert("Please fill out all required fields");
      return;
    }
    const payload = {
      ...form,
      model_year: Number(form.model_year),
      price: Number(form.price),
      is_available: Boolean(form.is_available),
      CategoryId: Number(form.CategoryId),
      BrandId: Number(form.BrandId),
    };
    try {
      const res = await axios.post(
        "http://localhost:4000/api/products",
        payload
      );
      console.log("Product added:", res.data);
      alert("Product add successfully");
      setForm({
        product_name: "",
        model_year: "",
        price: "",
        is_available: "",
        CategoryId: "",
        BrandId: "",
      });
    } catch (err) {
      console.error("Error adding product", err);
      alert("Failed to add product");
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          name="product_name"
          value={form.product_name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Model Year:</label>
        <input
          type="number"
          name="model_year"
          value={form.model_year}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Is Available:</label>
        <select
          name="is_available"
          value={form.is_available}
          onChange={handleChange}
        >
          <option value="">Select availability</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>

      <div>
        <label>Category ID:</label>
        <input
          type="text"
          name="CategoryId"
          value={form.CategoryId}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Brand ID:</label>
        <input
          type="text"
          name="BrandId"
          value={form.BrandId}
          onChange={handleChange}
        />
      </div>

      <button type="submit" style={{ marginTop: "10px" }}>
        Add Product
      </button>
    </form>
  );
}
