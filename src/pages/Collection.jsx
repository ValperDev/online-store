import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Collection() {
  const { handle } = useParams();
  return (
    <section>
      <h1>{handle} clothes</h1>
      <ul>
        {products.filter(product => product.category === handle).map(product => (
          <ProductCard
            key={product.productId}
            handle={product.productHandle}
            name={product.productName}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}/>
        ))}
      </ul>
    </section>
  )
}
