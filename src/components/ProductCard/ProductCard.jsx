import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <li>
      <Link to={`/products/${props.handle}`}>{props.name}</Link>
      <div>
        <span>{props.oldPrice}</span>
        <span>{props.newPrice}</span>
      </div>
    </li>
  )
}
