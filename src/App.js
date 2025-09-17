import React, { useState } from "react";
import "./styles.css";

// Import logo and 7 nursery images
import logo from "./assets/logo.png";
import nursery1 from "./assets/nursery1.jpg";
import nursery2 from "./assets/nursery2.jpg";
import nursery3 from "./assets/nursery3.jpg";
import nursery4 from "./assets/nursery4.jpg";
import nursery5 from "./assets/nursery5.jpg";
import nursery6 from "./assets/nursery6.jpg";
import nursery7 from "./assets/nursery7.jpg";

export default function App() {
  const images = [nursery1, nursery2, nursery3, nursery4, nursery5, nursery6, nursery7];
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="brand">
          <img src={logo} alt="NEAT SOLUTION logo" className="logo" />
          <h1>NEAT SOLUTION (PVT) LTD</h1>
        </div>
        <p>Green Plant Project – Sustainable Approach to Green Development</p>
      </header>

      {/* Main Content */}
      <main>
        <section className="section">
          <h2>Company Overview</h2>
          <p>
            Committed to eco-friendly green development through a model plant
            nursery serving local and international markets. Focused on
            sustainable cultivation, renewable energy, and climate resilience.
          </p>
        </section>

        <section className="section alt">
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

        <section className="section">
          <h2>Product Portfolio</h2>
          <ul>
            <li>Export-standard tropical plants</li>
            <li>Ornamental plants (Foliage & Flowering)</li>
            <li>Australian grass varieties (Zoysia)</li>
            <li>Malaysian grass varieties</li>
            <li>Salt-tolerant plants for saline climates</li>
          </ul>
        </section>

        <section className="section alt">
          <h2>Production Standards</h2>
          <ul>
            <li>Sterilized coir dust as planting media</li>
            <li>Compliance with National Plant Quarantine Service (Sri Lanka)</li>
            <li>Pest, fungal, bacterial, and nematode-free</li>
            <li>Organic-based fertilizers and agro-inputs</li>
            <li>Sterilized pots and grow bags</li>
          </ul>
        </section>

        <section className="section">
          <h2>Sustainable Practices</h2>
          <ul>
            <li>Organic fertilizers to protect ecosystems</li>
            <li>Renewable energy to minimize carbon footprint</li>
            <li>Sterilization for sustainable production</li>
            <li>Socially responsible employment practices</li>
          </ul>
        </section>

        <section className="section alt">
          <h2>Competitive Advantages</h2>
          <ul>
            <li>Compliance with international phytosanitary regulations</li>
            <li>Capability to fulfill bulk export orders</li>
            <li>Climate-resilient plant varieties</li>
            <li>Eco-friendly and sustainable inputs</li>
            <li>Dedicated R&D for continuous improvement</li>
          </ul>
        </section>

        <section className="section">
          <h2>Target Markets</h2>
          <ul>
            <li>Export customers (Europe, Middle East, Asia-Pacific)</li>
            <li>Local landscaping companies and developers</li>
            <li>Government and private sector green projects</li>
            <li>Eco-conscious home gardeners</li>
          </ul>
        </section>

        {/* Photo Gallery with Lightbox */}
        <section className="section gallery">
          <h2>Our Nursery</h2>
          <div className="image-grid">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Nursery ${index + 1}`}
                onClick={() => setLightboxImage(src)}
              />
            ))}
          </div>
        </section>

        <section className="section alt">
          <h2>Contact Information</h2>
          <p><strong>Tel:</strong> +94 11 554 1453</p>
          <p><strong>Fax:</strong> +94 11 554 1454</p>
          <p><strong>Web:</strong> <a href="http://www.neatsolutions.asia">www.neatsolutions.asia</a></p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© NEAT SOLUTION — Growing greener futures, sustainably.</p>
      </footer>

      {/* Lightbox Overlay */}
      <div
        className={`lightbox-overlay ${lightboxImage ? "active" : ""}`}
        onClick={() => setLightboxImage(null)}
      >
        {lightboxImage && <img src={lightboxImage} alt="Enlarged Nursery" />}
      </div>
    </div>
  );
}
