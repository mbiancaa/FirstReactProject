const Price = ({ price }) => {
    return (
        price === 0 ? (
            <p>Pret nedefinit</p> // expresie = true
        ) : (
            <p>Pret: {price} RON</p> // expresie = false
        )
    );
}

export default Price;