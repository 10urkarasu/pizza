import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    'my-4 inline-block transform rounded-full bg-amber-500 px-6 py-3 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500';

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
