import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base =
    'inline-block text-sm rounded-full bg-amber-500 px-4 py-3 font-semibold uppercase tracking-wide text-neutral-800 transition-colors duration-300 hover:bg-amber-300 hover:text-red-600';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block text-sm rounded-full bg-amber-500 px-4 py-3 font-semibold uppercase tracking-wide text-neutral-800 transition-colors duration-300 hover:bg-amber-300 hover:text-red-600',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
