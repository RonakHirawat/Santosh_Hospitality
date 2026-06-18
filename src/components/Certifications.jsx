import ScrollReveal from './ScrollReveal';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="certifications-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header-center">
            <span className="eyebrow">Compliance & Credentials</span>
            <h2>Certifications & Registrations</h2>
            <p className="brands-intro-text">
              Santosh Hospitality operates with full compliance, complete transparency, and official corporate registration. We provide verified documentation to support institutional procurement requirements.
            </p>
          </div>
        </ScrollReveal>

        <div className="cert-grid">
          {/* GST Certification Card */}
          <ScrollReveal>
            <div className="cert-card">
              {/* Background certificate border details */}
              <div className="cert-border-accent"></div>
              
              <div className="cert-card-content">
                <div className="cert-badge-container">
                  <div className="cert-badge-glow"></div>
                  <Award size={40} className="cert-icon" strokeWidth={1} />
                </div>
                
                <h3 className="cert-title">GST Registration</h3>
                
                <div className="cert-tag">Verified B2B Supplier</div>
                
                <p className="cert-description">
                  Official Goods and Services Tax registered business ensuring compliant and transparent transactions. Enables seamless input tax credit claiming for institutional procurement.
                </p>
                
                <div className="cert-divider"></div>
                
                <div className="cert-footer">
                  <div className="cert-number-block">
                    <span className="cert-label">GSTIN / Tax ID</span>
                    <span className="cert-number">[37GYUPB0958J1ZS]</span>
                  </div>
                  <div className="cert-status">
                    <CheckCircle2 size={14} className="status-icon" />
                    <span>Active</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Udyam Certification Card */}
          <ScrollReveal stagger={100}>
            <div className="cert-card">
              {/* Background certificate border details */}
              <div className="cert-border-accent"></div>
              
              <div className="cert-card-content">
                <div className="cert-badge-container">
                  <div className="cert-badge-glow"></div>
                  <ShieldCheck size={40} className="cert-icon" strokeWidth={1} />
                </div>
                
                <h3 className="cert-title">Udyam Registration</h3>
                
                <div className="cert-tag">MSME Enterprise</div>
                
                <p className="cert-description">
                  Recognized MSME enterprise registered under Government of India guidelines. Ensures compliant commercial operations and standardized vendor registration.
                </p>
                
                <div className="cert-divider"></div>
                
                <div className="cert-footer">
                  <div className="cert-number-block">
                    <span className="cert-label">Registration No.</span>
                    <span className="cert-number">[UDYAM-AP-10-0048280]</span>
                  </div>
                  <div className="cert-status">
                    <CheckCircle2 size={14} className="status-icon" />
                    <span>Active</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
