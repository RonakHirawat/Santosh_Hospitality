import ScrollReveal from '../components/ScrollReveal';
import { Hotel, Utensils, Coffee, ChefHat, Plane, Briefcase, Train, Ship, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Industries() {
  const sectors = [
    {
      icon: <Hotel size={36} strokeWidth={1} />,
      name: 'Hotels & Resorts',
      desc: 'Sophisticated back-of-house supplies, custom-printed paper cups, luxury guest soaps, matching guest kits, and bespoke amenities reflecting high-end status.'
    },
    {
      icon: <Utensils size={36} strokeWidth={1} />,
      name: 'Premium Restaurants',
      desc: 'Fine-dining paper napkins, custom-branded takeout boxes, greaseproof liners, leak-proof portion cups, and heavy-duty paper carriers.'
    },
    {
      icon: <Coffee size={36} strokeWidth={1} />,
      name: 'Artisan Cafés & Bakeries',
      desc: 'Double-walled ripple cups, pastry carry-boxes, sugarcane pulp containers, wooden stirrers, and biodegradable paper straws.'
    },
    {
      icon: <ChefHat size={36} strokeWidth={1} />,
      name: 'Corporate Caterers',
      desc: 'Heavy-duty buffet trays, customized meal-pack boxes, biodegradable tablewares, and large-format food transit packaging.'
    },
    {
      icon: <Briefcase size={36} strokeWidth={1} />,
      name: 'Corporate Offices & Parks',
      desc: 'Pantry consumables, paper water cups, tissue dispensers, office hygiene rolls, and eco-friendly breakroom supplies.'
    },
    {
      icon: <Plane size={36} strokeWidth={1} />,
      name: 'Airports & Travel Hubs',
      desc: 'High-durability quick-service cups, structural bagasse plates, quick-pack takeaway bags, and aviation-compliant hygiene packs.'
    },
    {
      icon: <Train size={36} strokeWidth={1} />,
      name: 'Railways & Transit Catering',
      desc: 'Compact food containers, passenger meal boxes, hygienic napkins, and disposable kitchenware designed for high-density transit services.'
    },
    {
      icon: <Ship size={36} strokeWidth={1} />,
      name: 'Shipping & Maritime Catering',
      desc: 'Moisture-resistant packaging, high-absorbency towels, heavy-duty disposable containers, and marine-safe biodegradable consumables.'
    },
    {
      icon: <Building2 size={36} strokeWidth={1} />,
      name: 'Institutional & Educational Buyers',
      desc: 'Bulk-pack dining hall supplies, large-scale event catering disposables, cafeteria containers, and commercial-grade housekeeping items.'
    }
  ];

  return (
    <div className="page-container dark-theme-page" style={{ minHeight: '100vh' }}>
      {/* 1. Page Header */}
      <section className="container no-padding-bottom">
        <ScrollReveal>
          <span className="eyebrow">Tailored Market Sectors</span>
          <h2>Businesses & Customers We Support</h2>
          <hr className="divider-gold-hr" style={{ opacity: 0.15 }} />
        </ScrollReveal>
      </section>

      {/* 2. Large Sector Rows */}
      <section className="container no-padding-top">
        <div className="sector-list-blocks">
          {sectors.map((sec, idx) => (
            <ScrollReveal key={idx} stagger={0}>
              <div className="sector-block-row">
                <div className="sector-row-icon">
                  {sec.icon}
                </div>
                <h3>{sec.name}</h3>
                <p>{sec.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="container no-padding-top" style={{ paddingBottom: '5rem' }}>
        <ScrollReveal style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Procurement & Retail Consultation</span>
          <h2>Need Custom Branding or Retail Orders?</h2>
          <p style={{ color: 'rgba(250, 250, 247, 0.7)', marginBottom: '2.5rem' }}>
            We specialize in printing logos, establishing custom dimensions, and fulfilling direct retail requests across all sectors. Tell us your requirements.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--brand-accent)', border: 'none' }}>
            Enquire for Business or Retail <ArrowRight size={14} style={{ marginLeft: '0.6rem' }} />
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
