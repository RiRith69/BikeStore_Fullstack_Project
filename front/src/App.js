// // import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// // import Home from "./Pages/Home";
// // import ShopCategory from "./Pages/ShopCategory";
// // import ProductDetail from "./Pages/ProductDetail";
// // import Cart from "./Pages/Cart";
// // import LoginSignup from "./Pages/LoginSignup";
// // import Signup from "./Pages/Signup";
// // import Navbar from "./Components/Navbar/Navbar";
// // import Footer from "./Components/Footer/Footer";
// // // import BrandList from "./Pages/Allbrand.jsx";
// // import SpecificBrand from "./Pages/specificBrand.jsx";
// // function AppContent() {
// //   const location = useLocation();
// //   const hideLayout = location.pathname === "/login" || location.pathname === "/signup";

// //   return (
// //     <>
// //       {!hideLayout && <Navbar />}
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/category/:categoryName" element={<ShopCategory />} />
// //         <Route path="/product/:id" element={<ProductDetail />} />
// //         <Route path="/cart" element={<Cart />} />
// //         <Route path="/login" element={<LoginSignup />} />
// //         <Route path="/signup" element={<Signup/>} />

// //         <Route path="/brands/:name" element={<SpecificBrand />} />
// //         {/* <Route path="/name/:name" element={<SpecificBrand />} /> */}
// //       </Routes>
// //       {!hideLayout && <Footer />}
// //     </>
// //   );
// // }

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <AppContent />
// //     </BrowserRouter>
// //   );
// // }
// // App.use(cors({
// //   origin: 'http://localhost:3000', // allow frontend origin
// //   credentials: true
// // }));

// // export default App;

// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Home from "./Pages/Home";
// import ShopCategory from "./Pages/ShopCategory";
// import ProductDetail from "./Pages/ProductDetail";
// import Cart from "./Pages/Cart";
// import LoginSignup from "./Pages/LoginSignup";
// import Signup from "./Pages/Signup";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
// import SpecificBrand from "./Pages/specificBrand.jsx";

// function AppContent() {
//   const location = useLocation();
//   const hideLayout = location.pathname === "/login" || location.pathname === "/signup";

//   return (
//     <>
//       {!hideLayout && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/category/:categoryName" element={<ShopCategory />} />
//         <Route path="/product/:id" element={<ProductDetail />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<LoginSignup />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/brands/:name" element={<SpecificBrand />} />
//       </Routes>
//       {!hideLayout && <Footer />}
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SpecificBrand from "./Pages/specificBrand.jsx";
import SearchResult from "./Pages/SearchResult.jsx";
import AddProductPage from "../src/Components/Form/addProduct.jsx";
import { UserProvider, useUser } from "./Context/userContext.jsx";
import AdminUserList from "./Pages/adminSelectUser.jsx";

function AppContent() {
  const { login } = useUser();
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  console.log("Rendering path:", location.pathname); // Log current route

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
        <Route path="/signup" element={<Signup />} />
        <Route path="/brands/:name" element={<SpecificBrand />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/admin" element={<AdminUserList />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
