import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/918179593101?text=Hello%20Santosh%20Hospitality%20Packaging%20Solutions%2C%20I%20would%20like%20to%20enquire%20about%20your%20premium%20B2B%20packaging%20and%20consumables.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
}
