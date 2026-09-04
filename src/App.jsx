import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import ProductCard from './ProductCard.jsx';
import product_list from './data.js';

function App(){
  return(
    <>
      <Navbar />
      <Hero/>
      <div className="products-grid">
        {product_list.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              rating={product.rating}
              reviews={product.reviews}
              price={product.price}
              image={product.image}
            />
        ))}
      </div>
    </>
  );
}

export default App;