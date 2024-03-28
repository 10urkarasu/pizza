import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <header className="bg-amber-500 uppercase">
      <Link to="/" className="tracking-widest">
        Pizza Company
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
