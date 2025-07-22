import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SpecificBrand from "./Pages/specificBrand.jsx";
import SearchResult from "./Pages/SearchResult.jsx";
import AddProductPage from "../src/Components/Form/addProduct.jsx";
import { UserProvider, useUser } from "./Context/userContext.jsx";

function AppContent() {
  const { login } = useUser();
  const location = useLocation();
  const hideLayout = location.pathname === "/login"; // 👈 Add more if needed
  useEffect(() => {
    login({ username: "testuser", role: "manager" }); // or role: "manager"
  }, []);
  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<ShopCategory />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/brands/:name" element={<SpecificBrand />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
