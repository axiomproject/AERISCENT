
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          <img src="/Logo.png" alt="Aeriscent Logo" className="logo-image" />
        </div>
        <nav className="nav-links">
          <a href="/">HOME</a>
          <a href="/collection">COLLECTION</a>
          <a href="/new-arrivals">NEW ARRIVALS</a>
          <a href="/pre-order">PRE-ORDER</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
