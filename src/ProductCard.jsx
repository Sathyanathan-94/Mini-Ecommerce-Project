function AddToCart(brand,model,price_inr){
    console.log(brand,model,"-",price_inr, "Added to Cart");
}

function ProductCard({id, brand, model, price_inr}){
    return(
        <div>
            <h3>{brand}</h3>
            <p>{model}</p>
            <h4>{price_inr}</h4>
            <button onClick={()=>AddToCart(brand,model,price_inr)}>Add To Cart</button>
        </div>
    );
}

export default ProductCard;