import Price from './Price';

const Product = ({
    title = "Produs Neidentificat",
    srcImg,
    price = 0
}) => {
    return (
        <div className="product">
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