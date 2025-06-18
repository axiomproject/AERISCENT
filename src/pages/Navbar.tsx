import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          <Link to="/">
            <img src="/Logo.png" alt="Aeriscent Logo" className="logo-image" />
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/collection">COLLECTION</Link>
          <Link to="/new-arrivals">NEW ARRIVALS</Link>
          <Link to="/pre-order">PRE-ORDER</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
