import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SpecificBrand from "./Pages/specificBrand.jsx";
import BrandList from "./Pages/Allbrand.jsx";
function AppContent() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login"; // 👈 Add more if needed

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<ShopCategory />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/" element={<BrandList />} />
        <Route path="/brands/:name" element={<SpecificBrand />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
