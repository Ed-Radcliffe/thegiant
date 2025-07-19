import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/" className="navbar-title-link">
          The Giant
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>
          About
        </Link>
        <Link to="/media" className={location.pathname === '/media' ? 'nav-link active' : 'nav-link'}>
          Media
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
