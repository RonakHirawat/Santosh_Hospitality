import ScrollReveal from '../components/ScrollReveal';
import { Hotel, Utensils, Coffee, ChefHat, Layers, Plane, Briefcase, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Industries() {
  const sectors = [
    {
      icon: <Hotel size={36} strokeWidth={1} />,
      name: 'Hotels & Luxury Resorts',
      desc: 'Sophisticated back-of-house supplies, branded paper cups, guest soaps, matched kits, and amenities reflecting premium status.'
    },
    {
      icon: <Utensils size={36} strokeWidth={1} />,
      name: 'Premium Restaurants',
      desc: 'Fine-dining paper napkins, custom-printed takeout boxes, greaseproof liners, and leak-proof portion cups.'
    },
    {
      icon: <Coffee size={36} strokeWidth={1} />,
      name: 'Artisan Cafés & Bakeries',
      desc: 'Double-walled ripple cups, pastry carry-boxes, sugarcane pulp trays, stirrers, and paper straws.'
    },
    {
      icon: <ChefHat size={36} strokeWidth={1} />,
      name: 'Corporate Caterers',
      desc: 'Heavy-duty buffet trays, customized meal-pack boxes, biodegradable tableware, and housekeeping cleaning sheets.'
    },
    {
      icon: <Layers size={36} strokeWidth={1} />,
      name: 'Cloud Kitchens',
      desc: 'Standardized delivery containers, tamper-evident safety stickers, insulated parcel liners, and multi-compartment boxes.'
    },
    {
      icon: <Plane size={36} strokeWidth={1} />,
      name: 'Airports & Travel Hubs',
      desc: 'High-durability quick-service cups, structural bagasse plates, quick-pack bags, and airport-compliant hygiene products.'
    },
    {
      icon: <Briefcase size={36} strokeWidth={1} />,
      name: 'Corporate Supply',
      desc: 'Wholesale office pantry consumables, paper water cups, tissue dispensers, and housekeeping consumables.'
    },
    {
      icon: <ShoppingBag size={36} strokeWidth={1} />,
      name: 'Retail & Individual Buyers',
      desc: 'Standardized consumer packs for local supermarkets, boutique stores, event organizers, and personal household needs.'
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
