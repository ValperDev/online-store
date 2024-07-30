import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function Product() {
  const { handle } = useParams();
  const findProduct = (handle) => {
    return products.find(product => product.productHandle === handle);
  }
  const { 
    productImage,
    productName, 
    oldPrice, 
    newPrice,
    productDescription } = findProduct(handle);
  return (
    <section>
      <div>
        <img src={productImage} alt={`${productName} product image`} />
      </div>
      <div>
        <h1>{productName}</h1>
        <div>
          <span>{oldPrice}</span>
          <span>{newPrice}</span>
        </div>
        <button>Add to cart</button>
        <p>{productDescription}</p>
      </div>
    </section>
  )
}
