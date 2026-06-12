import ScrollReveal from '../components/ScrollReveal';
import PlaceholderVector from '../components/PlaceholderVector';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const categories = [
    {
      id: 'paper-cups',
      tag: 'BEVERAGE SUPPLY',
      vector: 'cup',
      name: 'Paper Cups & Straws',
      desc: 'Single-wall, double-wall ripple, and heat-resistant cups with custom logo embossing. Perfect for upscale cafés, airports, and events.'
    },
    {
      id: 'tissues',
      tag: 'HYGIENE ESSENTIALS',
      vector: 'amenities',
      name: 'Tissue Products',
      desc: 'Premium soft-feel napkin packs, cocktail tissues, and high-absorbency kitchen rolls. Custom stamping and edge-embossing available.'
    },
    {
      id: 'containers',
      tag: 'FOOD TAKEOUT',
      vector: 'box',
      name: 'Disposable Containers',
      desc: 'Microwave-safe plastic and foil containers, leak-proof lids, and multi-compartment meal trays tailored for high-volume cloud kitchens.'
    },
    {
      id: 'biodegradable',
      tag: 'SUSTAINABLE SOLUTIONS',
      vector: 'story',
      name: 'Biodegradable Packaging',
      desc: 'Eco-conscious sugarcane bagasse plates, cornstarch bowls, PLA-lined salad boxes, and smooth-finish wooden cutlery sets.'
    },
    {
      id: 'carry-bags',
      tag: 'RETAIL & DELIVRY',
      vector: 'bag',
      name: 'Carry Bags',
      desc: 'Luxury craft paper bags, flat-handle bags, and custom rope-handle shopping bags with thick bottom reinforcement boards.'
    },
    {
      id: 'parcel',
      tag: 'OUTER PROTECTIVE',
      vector: 'box',
      name: 'Parcel Packaging',
      desc: 'High-strength corrugated pizza boxes, greaseproof sheets, and custom-fit courier boxes for secure, spill-free deliveries.'
    },
    {
      id: 'hotel-amenities',
      tag: 'GUEST EXPERIENCE',
      vector: 'amenities',
      name: 'Hotel Amenities',
      desc: 'Coordinated toiletries, slippers, combs, dental kits, and grooming packs boxed in matching minimalist gold-stamped cardboards.'
    },
    {
      id: 'housekeeping',
      tag: 'BACK-OF-HOUSE',
      vector: 'warehouse',
      name: 'Housekeeping Consumables',
      desc: 'Heavy-duty garbage bags, surface sanitizing wraps, kitchen roll-towels, and housekeeping laundry collection bags.'
    }
  ];

  return (
    <div className="page-container">
      {/* 1. Page Header */}
      <section className="container no-padding-bottom">
        <ScrollReveal className="products-grid-header">
          <span className="eyebrow">Institutional & Retail Supplies</span>
          <h2>Product Categories</h2>
          <hr className="divider-gold-hr" />
        </ScrollReveal>
      </section>

      {/* 2. Categories Grid */}
      <section className="container no-padding-top">
        <div className="category-grid">
          {categories.map((cat, idx) => (
            <ScrollReveal key={cat.id} stagger={60}>
              <div className="category-card reveal-child">
                <div className="category-card-header">
                  <span className="cat-card-tag">{cat.tag}</span>
                  <div className="cat-card-icon">
                    <PlaceholderVector type={cat.vector} size={50} />
                  </div>
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                </div>
                <Link to={`/contact?category=${cat.id}`} className="cat-card-footer">
                  <span>Enquire Specifications</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 3. Showcase Disclaimer */}
        <ScrollReveal>
          <div className="showcase-disclaimer">
            <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>Procurement & Ordering Note</span>
            <p style={{ color: 'var(--brand-dark)', fontWeight: '400' }}>
              Showcase only not for e-commerce.
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>
              We partner directly with institutional procurement managers, retail businesses, and individual buyers. Contact us with your bulk or retail specifications to receive samples and pricing proposals.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
