import { Link } from 'react-router-dom';
import { 
  MessageCircle, Phone, ArrowRight, Hotel, Utensils, Coffee, 
  ChefHat, Plane, Briefcase, Award, ShieldCheck, Sparkles,
  Train, Ship, Percent, Boxes, Truck, Headphones
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PlaceholderVector from '../components/PlaceholderVector';
import BrandsWeDealIn from '../components/BrandsWeDealIn';
import Certifications from '../components/Certifications';

export default function Home() {
  const whatsappUrl = "https://wa.me/918179593101?text=Hello%20Santosh%20Hospitality%20Solutions%2C%20I%20would%20like%20to%20enquire%20about%20your%20premium%20B2B%20packaging%20solutions.";

  return (
    <div className="page-container">
      {/* 1. Full-Viewport Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <ScrollReveal>
            <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>
              Premium Packaging & Hospitality Supply Solutions
            </span>
          </ScrollReveal>
          
          <ScrollReveal stagger={0}>
            <h1>
              Packaging That<br />
              Reflects Your <em>Standard</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal stagger={0}>
            <p className="hero-subline">
              Bulk and retail supply of packaging, amenities, and consumables for hotels, restaurants, corporate kitchens, and local businesses across South India.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger={0} className="hero-ctas">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={18} style={{ marginRight: '0.6rem' }} />
              WhatsApp Enquiry
            </a>
            <a href="tel:+918179593101" className="btn btn-outline-white">
              <Phone size={16} style={{ marginRight: '0.6rem' }} />
              Call Specialist
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Below Fold: 3-Stat Trust Strip */}
      <div className="trust-strip">
        <div className="trust-inner">
          <div className="trust-item">
            <Award size={20} strokeWidth={1.5} style={{ color: 'var(--brand-accent)' }} />
            <span>500+ Corporate & Retail Clients</span>
          </div>
          {/* <div className="trust-dot"></div> */}
          <div className="trust-item">
            <ShieldCheck size={20} strokeWidth={1.5} style={{ color: 'var(--brand-accent)' }} />
            <span>6 Years of Excellence</span>
          </div>
          {/* <div className="trust-dot"></div> */}
          <div className="trust-item">
            <Sparkles size={20} strokeWidth={1.5} style={{ color: 'var(--brand-accent)' }} />
            <span>South India Network</span>
          </div>
        </div>
      </div>

      {/* 3. Product Teaser Preview */}
      <section className="container">
        <ScrollReveal>
          <div className="products-teaser-header">
            <div>
              <span className="eyebrow">Curated Collections</span>
              <h2>Wholesale & Retail Product Lineup</h2>
            </div>
            <Link to="/products" className="btn btn-outline-dark" style={{ padding: '0.8rem 1.6rem' }}>
              View All 8 Categories <ArrowRight size={14} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal className="products-teaser-scroll" stagger={60}>
          {/* Card 1 */}
          <div className="product-card reveal-child">
            <div className="product-card-top">
              <span className="category-tag">Beverage</span>
              <div className="product-card-icon">
                <PlaceholderVector type="cup" size={48} className="" />
              </div>
              <h3>Paper Cups &amp; Accessories</h3>
              <p>Premium single and double wall cups with custom brand stamping for hotels and cafés.</p>
            </div>
            <div className="product-card-footer">
              <span>View Details</span>
              <ArrowRight size={12} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="product-card reveal-child">
            <div className="product-card-top">
              <span className="category-tag">Hygiene</span>
              <div className="product-card-icon">
                <PlaceholderVector type="amenities" size={48} className="" />
              </div>
              <h3>Tissue Products</h3>
              <p>Premium soft virgin tissues, napkin packs, and custom-embossed napkins for fine dining.</p>
            </div>
            <div className="product-card-footer">
              <span>View Details</span>
              <ArrowRight size={12} />
            </div>
          </div>

          {/* Card 3 */}
          <div className="product-card reveal-child">
            <div className="product-card-top">
              <span className="category-tag">Food Service</span>
              <div className="product-card-icon">
                <PlaceholderVector type="box" size={48} className="" />
              </div>
              <h3>Disposable Containers</h3>
              <p>Leak-proof containers, meal trays, and premium takeaway boxes built for cloud kitchens.</p>
            </div>
            <div className="product-card-footer">
              <span>View Details</span>
              <ArrowRight size={12} />
            </div>
          </div>

          {/* Card 4 */}
          <div className="product-card reveal-child">
            <div className="product-card-top">
              <span className="category-tag">Guest Experience</span>
              <div className="product-card-icon">
                <PlaceholderVector type="bag" size={48} className="" />
              </div>
              <h3>Hotel Amenities</h3>
              <p>Luxury guest toilet kits, custom soap wrappers, slippers, and dental kits with gold accents.</p>
            </div>
            <div className="product-card-footer">
              <span>View Details</span>
              <ArrowRight size={12} />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. Industry Strip */}
      <section className="industry-strip">
        <ScrollReveal>
          <div className="industry-strip-inner">
            <div className="industry-sector-icon-block">
              <Hotel size={24} className="sector-icon" strokeWidth={1.5} />
              <span>Hotels</span>
            </div>
            <div className="industry-sector-icon-block">
              <Utensils size={24} className="sector-icon" strokeWidth={1.5} />
              <span>Restaurants</span>
            </div>
            <div className="industry-sector-icon-block">
              <Coffee size={24} className="sector-icon" strokeWidth={1.5} />
              <span>Cafés</span>
            </div>
            <div className="industry-sector-icon-block">
              <ChefHat size={24} className="sector-icon" strokeWidth={1.5} />
              <span>Catering</span>
            </div>
            <div className="industry-sector-icon-block">
              <Briefcase size={24} className="sector-icon" strokeWidth={1.5} />
              <span>Corporate</span>
            </div>
            <div className="industry-sector-icon-block">
              <Plane size={24} className="sector-icon" strokeWidth={1.5} />
              <span>Airports</span>
            </div>
            <div className="industry-sector-icon-block">
              <Train size={24} className="sector-icon" strokeWidth={1.5} />
              <span>Railways</span>
            </div>
            <div className="industry-sector-icon-block">
              <Ship size={24} className="sector-icon" strokeWidth={1.5} />
              <span>Shipping</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="vision-pullquote-section">
        <div className="container">
          <ScrollReveal>
            <div className="vision-quote-container">
              <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Our Pledge</span>
              <blockquote>
                "To be the most trusted supply partner for hospitality and retail businesses in <em>South India</em> — known for quality that never wavers and service that never disappoints."
              </blockquote>
              <span className="vision-quote-author" style={{ marginTop: '1.5rem', display: 'block' }}>
                Santosh Hospitality Packaging Solutions
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Why Choose Santosh Hospitality Section */}
      <section className="why-choose-home container" style={{ maxWidth: '100%', padding: '5rem 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header-center">
              <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Enterprise Sourcing Benefits</span>
              <h2>Why Choose Santosh Hospitality</h2>
              <p className="brands-intro-text" style={{ color: 'rgba(250, 250, 247, 0.7)' }}>
                We deliver complete supply chain reliability, certified quality, and competitive wholesale economics tailored to the specific needs of commercial operations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-3" style={{ marginTop: '3rem' }}>
            <ScrollReveal className="why-card" stagger={0}>
              <ShieldCheck size={36} strokeWidth={1} className="why-choose-home-icon" />
              <h3>Genuine Branded Products</h3>
              <p>Sourced directly from trusted manufacturers and established industry brands to ensure authenticity and uniform standards.</p>
            </ScrollReveal>

            <ScrollReveal className="why-card" stagger={60}>
              <Percent size={36} strokeWidth={1} className="why-choose-home-icon" />
              <h3>Competitive Wholesale Pricing</h3>
              <p>Direct manufacturer connections enable high-value, cost-effective procurement solutions optimized for bulk commercial buyers.</p>
            </ScrollReveal>

            <ScrollReveal className="why-card" stagger={120}>
              <Boxes size={36} strokeWidth={1} className="why-choose-home-icon" />
              <h3>Reliable Stock Availability</h3>
              <p>Meticulous inventory management, warehouse buffers, and consistent supply streams to insulate you from seasonal shortage.</p>
            </ScrollReveal>

            <ScrollReveal className="why-card" stagger={180}>
              <Truck size={36} strokeWidth={1} className="why-choose-home-icon" />
              <h3>On-Time Delivery</h3>
              <p>Efficient localized logistics and dependable fulfillment networks to guarantee prompt arrivals at operations across South India.</p>
            </ScrollReveal>

            <ScrollReveal className="why-card" stagger={240}>
              <Hotel size={36} strokeWidth={1} className="why-choose-home-icon" />
              <h3>B2B Hospitality Specialist</h3>
              <p>Focused supply expertise serving hotels, restaurant chains, catering services, airports, transit hubs, and corporate clients.</p>
            </ScrollReveal>

            <ScrollReveal className="why-card" stagger={300}>
              <Headphones size={36} strokeWidth={1} className="why-choose-home-icon" />
              <h3>Bulk Order Support</h3>
              <p>Dedicated account managers to oversee customized branding requests, volume pricing models, and structured annual contracts.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. Brands We Deal In Showcase */}
      <BrandsWeDealIn />

      {/* 7. Certifications & Registrations */}
      <Certifications />

      {/* 6. CTA Band */}
      <section className="cta-band">
        <div className="container">
          <ScrollReveal>
            <div className="cta-band-inner">
              <span className="eyebrow">Direct Procurement & Retail</span>
              <h2>Ready to talk supply?</h2>
              <p style={{ marginBottom: '2.5rem' }}>
                Connect with our team to arrange custom samples, volume-priced estimates, or to review our standard wholesale and retail catalog specifications.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Get Bulk or Retail Pricing <ArrowRight size={14} style={{ marginLeft: '0.6rem' }} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
