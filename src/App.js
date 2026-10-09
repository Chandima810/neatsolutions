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
          <h1>PRO-CAPA NEXT LEVEL PROFESSIONAL EXPERIENCE</h1>
        </div>
        <p>Brain-Informed Structured Thinking – From Problems to Performance Advancement</p>
      </header>

      <main>
        {/* Sections */}
        <section
          className="section"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2>WELCOME TO THE WORKSHOP</h2>
          <p>
  This learning portal accompanies the professional development workshop.
  It introduces a practical way to understand problems, examine their causes,
  take appropriate corrective action and improve professional performance.
</p>

<p>
  Facilitator, Chandima Gunasena, BSc. (Agriculture), MSc in Green Technology,
  M.Phil in Integrated Water Resources Management, is a Solution Architect
  with experience in Small and Medium-Scale Industrial Development.
</p>
        </section>

        <section
          className="section alt"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>WHY BRAIN-INFORMED STRUCTURED THINKING?</h2>
          <p>
            <strong>Problem Solving:</strong> Professional problems are rarely solved by information alone. They require observation, questioning, analysis and deliberate decision-making.
          </p>
          <p>
            <strong>Brain Informed:</strong>Brain-informed structured thinking helps us move from immediate reaction to structured professional action.</p>
        </section>

        {/* Product Portfolio */}
        <section
          className="section side-by-side"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <div className="text">
            <h2>PRO-CAPA™ </h2>
              <p>
    PRO-CAPA™ (Professional Corrective Action & Performance Advancement)
    is a structured framework for turning workplace problems into opportunities
    for learning, corrective action and improved professional performance.
    It guides participants from understanding a problem to achieving and
    sustaining measurable improvement.
  </p>
            <ul>
    <li>Diagnose — Understand what is actually happening</li>
    <li>Analyse — Examine the evidence and contributing factors</li>
    <li>Identify Root Cause — Find the underlying cause</li>
    <li>Correct — Develop the appropriate corrective response</li>
    <li>Implement — Put the corrective action into practice</li>
    <li>Measure — Determine what has changed</li>
    <li>Verify — Confirm that the improvement is real and sustained</li>
    <li>Improve — Use learning to advance performance</li>
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
            <h2>FROM PROBLEM TO PERFORMANCE</h2>
            <p>
    Every problem represents a gap between the current condition and the
    desired condition. PRO-CAPA™ helps us convert that gap into a structured
    improvement journey — from identifying the problem to achieving measurable
    and sustainable performance improvement.
  </p>
            <ul>
    <li>Identify the Problem — Define what is actually wrong</li>
    <li>Understand the Current Condition — Gather facts and evidence</li>
    <li>Find the Root Cause — Look beyond the symptoms</li>
    <li>Take Corrective Action — Develop an appropriate solution</li>
    <li>Implement the Change — Convert the decision into action</li>
    <li>Measure the Result — Determine whether performance has improved</li>
    <li>Verify the Improvement — Confirm that the change is sustained</li>
    <li>Advance Performance — Learn, improve and move to the next level</li>
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
            <h2>PRACTICAL THINKING TOOLS</h2>
            <p>During the workshop, participants will practise structured thinking tools
    that help transform observations and problems into evidence-based decisions
    and practical actions.</p>

            <ul>
    <li>Problem Identification — Clearly define what needs attention</li>
    <li>Observation & Evidence — Separate facts from assumptions</li>
    <li>Problem Analysis — Examine the situation systematically</li>
    <li>Root Cause Analysis — Identify why the problem is occurring</li>
    <li>Corrective Action Planning — Decide what should be done</li>
    <li>Implementation Planning — Convert decisions into action</li>
    <li>Performance Measurement — Determine whether the action worked</li>
    <li>Verification & Improvement — Sustain and advance the result</li>
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
            <h2>FOUR PROFESSIONAL PATHWAYS</h2>
            <ul>
    <li>
      <strong>SME Owner</strong> — Improve business performance and solve
      operational bottlenecks.
    </li>

    <li>
      <strong>Executive / Leader</strong> — Improve decisions, leadership
      and organizational performance.
    </li>

    <li>
      <strong>Industrial Worker</strong> — Solve workplace problems
      systematically and contribute to continuous improvement.
    </li>

    <li>
      <strong>Shop / Self-employed Professional</strong> — Improve daily
      operations, productivity and income-generating activities.
    </li>
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
          <h2>WORKSHOP STUDY RESOURCES</h2>
          <p>
    Use this portal as your learning companion before, during and after the
    workshop. The resources are designed to help you understand the framework,
    practise structured thinking and apply your learning to real professional
    situations.
  </p>
          <ul>
    <li>
      <strong>Study Notes</strong> — Review the key concepts and principles
      introduced during the workshop.
    </li>

    <li>
      <strong>Case Study</strong> — Follow a practical problem through the
      PRO-CAPA™ process from diagnosis to performance advancement.
    </li>

    <li>
      <strong>Worksheets</strong> — Use structured worksheets to analyse your
      own problems and develop appropriate actions.
    </li>

    <li>
      <strong>Personal Transformation Card</strong> — Record your current
      situation, desired next level and planned actions.
    </li>

    <li>
      <strong>Practice Exercises</strong> — Strengthen your structured
      thinking by applying the framework to practical situations.
    </li>
  </ul>

  <p>
    The purpose is simple: <strong>learn the framework, practise the thinking,
    apply it to your work and create measurable improvement.</strong>
  </p>
        </section>

        {/* Photo Gallery with Lightbox */}
        <section
          className="section gallery"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2>Gallery</h2>
          <div className="image-grid">
            {nurseryImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Workshop Resource ${index + 1}`}
                onClick={() => setLightboxImage(src)}
                ref={(el) => setImageRef(el, index + 4)}
                className="hover-parallax shadow-lift"
              />
            ))}
          </div>
        </section>
                  {/* Books by Chandima Gunasena */}
         
<section
  className="section"
  ref={(el) => (sectionsRef.current[8] = el)}
>
  <div className="text">
    <h2>BOOKS BY CHANDIMA GUNASENA</h2>

    <p>
      These books provide additional reading for participants who wish to
      explore creative thinking, structured problem solving, environmental
      data, greenhouse gas monitoring and practical industrial improvement
      beyond the workshop.
    </p>

    {/* Book 1 */}
    <div className="book-card">
      <h3>Curiosity Builds a Creative Mind</h3>

      <p>
        <strong>
          Brain-Informed Innovation Framework
        </strong>
      </p>

      <p>
        <em>
          Curiosity Builds a Creative Mind</em> introduces a brain-informed
        approach to developing curiosity, creativity, structured thinking,
        systems thinking and innovation.
      </p>

      <p>
        The book explores how curiosity can lead to observation, questioning,
        creative thinking and practical innovation. It provides a foundation
        for developing a mindset capable of understanding complex challenges
        and creating meaningful solutions.
      </p>

      <p>
        <strong>Key themes:</strong>
        <br />
        Curiosity • Creative Thinking • Brain-Informed Learning •
        Systems Thinking • Innovation • Sustainability
      </p>

      <a
        href="https://www.amazon.com/dp/B0H73QWYBL"
        target="_blank"
        rel="noopener noreferrer"
        className="amazon-button"
      >
        Buy on Amazon
      </a>
    </div>

    {/* Book 2 */}
    <div className="book-card">
      <h3>From MRV to ISO Readiness</h3>

      <p>
        <strong>
          A Simple Factory Manager’s Guide to Environmental Data,
          GHG Monitoring and Certification Preparation
        </strong>
      </p>

      <p>
        Factories cannot improve what they do not measure.
      </p>

      <p>
        This book provides a simple and practical pathway for factory
        managers, environmental officers, engineers, accountants, production
        officers, consultants and SME owners who want to move from scattered
        factory records toward a reliable MRV system and ISO readiness.
      </p>

      <p>
        MRV means <strong>Monitoring, Reporting and Verification</strong>.
        In simple factory language, this means monitoring what happens inside
        the factory, reporting the information in a useful way, and verifying
        the records so that the data can be trusted.
      </p>

      <p>
        The guide shows how familiar factory records such as electricity
        bills, fuel invoices, water meter readings, waste records, production
        reports and logbooks can be converted into environmental data,
        greenhouse gas evidence and management information.
      </p>

      <p>
        <strong>Main pathway:</strong>
        <br />
        Measure → Report → Verify → Improve → Prepare for ISO
      </p>

      <p>
        The book covers practical approaches to factory-level MRV,
        environmental and GHG data sources, Scope 1 and Scope 2 emissions,
        Scope 3 concepts, evidence systems, ISO 14001 readiness and
        ISO 14064-1 GHG inventory preparation.
      </p>

      <p>
        It is particularly useful for small and medium factories that may
        not have large sustainability teams, expensive software or full-time
        consultants.
      </p>

      <p>
        <strong>Key themes:</strong>
        <br />
        MRV • Environmental Data • GHG Monitoring • Scope 1 &amp; 2 •
        Scope 3 • Evidence Management • ISO 14001 Readiness •
        ISO 14064-1 • Continuous Improvement
      </p>

      <a
        href="https://www.amazon.com/dp/B0H8MPBCTP"
        target="_blank"
        rel="noopener noreferrer"
        className="amazon-button"
      >
        Buy on Amazon
      </a>
    </div>

     {/* Book 3 */}
    <div className="book-card">
      <h3>PRO-CAPA™ — Professional Corrective Action &amp; Performance Advancement</h3>

      <p>
        <strong>
          Volume I | Brain-Informed Structured Thinking
        </strong>
      </p>

      <p>
        <em>PRO-CAPA™ — Professional Corrective Action &amp; Performance
    Advancement</em> introduces a structured approach to understanding
    professional problems, identifying their root causes, implementing
    corrective actions and advancing performance.
      </p>

      <p>
        The book presents a practical methodology that connects structured
    thinking with professional development. It guides readers through
    eight stages: Diagnose, Analyse, Identify Root Cause, Correct,
    Implement, Measure, Verify and Improve.
      </p>

      <p>
        <strong>Key themes:</strong>
        <br />
        Brain-Informed Thinking • Problem Diagnosis • Root Cause Analysis •
    Corrective Action • Implementation • Performance Measurement •
    Verification • Continuous Improvement
      </p>

      <a
        href="https://www.amazon.com/dp/B0HMFVY4R6"
        target="_blank"
        rel="noopener noreferrer"
        className="amazon-button"
      >
        Buy on Amazon
      </a>
    </div>

    <p>
      <strong>
        Together, these books reflect two complementary dimensions of
        professional development: developing the creative and structured
        mind, and applying structured thinking to real industrial and
        environmental challenges.
      </strong>
    </p>
  </div>
</section>

        {/* Contact Information */}
<section
  className="section alt"
  ref={(el) => (sectionsRef.current[9] = el)}
>
  <h2>WORKSHOP INFORMATION & SUPPORT</h2>

  <p>
    <strong>Facilitator:</strong> Chandima Gunasena
  </p>

  <p>
    <strong>Workshop:</strong> Brain-Informed Structured Thinking Framework
  </p>

  <p>
    <strong>Methodology:</strong> PRO-CAPA™ — Professional Corrective Action
    &amp; Performance Advancement
  </p>

  <p>
    <strong>Learning Portal:</strong>{" "}
    <a
      href="https://solutionswaterminds.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Solutions WaterMinds
    </a>
  </p>

  <p>
    This portal provides study materials and practical resources to support
    your learning before, during and after the workshop.
  </p>
</section>

</main>

<footer className="footer">
  <p>
    © 2026 Brain-Informed Structured Thinking Framework —
    Learn. Think. Apply. Improve.
  </p>
</footer>

{/* Lightbox */}
<div
  className={`lightbox-overlay ${lightboxImage ? "active" : ""}`}
  onClick={() => setLightboxImage(null)}
>
  {lightboxImage && (
    <img src={lightboxImage} alt="Workshop Resource" />
  )}
</div>
    </div>
  );
}