import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="bg-neutral-800 uppercase text-neutral-200">
      <p className="font-semibold text-neutral-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
