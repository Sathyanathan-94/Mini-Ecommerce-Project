import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import ProductCard from './ProductCard.jsx';
import product_list from './data.js';
import ProductList from './ProductList.jsx';
// import "./productCard.css";

function App(){
  return(
    <>
      <Navbar />
      <Hero/>
      <ProductList/>
    </>
  );
}

export default App;