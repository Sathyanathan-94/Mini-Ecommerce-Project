import "./ProductList.css";
import ProductCard from "./ProductCard";
import product from "./data.js";

function ProductList() {
    return (
        <section className="products-section">

            <div className="products-container">

                <h2 className="products-heading">
                    Our Products
                </h2>

                <div className="products-grid">

                    {product.map((product) => (
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

            </div>

        </section>
    );
}

export default ProductList;