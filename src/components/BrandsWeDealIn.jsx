import ScrollReveal from './ScrollReveal';
import { Shield, Sparkles, Layers, Box, Award, CheckCircle } from 'lucide-react';

export default function BrandsWeDealIn() {
  const brands = [
    { name: 'World Star Packaging Industry', category: 'Premium Packaging Supplies', code: 'WS' },
    { name: 'Oracal Poly Industrial', category: 'Industrial Polymers & Wraps', code: 'OP' },
    { name: 'Paras Poly', category: 'Polymer Foodservice Containers', code: 'PP' },
    { name: 'Chuk', category: 'Biodegradable Bagasse Tableware', code: 'CK' },
    { name: 'Newton Dustbin', category: 'Waste Management Systems', code: 'ND' },
    { name: 'Olive Straw', category: 'Eco-Friendly Drinking Straws', code: 'OS' },
    { name: 'Apan Plastic Containers', category: 'Food-Grade Plastic Packaging', code: 'AP' },
    { name: 'Ace Plastic Containers', category: 'Premium Takeaway Containers', code: 'AC' },
    { name: 'Jai Shree Shyam Silver Pouches', category: 'Metallic & Retort Pouches', code: 'JS' },
    { name: 'Windsor Bio Cups', category: 'Compostable Cups & Lids', code: 'WB' },
    { name: 'Charminar Tissue Paper', category: 'Premium Hygiene Tissues', code: 'CT' },
    { name: 'Kangaroo', category: 'Stapling & Stationery Supplies', code: 'KG' },
    { name: 'Alfa Aluminium Containers', category: 'Heavy-Duty Foil Products', code: 'AA' },
    { name: 'Hindel Aluminium Containers', category: 'Aluminum Foils & Tins', code: 'HA' },
    { name: 'Clear Water', category: 'Mineral Water & Disposables', code: 'CW' },
    { name: 'Pavaan Brown Paper Plates', category: 'Eco-Friendly Kraft Tableware', code: 'PB' }
  ];

  return (
    <section className="brands-showcase-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header-center">
            <span className="eyebrow">Trusted Sourcing Network</span>
            <h2>Brands We Deal In</h2>
            <p className="section-subtitle">
              Alternative Subtitle: <em>"Trusted Manufacturing & Supply Partners"</em>
            </p>
            <p className="brands-intro-text">
              We partner directly with leading national and global manufacturers to procure only genuine, certified products. Through these strict manufacturing relationships, we guarantee stable wholesale supply, certified food-grade materials, and unmatched quality control for corporate B2B procurement across South India.
            </p>
          </div>
        </ScrollReveal>

        <div className="brand-grid">
          {brands.map((brand, idx) => (
            <ScrollReveal key={idx} stagger={idx * 15}>
              <div className="brand-card">
                <div className="brand-card-inner">
                  {/* Premium Gold Seal / Monogram */}
                  <div className="brand-seal">
                    <span className="brand-monogram">{brand.code}</span>
                    <div className="brand-badge-ring"></div>
                  </div>
                  
                  <h3 className="brand-name">{brand.name}</h3>
                  <span className="brand-category">{brand.category}</span>
                  
                  {/* Subtle verified checkmark */}
                  <div className="brand-verified-badge">
                    <CheckCircle size={10} style={{ color: 'var(--brand-accent)' }} />
                    <span>Authorized Partner</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Corporate Trust Strip */}
        <ScrollReveal>
          <div className="brands-trust-strip">
            <div className="trust-strip-col">
              <Award size={20} strokeWidth={1.5} className="trust-strip-icon" />
              <span>100% Genuine Branded Sourcing</span>
            </div>
            <div className="trust-strip-col">
              <Shield size={20} strokeWidth={1.5} className="trust-strip-icon" />
              <span>Direct Manufacturer Pricing</span>
            </div>
            <div className="trust-strip-col">
              <Layers size={20} strokeWidth={1.5} className="trust-strip-icon" />
              <span>Bulk Order Inventory Support</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
