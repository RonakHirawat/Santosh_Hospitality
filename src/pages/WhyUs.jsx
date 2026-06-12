import ScrollReveal from '../components/ScrollReveal';
import { CheckCircle } from 'lucide-react';

export default function WhyUs() {
  const points = [
    {
      num: '01',
      title: 'Flexible Order Quantities',
      desc: 'Equipped to process container-load wholesale orders and direct retail requests. We support everyone from large hotel chains to local cafés and individual buyers.'
    },
    {
      num: '02',
      title: 'Efficient Regional Logistics',
      desc: 'Headquartered in Andhra Pradesh, our localized shipping network ensures reliable, on-time deliveries to outlets across South India.'
    },
    {
      num: '03',
      title: 'Wholesale & Retail Pricing',
      desc: 'Direct manufacturer partnerships allow us to offer highly competitive pricing structures for both commercial bulk accounts and retail customers.'
    },
    {
      num: '04',
      title: 'Unwavering Quality Control',
      desc: 'Rigid testing standards for all containers and paper products. Zero issues with heat tolerance, moisture leakage, or weight variance.'
    },
    {
      num: '05',
      title: 'Trusted Supply Network',
      desc: 'Strategic feedstock stockpiles shield our commercial and retail clients from raw paper board and liner material market fluctuations.'
    },
    {
      num: '06',
      title: 'Personalized Customer Assistance',
      desc: 'We offer customized annual supply contracts for businesses and dedicated assistance for retail orders. Benefit from tailored support at any scale.'
    }
  ];

  return (
    <div className="page-container dark-theme-page" style={{ minHeight: '100vh' }}>
      {/* 1. Page Header */}
      <section className="container no-padding-bottom">
        <ScrollReveal>
          <span className="eyebrow">Enterprise & Retail Sourcing</span>
          <h2>Why Choose Us</h2>
          <hr className="divider-gold-hr" />
        </ScrollReveal>
      </section>

      {/* 2. Editorial Layout with 6 Numbered Cards */}
      <section className="container no-padding-top" style={{ paddingBottom: '5rem' }}>
        <div className="editorial-layout">
          {/* Left Column: Statement */}
          <ScrollReveal>
            <div className="divider-left-border">
              <span className="eyebrow">Supply Chain Assurance</span>
              <h3 style={{ fontSize: '2.4rem', marginBottom: '1.5rem', lineHeight: '1.25' }}>
                We believe in <em>quality that never wavers</em> and supply lines that never break.
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'rgba(250, 250, 247, 0.8)', marginBottom: '1.5rem' }}>
                Businesses and retail customers trust Santosh Hospitality because we understand that packaging is the physical handshake between your brand and your customer.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Whether you're a large hotel chain or an individual retail buyer, we provide the same premium standard of service. Our scalable systems, buffer stocks, and dedicated coordination ensure you never run short of packaging essentials during peak seasonal spikes.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--brand-accent)' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: '400' }}>ISO Quality Certified Sourcing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--brand-accent)' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: '400' }}>FDA Food-Contact Safe Raw Materials</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--brand-accent)' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: '400' }}>Wholesale Contracts & Retail Options</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Numbered Cards Grid */}
          <div className="numbered-cards-grid">
            {points.map((pt, idx) => (
              <ScrollReveal key={idx} stagger={0}>
                <div className="why-card">
                  <span className="why-card-num">{pt.num}</span>
                  <h3>{pt.title}</h3>
                  <p>{pt.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
