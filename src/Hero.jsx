import "./Hero.css";

function Hero() {
    return (
        <div className="hero">

            <div className="hero-content">

                <h1 className="hero-title">
                    Shop Smarter.
                    <br />
                    Live Better.
                </h1>

                <p className="hero-subtitle">
                    Everything You Need, All in one Place
                </p>

                <p className="hero-description">
                    Discover Quality Products at Prices You'll Love
                </p>

                <div className="hero-buttons">
                    <button className="primary-btn">Shop Now</button>
                    <button className="secondary-btn">Explore Products</button>
                </div>

            </div>

            <div className="hero-image">
                <img src="https://placehold.co/450x350" alt="Product Visual" />
            </div>

        </div>
    );
}

export default Hero;