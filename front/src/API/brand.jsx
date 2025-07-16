import { useState, useEffect } from "react";
import axios from "axios";

export default function BrandList() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    axios
      .get("http://localhost:4000/api/brands")
      .then((res) => setBrands(res.data))
      .catch((err) => console.error(err));
  };

  const deleteBrand = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/brands/${id}`);
      fetchBrands();
    } catch (err) {
      console.log("Failed to delete brand");
    }
  };

  return (
    <div>
      <h2>Brands List</h2>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
            {brand.brand_name}
            <button onClick={() => deleteBrand(brand.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
