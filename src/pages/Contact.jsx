import ScrollReveal from '../components/ScrollReveal';
import { Mail, Phone, MapPin, Clock, MessageCircle, FileText } from 'lucide-react';

export default function Contact() {
  const targetPhone = "918179593101";
  const whatsappUrl = `https://wa.me/${targetPhone}?text=Hello%20Santosh%20Hospitality%20Solutions!%20I%20would%20like%20to%20submit%20a%20wholesale%20or%20retail%20supply%20enquiry.`;

  return (
    <div className="page-container">
      {/* 1. Page Header */}
      <section className="container no-padding-bottom">
        <ScrollReveal>
          <span className="eyebrow">Direct Sourcing Pipeline</span>
          <h2>Contact &amp; Enquiry</h2>
          <hr className="divider-gold-hr" />
        </ScrollReveal>
      </section>

      {/* 2. Contact Cards Grid */}
      <section className="container no-padding-top" style={{ paddingTop: '2rem' }}>
        <div className="grid-4" style={{ marginBottom: 'clamp(2rem, 6vw, 3.5rem)' }}>
          <ScrollReveal className="value-grid-card" stagger={0}>
            <MapPin size={28} strokeWidth={1.5} style={{ color: 'var(--brand-accent)', marginBottom: '1rem' }} />
            <h4>Headquarters</h4>
            <p>27-4-25, Dykes Tank Road,<br />
              Pandupulla Sandhu,<br />
              Visakhapatnam - 530002, <br />
              Andhra Pradesh, India
            </p>
          </ScrollReveal>

          <ScrollReveal className="value-grid-card" stagger={60}>
            <Phone size={28} strokeWidth={1.5} style={{ color: 'var(--brand-accent)', marginBottom: '1rem' }} />
            <h4>Direct Lines</h4>
            <p>+91 81795 93101<br/><span style={{ fontSize: '0.8rem', color: 'var(--brand-accent)' }}>(Procurement &amp; Retail)</span></p>
          </ScrollReveal>

          <ScrollReveal className="value-grid-card" stagger={120}>
            <Mail size={28} strokeWidth={1.5} style={{ color: 'var(--brand-accent)', marginBottom: '1rem' }} />
            <h4>Email Directory</h4>
            <p>santoshhospitalityvsp@gmail.com<br/><span style={{ fontSize: '0.8rem', color: 'var(--brand-accent)' }}>(Supply Desk)</span></p>
          </ScrollReveal>

          <ScrollReveal className="value-grid-card" stagger={180}>
            <Clock size={28} strokeWidth={1.5} style={{ color: 'var(--brand-accent)', marginBottom: '1rem' }} />
            <h4>Business Hours</h4>
            <p>Mon – Sat: 9:00 AM – 9:30 PM<br/><span style={{ fontSize: '0.8rem', color: 'var(--brand-accent)' }}>(Closed on Sundays)</span></p>
          </ScrollReveal>
        </div>

        {/* 3. Map and CTA Split */}
        <div className="editorial-layout" style={{ alignItems: 'center' }}>
          {/* Left Column: Map */}
          <ScrollReveal className="map-placeholder" style={{ margin: 0, height: 'clamp(280px, 45vw, 400px)' }}>
            <iframe
              title="Santosh Hospitality Vijayawada Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.7762480703805!2d83.2991594!3d17.708027100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394300159baf47%3A0x14ae5134bd474f0a!2sSantosh%20Hospitality%20Packaging%20Supplies!5e0!3m2!1sen!2sin!4v1779959013079!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </ScrollReveal>

          {/* Right Column: CTA Block */}
          <ScrollReveal>
            <div className="contact-cta-container">
              <span className="eyebrow">Ready to Order?</span>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                Connect with our team directly.
              </h3>
              <p style={{ marginBottom: '2.5rem', color: 'var(--primary-text)' }}>
                We partner with wholesale and retail buyers to provide customized samples, volume pricing, and standard catalog orders without the friction of complex forms. Just drop us a message.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ justifyContent: 'center', padding: '1.2rem' }}>
                  <MessageCircle size={18} style={{ marginRight: '0.6rem' }} />
                  Start WhatsApp Chat
                </a>
                
                <a href="/company-profile.pdf" download className="btn btn-outline-dark" style={{ justifyContent: 'center', padding: '1.2rem' }}>
                  <FileText size={18} style={{ marginRight: '0.6rem' }} />
                  Download Complete Catalog
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
