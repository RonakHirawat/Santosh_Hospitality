import ScrollReveal from '../components/ScrollReveal';
import PlaceholderVector from '../components/PlaceholderVector';
import { Target, Eye, ShieldCheck, DollarSign, RefreshCw, Truck } from 'lucide-react';

export default function About() {
  return (
    <div className="page-container">
      {/* 1. Page Header */}
      <section className="container no-padding-bottom">
        <ScrollReveal>
          <span className="eyebrow">A Legacy of Trust</span>
          <h2>About Our Solutions</h2>
          <hr className="divider-gold-hr" />
        </ScrollReveal>
      </section>

      {/* 2. Split Editorial Layout */}
      <section className="container no-padding-top">
        <div className="editorial-layout">
          {/* Left Text */}
          <ScrollReveal>
            <div className="divider-left-border">
              <span className="eyebrow">Who We Are</span>
              <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1.5rem', lineHeight: '1.3' }}>
                Partnering with leading brands to deliver <em>consistent quality</em>.
              </h3>
              <p style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.05rem)', marginBottom: '1.5rem', color: 'var(--primary-text)' }}>
                Santosh Hospitality is a dedicated packaging and consumables supplier headquartered in Andhra Pradesh, partnering with hotels, restaurants, cafés, corporate clients, and retail customers to deliver consistent, quality products — at scale and on time.
              </p>
              <p>
                Founded on the principles of trust and supply chain transparency, we have grown into South India's premium packaging and supply partner. We maintain long-term customer relationships across multiple industries, managing the sourcing and distribution of essentials for both wholesale and retail requirements.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Placeholder Image Block */}
          <ScrollReveal>
            <div className="luxury-placeholder dark-theme" style={{ minHeight: 'clamp(280px, 40vw, 400px)' }}>
              <PlaceholderVector type="story" size={180} />
              <div className="placeholder-label">SANTOSH ARCHITECTURAL MOTIF</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Vision + Mission Pillar Cards */}
      <section className="no-padding-top" style={{ backgroundColor: 'var(--surface-color)' }}>
        <div className="container">
          <div className="grid-2">
            <ScrollReveal>
              <div className="pillar-card">
                <Target size={36} strokeWidth={1} style={{ color: 'var(--brand-accent)', marginBottom: '1.5rem' }} />
                <h3>Our Mission</h3>
                <p>
                  To streamline the procurement pipeline for South India's premium food, beverage, and retail operators. We deliver custom-branded, sustainable, and high-performance consumables designed to elevate the guest and customer packaging experience.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="pillar-card">
                <Eye size={36} strokeWidth={1} style={{ color: 'var(--brand-accent)', marginBottom: '1.5rem' }} />
                <h3>Our Vision</h3>
                <p>
                  To set the benchmark for supply reliability in the packaging sector. We envision a future where packaging procurement is friction-free, customized, and environmentally responsible across every tier of the hospitality and retail industries.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Company Story */}
      <section className="container">
        <ScrollReveal style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Our Journey</span>
          <h2>Crafting the Supply Chain</h2>
          <p style={{ fontSize: '1.05rem', marginTop: '1.5rem' }}>
            What began as a regional logistics support service has evolved into an integrated packaging developer. Headquartered in Andhra Pradesh, we maintain deep roots with primary paper mill suppliers, container fabricators, and custom stampers. This direct connection eliminates middleman costs and guarantees that from batch 1 to batch 100,000, your boxes, cups, and napkins maintain uniform gauge, density, and finish.
          </p>
        </ScrollReveal>
      </section>

      {/* 5. 4-Value Grid */}
      <section className="container no-padding-top">
        <div className="grid-4">
          <ScrollReveal className="value-grid-card">
            <ShieldCheck size={28} strokeWidth={1.5} style={{ color: 'var(--brand-accent)', marginBottom: '1rem' }} />
            <h4>Quality</h4>
            <p>Every single product is verified against commercial food-safety and moisture-resistance specifications.</p>
          </ScrollReveal>

          <ScrollReveal className="value-grid-card">
            <DollarSign size={28} strokeWidth={1.5} style={{ color: 'var(--brand-accent)', marginBottom: '1rem' }} />
            <h4>Pricing</h4>
            <p>Direct sourcing connections allow us to maintain steady, bulk wholesale pricing structures.</p>
          </ScrollReveal>

          <ScrollReveal className="value-grid-card">
            <RefreshCw size={28} strokeWidth={1.5} style={{ color: 'var(--brand-accent)', marginBottom: '1rem' }} />
            <h4>Consistency</h4>
            <p>Zero fluctuation in size, thickness, or weight from first order to repeat subscription runs.</p>
          </ScrollReveal>

          <ScrollReveal className="value-grid-card">
            <Truck size={28} strokeWidth={1.5} style={{ color: 'var(--brand-accent)', marginBottom: '1rem' }} />
            <h4>Service</h4>
            <p>Direct account representatives, transparent lead times, and dedicated freight solutions.</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
