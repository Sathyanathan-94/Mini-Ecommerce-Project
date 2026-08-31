import Navbar from './Navbar.jsx';
import ProductCard from './ProductCard.jsx';
import { useState } from 'react';

function App(){
  const [count, setCount] = useState(0);
  return(
    <>
      <Navbar />
    </>
  );
}

export default App;