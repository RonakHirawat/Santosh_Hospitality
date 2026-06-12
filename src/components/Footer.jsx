import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="brand-footer">
      <div className="footer-columns">
        {/* Column 1: Brand Blurb & Download */}
        <div className="footer-col-brand">
          <div className="footer-wordmark">Santosh Hospitality</div>
          <span className="footer-sublabel">Packaging Solutions</span>
          <p className="brand-blurb">
            Premium wholesale and retail supply of packaging, amenities, and consumables across South India. Engineered for businesses and individual buyers alike.
          </p>
          <a href="/company-profile.pdf" download className="download-pdf-btn">
            <FileText size={16} />
            <span>Download Company Profile (PDF)</span>
          </a>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Product Categories</Link></li>
            <li><Link to="/industries">Businesses We Support</Link></li>
            <li><Link to="/why-us">Why Choose Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact & Enquiry</Link></li>
          </ul>
        </div>

        {/* Column 3: Products */}
        <div>
          <h4>Categories</h4>
          <ul className="footer-links-list">
            <li><Link to="/products">Paper Cups & Straws</Link></li>
            <li><Link to="/products">Tissue Products</Link></li>
            <li><Link to="/products">Disposable Containers</Link></li>
            <li><Link to="/products">Biodegradable Packaging</Link></li>
            <li><Link to="/products">Carry Bags</Link></li>
            <li><Link to="/products">Hotel Amenities</Link></li>
            <li><Link to="/products">Housekeeping Consumables</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Details */}
        <div>
          <h4>Contact Us</h4>
          <ul className="footer-contact-details">
            <li>
              <MapPin size={18} />
              <span>
                27-4-25, Dykes Tank Road,<br />
                Pandupulla Sandhu,<br />
                Visakhapatnam - 530002, <br />
                Andhra Pradesh, India
              </span>
            </li>
            <li>
              <Phone size={18} />
              <span>+91 81795 93101</span>
            </li>
            <li>
              <Mail size={18} />
              <span>supply@santoshhospitality.com</span>
            </li>
            <li>
              <span style={{ fontSize: '0.78rem', color: 'rgba(250, 250, 247, 0.45)', marginLeft: '26px' }}>
                Mon – Sat: 9:00 AM – 9:30 PM
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright & GST Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <p>
            &copy; {currentYear} Santosh Hospitality Packaging. All Rights Reserved. &nbsp;
          </p>
          {/* <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
