// import "./App.css";
// import Navbar from "./Components/Navbar/Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Shop from "./Pages/Shop";
// import ShopCategory from "./Pages/ShopCategory";
// import Product from "./Pages/Product";
// import Cart from "./Pages/Cart";
// import LoginSignup from "./Pages/LoginSignup";
// import Footer from "./Components/Footer/Footer";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Shop />} />
//           <Route path="/adults" element={<ShopCategory category="adults" />} />
//           <Route path="/kids" element={<ShopCategory category="kids" />} />
//           <Route path="/product" element={<Product />}>
//             <Route path=":productId" element={<Product />} />
//           </Route>
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<LoginSignup />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// import "./App.css";
// import Navbar from "./Components/Navbar/Navbar";
// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import Shop from "./Pages/Shop";
// import ShopCategory from "./Pages/ShopCategory";
// import Product from "./Pages/Product";
// import Cart from "./Pages/Cart";
// import LoginSignup from "./Pages/LoginSignup";
// import Footer from "./Components/Footer/Footer";

// // Inner AppContent to access route info
// function AppContent() {
//   const location = useLocation();
//   const hideLayout = location.pathname === "/login"; // only hide for /login

//   return (
//     <>
//       {!hideLayout && <Navbar />}
      
//       <Routes>
//         <Route path="/" element={<Shop />} />
//         <Route path="/adults" element={<ShopCategory category="adults" />} />
//         <Route path="/kids" element={<ShopCategory category="kids" />} />
//         <Route path="/product" element={<Product />}>
//           <Route path=":productId" element={<Product />} />
//         </Route>
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<LoginSignup />} />
//       </Routes>
      
//       {!hideLayout && <Footer />}
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <AppContent />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function AppContent() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login"; // 👈 Add more if needed

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/adults" element={<ShopCategory category="adults" />} />
        <Route path="/kids" element={<ShopCategory category="kids" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
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

