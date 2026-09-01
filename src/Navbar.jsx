import  "./Navbar.css";
import { useState } from "react";

function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);
  return(
    <header>
      <div className="logo">
        <h2>
          Mini Mart
        </h2>
        <p>Get Whatever You Want</p>
      </div>
      <nav>
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">Categories</a>
        <input type="text" placeholder="Search" />
        <a href="">Cart</a>
        <button>Login</button>
      </nav>
      <button id="HamButt" onClick={()=>setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>
      {menuOpen && (
        <nav className="Mob-Nav">
          <a href="">Home</a>
          <a href="">Products</a>
          <a href="">Categories</a>
          <a href="">Cart</a>
          <a href="">Search</a>
          <a href="">Login</a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;