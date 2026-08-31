import  "./Navbar.css";

function Navbar(){
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
    </header>
  );
}

export default Navbar;