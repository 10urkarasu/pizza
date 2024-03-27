import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
    return (
        <header>
            <Link to="/">Pizza Company</Link>
            <SearchOrder />
            <p>Onur</p>
        </header>
    );
}

export default Header;
