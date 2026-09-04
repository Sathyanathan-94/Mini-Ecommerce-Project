import "./ProductCard.css";

function ProductCard({ title, description, rating, reviews, price, image }) {
    return (
        <div className="productcard-section">

            <div className="product-image">
                <img
                    src={image}
                    alt={title}
                />
            </div>

            <div className="product-content">

                <h3 className="product-title">
                    {title}
                </h3>

                <p className="product-desc">
                    {description}
                </p>

                <div className="product-review">
                    <span>
                        {rating} ({reviews})
                    </span>
                </div>

                <div className="product-price">
                    <h4>₹ {price}</h4>
                </div>

                <button className="add-to-cart">
                    Add to Cart
                </button>

            </div>

        </div>
    );
}

export default ProductCard;