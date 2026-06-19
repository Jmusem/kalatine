import "./Gallery.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/* IMAGES */
import scienceLab from "../../assets/images/scienceLab.jpeg";
import computerLab from "../../assets/images/computerLab.jpeg";
import dininghall from "../../assets/images/dininghall.jpeg";

import volleyball1 from "../../assets/images/volleyball.jpeg";
import volleyball2 from "../../assets/images/volleyball2.jpeg";
import volleyball3 from "../../assets/images/volleyball3.jpeg";
import volleyball4 from "../../assets/images/volleyball4.jpeg";
import volleyball5 from "../../assets/images/volleyball5.jpeg";
import chess from "../../assets/images/chess.jpeg";

import music1 from "../../assets/images/music.jpeg";
import music2 from "../../assets/images/music2.jpeg";
import music3 from "../../assets/images/music4.jpeg";

import fashion1 from "../../assets/images/fashion.jpeg";
import fashion2 from "../../assets/images/fashion2.jpeg";
import fashion3 from "../../assets/images/fashion3.jpeg";

import admin from "../../assets/images/adminBlock.jpeg";
import principal from "../../assets/images/principalsHouse.jpeg";

import staff1 from "../../assets/images/staff1.jpeg";
import staff2 from "../../assets/images/staff2.jpeg";
import staff3 from "../../assets/images/hod-science.jpeg";
import staff4 from "../../assets/images/staff4.jpeg";
import staff5 from "../../assets/images/staff5.jpeg";
/* SPECIAL EVENTS */
import event1 from "../../assets/images/event1.jpeg";
import event2 from "../../assets/images/event2.jpeg";
import event3 from "../../assets/images/event3.jpeg";
import event4 from "../../assets/images/event4.jpeg";


/* =========================
   SLIDER
========================= */
function Slider({ images, speed = 3500 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, speed);

    return () => clearInterval(timer);
  }, [images, speed]);

  return (
    <div className="slider-wrapper">

      <motion.div
        key={index}
        className="slider-image"
        style={{ backgroundImage: `url(${images[index]})` }}
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="slider-overlay" />

      <div className="dots">
        {images.map((_, i) => (
          <span key={i} className={i === index ? "active-dot" : ""} />
        ))}
      </div>

    </div>
  );
}

/* =========================
   DATA
========================= */
const gallerySections = [
  {
    title: "Science & Innovation",
    desc: "Hands-on experimentation and discovery in modern labs.",
    images: [scienceLab, computerLab]
  },

  {
    title: "Sports Excellence",
    desc: "Teamwork, discipline and competitive spirit in action.",
    images: [volleyball1, volleyball2, volleyball3, volleyball4, volleyball5,chess]
  },

  {
    title: "Creative Arts",
    desc: "Music, fashion and creativity shaping student expression.",
    images: [music1, music2, music3, fashion1, fashion2, fashion3]
  },

  {
    title: "Administration & Leadership",
    desc: "The backbone of school structure and excellence.",
    images: [admin, principal]
  },

  {
    title: "Staff & Community",
    desc: "Dedicated educators guiding student success.",
    images: [staff1, staff2, staff3, staff4, staff5]
  }
];

/* =========================
   SPECIAL EVENTS
========================= */
const events = {
  title: "Special Events & Celebrations",
  desc: "Moments that define school spirit, achievement and unity.",
  images: [event1, event2, event3, event4]
};

/* =========================
   MAIN
========================= */
function Gallery() {
  return (
    <section className="gallery" section id="gallery">

      {/* HEADER */}
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <span className="badge">School Life</span>
        <h2>Our Visual Journey</h2>
        <p>
          A cinematic showcase of academics, sports, leadership,
          innovation and unforgettable moments.
        </p>
      </motion.div>

      {/* =========================
          SPECIAL EVENTS (HERO)
      ========================= */}
      <motion.div
        className="events-section"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <h3>{events.title}</h3>
        <p>{events.desc}</p>

        {/* slower cinematic slider */}
        <Slider images={events.images} speed={5000} />
      </motion.div>

      {/* =========================
          NORMAL SECTIONS
      ========================= */}
      <div className="gallery-container">

        {gallerySections.map((section, i) => (
          <motion.div
            className="gallery-section-card"
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
          >

            <div className="section-text">
              <h3>{section.title}</h3>
              <p>{section.desc}</p>
            </div>

            <Slider images={section.images} />

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Gallery;