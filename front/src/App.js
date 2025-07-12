// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Shop from "./Pages/Shop";
// import ShopCategory from "./Pages/ShopCategory";
// import Product from "./Pages/Product";
// import Cart from "./Pages/Cart";
// import LoginSignup from "./Pages/LoginSignup";
// import Signup from "./Pages/Signup";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";

// function AppContent() {
//   const location = useLocation();
//   // Hide Navbar and Footer for both login and signup routes
//   const hideLayout = location.pathname === "/login" || location.pathname === "/signup";

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
//         <Route path="/signup" element={<Signup />} />
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
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Signup from "./Pages/Signup";
import ForgetPS from "./Pages/ForgetPS";
import NewPS from "./Pages/NewPS";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function AppContent() {
  const location = useLocation();
  // Hide Navbar and Footer for login, signup, and forget-password routes
  const hideLayout = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/forget-password"
    || location.pathname === "/new-password";

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
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPS />} />
        <Route path="/new-password" element={<NewPS />} />
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

