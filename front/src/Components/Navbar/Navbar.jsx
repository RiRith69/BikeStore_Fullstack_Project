import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

import "./Navbar.css";
import logo from "./../Assets/logo.avif";
import cart from "./../Assets/cart-logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="bike-logo" src={logo} alt="Bike Store Logo" />
      </div>

      <div>
        <ul className="nav-menu">
          <li onClick={() => setMenu("shop")}>
            <Link to="/">SHOP</Link>
            {menu === "shop" && <hr />}
          </li>

          <li onClick={() => setMenu("adults")}>
            <Link to="/adults">ADULTS</Link>
            {menu === "adults" && <hr />}
          </li>

          <li onClick={() => setMenu("kids")}>
            <Link to="/kids">KIDS</Link>
            {menu === "kids" && <hr />}
          </li>
        </ul>
      </div>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>LOGIN</button>
        </Link>
        <Link to="/cart">
          <img className="nav-cart" src={cart} alt="Cart" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
