import "./Clubs.css";
import * as Tabs from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

/* IMAGES */
import volleyball1 from "../../assets/images/volleyball.jpeg";
import volleyball2 from "../../assets/images/volleyball2.jpeg";
import volleyball3 from "../../assets/images/volleyball3.jpeg";

import music1 from "../../assets/images/music.jpeg";
import music2 from "../../assets/images/music2.jpeg";

import fashion from "../../assets/images/fashion.jpeg";
import fashion2 from "../../assets/images/fashion2.jpeg";
import fashion3 from "../../assets/images/fashion3.jpeg";


import cu1 from "../../assets/images/cu.jpeg";
import cu2 from "../../assets/images/cu2.jpeg";

import scout1 from "../../assets/images/scout.jpeg";
import scout2 from "../../assets/images/scout2.jpeg";

/* =========================
   IMAGE SLIDER (FIXED)
========================= */
function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="image-slider">

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="slide"
          style={{ backgroundImage: `url(${images[current]})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
        />
      </AnimatePresence>

      <div className="slider-overlay" />

      <div className="slider-dots">
        {images.map((_, i) => (
          <span key={i} className={i === current ? "active-dot" : ""} />
        ))}
      </div>

    </div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */
function Clubs() {

  const games = [
    {
      title: "Volleyball",
      images: [volleyball1, volleyball2, volleyball3],
      description:
        "Building teamwork, discipline, fitness and excellence through competitive sports."
    }
  ];

  const clubs = [
    {
      title: "Music Club",
      images: [music1, music2],
      description:
        "Developing creativity, performance confidence and musical talent."
    }
    ,
    {
      title: "Fashion Club",
      images: [fashion, fashion2, fashion3],    
      description:
        "Fostering creativity, design skills and self-expression through fashion."  

    }
  ];

  const societies = [
    {
      title: "Christian Union",
      images: [cu1, cu2],
      description:
        "Spiritual growth, mentorship and leadership development."
    },
    {
      title: "Scouts",
      images: [scout1, scout2],
      description:
        "Discipline, resilience, teamwork and community service."
    }
  ];

  const renderCards = (items, label) => (
    <motion.div
      className="activities-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="activity-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -10 }}
        >

          <div className="activity-image">
            <ImageSlider images={item.images} />
            <div className="image-tag">{label}</div>
          </div>

          <div className="activity-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>

        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section className="clubs-section" id="clubs">

      <motion.div className="clubs-header">
        <span className="section-badge">Student Life</span>

        <h2>Clubs, Games & Societies</h2>

        <p>
          We nurture talent, leadership and creativity through
          sports, clubs and societies that build holistic learners.
        </p>
      </motion.div>

      <Tabs.Root defaultValue="games">

        <Tabs.List className="tabs-list">
          <Tabs.Trigger value="games">Games</Tabs.Trigger>
          <Tabs.Trigger value="clubs">Clubs</Tabs.Trigger>
          <Tabs.Trigger value="societies">Societies</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="games">
          {renderCards(games, "Games")}
        </Tabs.Content>

        <Tabs.Content value="clubs">
          {renderCards(clubs, "Clubs")}
        </Tabs.Content>

        <Tabs.Content value="societies">
          {renderCards(societies, "Societies")}
        </Tabs.Content>

      </Tabs.Root>

    </section>
  );
}

export default Clubs;