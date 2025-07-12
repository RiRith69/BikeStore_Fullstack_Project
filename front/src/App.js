// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Shop from "./Pages/Shop";
// import ShopCategory from "./Pages/ShopCategory";
// import Product from "./Pages/Product";
// import Cart from "./Pages/Cart";
// import LoginSignup from "./Pages/LoginSignup";
<<<<<<< HEAD
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
=======
// import Signup from "./Pages/Signup";
>>>>>>> 866e25c7269f814757cf57af61b3ee8295e04901
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";

// function AppContent() {
//   const location = useLocation();
//   // Hide Navbar and Footer for both login and signup routes
//   const hideLayout = location.pathname === "/login" || location.pathname === "/signup";

//   return (
//     <>
//       {!hideLayout && <Navbar />}
<<<<<<< HEAD

=======
>>>>>>> 866e25c7269f814757cf57af61b3ee8295e04901
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
<<<<<<< HEAD

=======
>>>>>>> 866e25c7269f814757cf57af61b3ee8295e04901
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
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Signup from "./Pages/Signup";
import ForgetPS from "./Pages/ForgetPS";
import NewPS from "./Pages/NewPS";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import BrandList from "./API/brand.jsx";
function AppContent() {
  const location = useLocation();
  // Hide Navbar and Footer for login, signup, and forget-password routes
  const hideLayout = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/forget-password"
    || location.pathname === "/new-password";

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/category/:mountaincycle"
          element={<ShopCategory category="mountaincycle" />}
        />
        <Route
          path="/category/:roadcycle"
          element={<ShopCategory category="roadcycle" />}
        />
        <Route
          path="/category/:citycycle"
          element={<ShopCategory category="citycycle" />}
        />
        <Route
          path="/category/:hybridcycle"
          element={<ShopCategory category="hybridcycle" />}
        />
        <Route
          path="/category/:kidscycle"
          element={<ShopCategory category="kidscycle" />}
        />
        <Route
          path="/category/:touringcycle"
          element={<ShopCategory category="touringcycle" />}
        />
        <Route
          path="/category/:electroniccycle"
          element={<ShopCategory category="electroniccycle" />}
        />
        <Route
          path="/category/:bikeparts"
          element={<ShopCategory category="bikeparts" />}
        />
        <Route
          path="/brand/:giant"
          element={<ShopCategory category="giant" />}
        />
        <Route
          path="/brand/:asuma"
          element={<ShopCategory category="asuma" />}
        />
        <Route path="/brand/:trek" element={<ShopCategory category="trek" />} />
        <Route
          path="/brand/:merida"
          element={<ShopCategory category="merida" />}
        />
        <Route
          path="/brand/:polygon"
          element={<ShopCategory category="polygon" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
<<<<<<< HEAD
        <Route path="/brands" element={<BrandList />} />
=======
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPS />} />
        <Route path="/new-password" element={<NewPS />} />
>>>>>>> 866e25c7269f814757cf57af61b3ee8295e04901
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
