import React from "react";
import ProductForm from "../../Pages/ProductForm.jsx";
import { useUser } from "./../../Context/userContext.jsx"; // assuming you have this context set up

export default function AddProductPage() {
  const { user } = useUser();
  console.log("User info", user);
  if (!user) {
    return <div>Not log in</div>;
  }
  if (!user || (user.role !== "staff" && user.role !== "manager")) {
    return (
      <div className="p-8 text-center text-red-600 font-semibold">
        Access Denied — You do not have permission to add products.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Product</h1>
      <ProductForm />
    </div>
  );
}
