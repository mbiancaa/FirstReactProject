import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductItem = () => {
    const { productId } = useParams();
    const location = useLocation();
    const backToProducts = location.state ?? "/products";
    return (
        <>
            <Link to={backToProducts}>Back to products</Link>
            <h1>Product {productId}</h1>
        </>
    );
}

export default ProductItem;