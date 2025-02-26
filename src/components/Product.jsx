import Price from './Price';
import "../styles/Product.css";

const Product = ({
    title = "Produs Neidentificat",
    srcImg,
    price = 0
}) => {
    return (
        <div className="product container border">
            <h2>{title}</h2>

            {srcImg && (
                <img src={srcImg}
                    alt={title}
                    width="100"
                    height="100" />
            )}

            <Price price={price} />

        </div>
    );
};


export default Product;