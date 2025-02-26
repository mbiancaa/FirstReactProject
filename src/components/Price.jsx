const priceStyles = {
    margin: 8,
    padding: "12px 16px",
    borderRadius: 10,
    backgroundColor: "green",
    color: "white"
};

import "../styles/Price.css";

const Price = ({ price }) => {
    return (
        price === 0 ? (
            <p
                style={{
                    margin: 8,
                    padding: "12px 16px",
                    borderRadius: 10,
                    backgroundColor: "gray",
                    color: "white"
                }}
            >
                Pret nedefinit
            </p> // expresie = true
        ) : (
            <p
                className="border"
                style={priceStyles}
            >
                Pret: {price} RON
            </p> // expresie = false
        )
    );
}

export default Price;