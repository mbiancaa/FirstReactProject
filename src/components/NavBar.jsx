// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about" end>About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about/privacy">Privacy</NavLink>
            <NavLink to="/about/terms">Terms</NavLink>
        </nav>
    );
}

export default NavBar;