import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { useMemo } from "react";
import NavBar from "../components/NavBar";
// import Analytics from '....';

const Products = () => {
    const location = useLocation();
    // useEffect(() => {
    //     Analytics.send(location);
    // }, [location]);
    // const [searchParams] = useSearchParams();
    // const name = searchParams.get("name");
    // const color = searchParams.get("color");
    // const maxPrice = searchParams.get("maxPrice");
    // const inStock = searchParams.get("inStock");

    // const params = useMemo(() => {
    //     Object.fromEntries([...searchParams]), [searchParams]
    // });

    // const {name, maxPrice, isStock, color} = params;

    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");
    return (
        <>

            <NavBar />
            <h1>Products</h1>
            {/* <h2>Filters: name: {name}, color: {color}, maxPrice: {maxPrice}, inStock: {inStock}</h2> */}
            <input type="text" value={name} onChange={e => setSearchParams({ name: e.target.value })} />
            <p>Welcome to my products page!</p>
            <Link to="/product/hoodie-adidas" state={location}>Navigate to product hoodie adidas</Link>
        </>
    );
}

export default Products;