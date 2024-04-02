import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-neutral-200 bg-amber-500 px-4 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        🍕 Pizza Company
      </Link>
      <div className="flex items-center justify-between">
        <SearchOrder />
        <UserName />
      </div>
    </header>
  );
}

export default Header;
