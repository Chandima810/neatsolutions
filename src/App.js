import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

// Import logo and images
import logo from "./assets/logo.png";
import nursery1 from "./assets/nursery1.jpg";
import nursery2 from "./assets/nursery2.jpg";
import nursery3 from "./assets/nursery3.jpg";
import nursery4 from "./assets/nursery4.jpg";
import nursery5 from "./assets/nursery5.jpg";
import nursery6 from "./assets/nursery6.jpg";
import nursery7 from "./assets/nursery7.jpg";

import coir from "./assets/coir.jpg";
import expo from "./assets/expo.jpg";
import organic from "./assets/organic.jpg";
import background from "./assets/background.png";

export default function App() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const sectionsRef = useRef([]);
  const imageRefs = useRef([]);
  const appRef = useRef(null);

  const nurseryImages = [
    nursery1,
    nursery2,
    nursery3,
    nursery4,
    nursery5,
    nursery6,
    nursery7,
  ];

  // Parallax speeds for images
  const imageSpeeds = [0.15, 0.2, 0.25, 0.18, 0.22, 0.17, 0.2, 0.12, 0.15];

  // Scroll-triggered animations (fade + slide-in + staggered children)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-fade-in");

            const children = Array.from(entry.target.children);
            children.forEach((child, index) => {
              child.style.transitionDelay = `${index * 0.15}s`;
              child.classList.add("fade-slide-in");
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });
  }, []);

  // Parallax: background and images
  useEffect(() => {
    const handleScroll = () => {
      if (appRef.current) {
        const offset = window.scrollY * 0.3;
        appRef.current.style.backgroundPosition = `center ${-offset}px`;
      }

      imageRefs.current.forEach((img, index) => {
        if (img) {
          const rect = img.getBoundingClientRect();
          const speed = imageSpeeds[index] || 0.2;
          const translateY = rect.top * speed;
          img.style.transform = `translateY(${translateY}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setImageRef = (el, index) => {
    imageRefs.current[index] = el;
  };

  return (
    <div
      className="app"
      ref={appRef}
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Header */}
      <header className="header">
        <div className="brand">
          <img src={logo} alt="NEAT SOLUTION logo" className="logo" />
          <h1>INCA CEYLON (PVT) LTD</h1>
        </div>
        <p>Green Plant Project – Sustainable Approach to Green Development</p>
      </header>

      <main>
        {/* Sections */}
        <section
          className="section"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2>Company Overview</h2>
          <p>
            Inca Ceylon, was incorporated on 21st October 2024 as a subsidiary of Neat Solutions Pvt Ltd, has evolved into a forward-looking, climate-compliant company dedicated to eco-friendly green development. Building on the strong foundation of its founder, Inca Ceylon operates model plant nurseries serving both local and international landscaping markets. 
<p>The Team Leader of the project, Cmde (Rtd) Tony Perera, a BSc. (Agriculture) graduate from University of Peradeniya is a leading horticulturist with experience in landscaping projects such as Arcade- Torrington square, Gregory lake– Nuwaraeliya,  Viharamahadevi Park– Colombo 07, provides his fulltime expertise for our sustainable cultivation, renewable energy integration, and climate-resilient practices, ensuring that every step of our growth contributes to a greener and more sustainable future.</p>

          </p>
        </section>

        <section
          className="section alt"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Vision & Mission</h2>
          <p>
            <strong>Vision:</strong> To become a leading global provider of
            sustainable tropical and ornamental plants.
          </p>
          <p>
            <strong>Mission:</strong> To cultivate and supply high-quality,
            climate-resilient plants using organic and sustainable practices
            while meeting international standards.
          </p>
        </section>

        {/* Product Portfolio */}
        <section
          className="section side-by-side"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <div className="text">
            <h2>Product Portfolio</h2>
            <ul>
              <li>Export-standard tropical plants</li>
              <li>Ornamental plants (Foliage & Flowering)</li>
              <li>Australian grass varieties (Zoysia)</li>
              <li>Malaysian grass varieties</li>
              <li>Salt-tolerant plants for saline climates</li>
            </ul>
          </div>
          <div className="image-box">
            <img
              src={expo}
              alt="Product Portfolio"
              ref={(el) => setImageRef(el, 0)}
              className="hover-parallax shadow-lift"
            />
          </div>
        </section>

        {/* Production Standards */}
        <section
          className="section alt side-by-side"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <div className="text">
            <h2>Production Standards</h2>
            <ul>
              <li>Sterilized coir dust as planting media</li>
              <li>Compliance with National Plant Quarantine Service (Sri Lanka)</li>
              <li>Pest, fungal, bacterial, and nematode-free</li>
              <li>Organic-based fertilizers and agro-inputs</li>
              <li>Sterilized pots and grow bags</li>
            </ul>
          </div>
          <div className="image-box">
            <img
              src={coir}
              alt="Production Standards"
              ref={(el) => setImageRef(el, 1)}
              className="hover-parallax shadow-lift"
            />
          </div>
        </section>

        {/* Sustainable Practices */}
        <section
          className="section side-by-side"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <div className="text">
            <h2>Sustainable Practices</h2>
            <ul>
              <li>Organic fertilizers to protect ecosystems</li>
              <li>Renewable energy to minimize carbon footprint</li>
              <li>Sterilization for sustainable production</li>
              <li>Socially responsible employment practices</li>
            </ul>
          </div>
          <div className="image-box">
            <img
              src={organic}
              alt="Sustainable Practices"
              ref={(el) => setImageRef(el, 2)}
              className="hover-parallax shadow-lift"
            />
          </div>
        </section>

        {/* Competitive Advantages */}
        <section
          className="section alt side-by-side"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <div className="text">
            <h2>Competitive Advantages</h2>
            <ul>
              <li>Compliance with international phytosanitary regulations</li>
              <li>Capability to fulfill bulk export orders</li>
              <li>Climate-resilient plant varieties</li>
              <li>Eco-friendly and sustainable inputs</li>
              <li>Dedicated R&D for continuous improvement</li>
            </ul>
          </div>
          <div className="image-box">
            <img
              src={nursery7}
              alt="Competitive Advantages"
              ref={(el) => setImageRef(el, 3)}
              className="hover-parallax shadow-lift"
            />
          </div>
        </section>

        {/* Target Markets */}
        <section
          className="section"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2>Target Markets</h2>
          <ul>
            <li>Export customers (Europe, Middle East, Asia-Pacific)</li>
            <li>Local landscaping companies and developers</li>
            <li>Government and private sector green projects</li>
            <li>Eco-conscious home gardeners</li>
          </ul>
        </section>

        {/* Photo Gallery with Lightbox */}
        <section
          className="section gallery"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2>Our Nursery</h2>
          <div className="image-grid">
            {nurseryImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Nursery ${index + 1}`}
                onClick={() => setLightboxImage(src)}
                ref={(el) => setImageRef(el, index + 4)}
                className="hover-parallax shadow-lift"
              />
            ))}
          </div>
        </section>

        {/* Contact Information */}
<section
  className="section alt"
  ref={(el) => (sectionsRef.current[8] = el)}
>
  <h2>Contact Information</h2>

    <p>
  <strong>Team Leader:</strong> 0718607433 / 0767850469
</p>

<p>
  <strong>Email:</strong>{" "}
  <a href="mailto:inca@neatsolutions.asia">inca@neatsolutions.asia</a>
</p>

  <p>
    <strong>Web:</strong>{" "}
    <a href="https://incaceylon.com/" target="_blank" rel="noopener noreferrer">
      incaceylon.com
    </a>
  </p>

  <p>
    <strong>Web:</strong>{" "}
    <a href="http://www.neatsolutions.asia" target="_blank" rel="noopener noreferrer">
      www.neatsolutions.asia
    </a>
  </p>
</section>

      </main>

      <footer className="footer">
        <p>© INCA CEYLON — Growing greener futures, sustainably.</p>
      </footer>

      {/* Lightbox */}
      <div
        className={`lightbox-overlay ${lightboxImage ? "active" : ""}`}
        onClick={() => setLightboxImage(null)}
      >
        {lightboxImage && <img src={lightboxImage} alt="Enlarged Nursery" />}
      </div>
    </div>
  );
}
