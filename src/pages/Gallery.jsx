import ScrollReveal from '../components/ScrollReveal';

import cupImg from '../assets/gallery/paper-cup-350ml.jpeg';
import containersImg from '../assets/gallery/food-containers.jpeg';
import mealBoxImg from '../assets/gallery/meal-box-black.jpeg';
import petCupsImg from '../assets/gallery/pet-cups.jpeg';
import friesHolderImg from '../assets/gallery/kraft-fries-holder.jpeg';
import sauceCupsImg from '../assets/gallery/sauce-cups.jpeg';
import strawsImg from '../assets/gallery/paper-straws.jpeg';
import cutleryImg from '../assets/gallery/wooden-cutlery.jpeg';

export default function Gallery() {
  const galleryItems = [
    {
      image: cupImg,
      title: '350ml Plain Paper Cups',
      subtitle: 'Premium single-wall cups for hot and cold beverages',
      span: 'col-6',
      aspect: '4/3'
    },
    {
      image: containersImg,
      title: 'Paper Food Containers',
      subtitle: 'Heavy-duty food-grade packaging ranging from 500ml to 1500ml',
      span: 'col-6',
      aspect: '4/3'
    },
    {
      image: mealBoxImg,
      title: 'Black Hinged Meal Boxes',
      subtitle: 'Chic micro-flute take-away boxes designed for premium kitchens',
      span: 'col-4',
      aspect: '1/1'
    },
    {
      image: petCupsImg,
      title: 'PET Cold Drink Cups',
      subtitle: 'Crystal clear, recyclable tumblers for signature cold beverages',
      span: 'col-8',
      aspect: '16/9'
    },
    {
      image: friesHolderImg,
      title: 'Kraft Paper Fries Holders',
      subtitle: 'Ergonomic, oil-resistant scoops perfect for quick-service brands',
      span: 'col-5',
      aspect: '1/1'
    },
    {
      image: sauceCupsImg,
      title: 'Disposable Sauce Containers',
      subtitle: 'Hygienic portion cups with secure snap-on lids to prevent spills',
      span: 'col-7',
      aspect: '16/9'
    },
    {
      image: strawsImg,
      title: 'Paper Drinking Straws',
      subtitle: 'Biodegradable, eco-friendly straws offering exceptional durability',
      span: 'col-6',
      aspect: '4/3'
    },
    {
      image: cutleryImg,
      title: 'Wooden Cutlery Collection',
      subtitle: 'Eco-conscious birchwood spoons, forks, and knives with smooth finish',
      span: 'col-6',
      aspect: '4/3'
    }
  ];

  return (
    <div className="page-container">
      {/* 1. Page Header */}
      <section className="container no-padding-bottom">
        <ScrollReveal>
          <span className="eyebrow">Product Portfolio</span>
          <h2>Trusted Packaging Solutions for Hospitality & Food Service</h2>
          <hr className="divider-gold-hr" />
        </ScrollReveal>
      </section>

      {/* 2. Asymmetric Editorial Grid */}
      <section className="container no-padding-top">
        <div className="gallery-editorial-grid">
          {galleryItems.map((item, idx) => (
            <ScrollReveal 
              key={idx} 
              className={`gallery-item ${item.span}`}
              style={{ aspectRatio: item.aspect }}
              stagger={0}
            >
              <img src={item.image} alt={item.title} className="gallery-image" />
              
              {/* Dark luxury gradient overlay with text reveal on hover */}
              <div className="gallery-hover-overlay">
                <span className="gallery-item-tag">Premium Packaging</span>
                <h3>{item.title}</h3>
                <p className="gallery-item-subtitle">{item.subtitle}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 3. Professional Capabilities Note */}
        <ScrollReveal>
          <div className="gallery-note">
            <span className="eyebrow" style={{ marginBottom: '0.75rem' }}>Sustainable & Certified Excellence</span>
            <h3 className="gallery-note-title">
              High-Performance, Food-Grade & Bulk Supply Capabilities
            </h3>
            <p className="gallery-note-text">
              All packaging items in our premium hospitality collection are manufactured in certified hygienic facilities using food-grade, FDA-approved, and eco-friendly materials. Designed to preserve taste, temperature, and presentation, our supply solutions cater to luxury hotels, high-end restaurants, quick-service cafes, cloud kitchens, and distribution networks. We provide scalable supply models, custom branding options, and timely shipments to ensure your operations run seamlessly.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
