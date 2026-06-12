import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Determine Navbar classes based on route and scroll state
  const isHome = location.pathname === '/';
  const isIndustries = location.pathname === '/industries';
  const isWhyUs = location.pathname === '/why-us';
  
  let headerClass = 'navbar ';
  if (isHome) {
    headerClass += scrolled ? 'scrolled-dark' : 'transparent-dark';
  } else if (isIndustries || isWhyUs) {
    headerClass += scrolled ? 'scrolled-dark' : 'transparent-dark';
  } else {
    headerClass += scrolled ? 'scrolled' : 'transparent';
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className={headerClass}>
        <Link to="/" className="logo-container">
          <span className="logo-title">Santosh Hospitality</span>
          <span className="logo-subtitle">Packaging Solutions</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/industries" className={({ isActive }) => isActive ? 'active' : ''}>Industries</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
          <NavLink to="/why-us" className={({ isActive }) => isActive ? 'active' : ''}>Why Us</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>Gallery</NavLink>
          <NavLink to="/contact" className="ghost-btn">Contact Us</NavLink>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Navigation Full-screen Overlay */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <span className="mobile-subtitle">Santosh Hospitality</span>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/products">Product Categories</Link>
        <Link to="/industries">Businesses We Support</Link>
        <Link to="/why-us">Why Choose Us</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', fontSize: '0.88rem' }}>Enquire Now</Link>
      </div>
    </>
  );
}
