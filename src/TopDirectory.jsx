import { Link, useLocation } from 'react-router-dom';

export default function TopDirectory({ align = 'left' }) {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }
  const path = location.pathname === '/' ? 'home' : location.pathname.replace(/^\//, '');

  return (
    <nav className={`top-directory top-directory--${align}`}>
      <Link to="/">home</Link>
      <span className="separator"> / </span>
      <span className="current-page">{path}</span>
    </nav>
  );
}
