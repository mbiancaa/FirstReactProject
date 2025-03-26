import { useParams } from "react-router-dom";

const ProductItem = () => {
    const { productId } = useParams();
    return (
        <>
            <h1>Product {productId}</h1>
        </>
    );
}

export default ProductItem;