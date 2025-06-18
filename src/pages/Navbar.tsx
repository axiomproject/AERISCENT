import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          <Link to="/">
            <img src="/Logo.png" alt="Aeriscent Logo" className="logo-image" />
          </Link>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
          <Link to="/collection" onClick={() => setIsMenuOpen(false)}>COLLECTION</Link>
          <Link to="/new-arrivals" onClick={() => setIsMenuOpen(false)}>NEW ARRIVALS</Link>
          <Link to="/pre-order" onClick={() => setIsMenuOpen(false)}>PRE-ORDER</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
