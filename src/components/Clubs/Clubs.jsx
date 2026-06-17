import "./Clubs.css";
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
   IMAGE SLIDER
========================= */
function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

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
          transition={{ duration: 0.8 }}
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
   MAIN
========================= */
function Clubs() {

  const clubs = [
    {
      title: "Volleyball",
      category: "Sports",
      members: 45,
      meeting: "Tue & Thu • 4:00 PM",
      achievement: "County Competitions",
      images: [volleyball1, volleyball2, volleyball3],
      description:
        "Building teamwork, fitness, discipline and sports excellence."
    },

    {
      title: "Music Club",
      category: "Creative Arts",
      members: 30,
      meeting: "Wednesday • 4:00 PM",
      achievement: "Music Festivals",
      images: [music1, music2],
      description:
        "Developing creativity, confidence and performance skills."
    },

    {
      title: "Fashion Club",
      category: "Creative Arts",
      members: 22,
      meeting: "Friday • 4:00 PM",
      achievement: "Fashion Showcase",
      images: [fashion, fashion2, fashion3],
      description:
        "Fostering creativity and self-expression through design."
    },

    {
      title: "Christian Union",
      category: "Leadership",
      members: 60,
      meeting: "Saturday • 2:00 PM",
      achievement: "Spiritual Growth",
      images: [cu1, cu2],
      description:
        "Building faith, leadership and mentorship."
    },

    {
      title: "Scouts",
      category: "Leadership",
      members: 35,
      meeting: "Saturday • 10:00 AM",
      achievement: "Community Service",
      images: [scout1, scout2],
      description:
        "Building resilience, teamwork and practical skills."
    }
  ];

  const filters = ["All", "Sports", "Creative Arts", "Leadership"];

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredClubs =
    activeFilter === "All"
      ? clubs
      : clubs.filter((c) => c.category === activeFilter);

  return (
    <section className="clubs-section" id="clubs">

      {/* HEADER */}
      <div className="clubs-header">

        <span className="section-badge">Student Life</span>

        <h2>Clubs & Societies</h2>

        <p>
          A vibrant co-curricular ecosystem where students grow
          in talent, leadership, creativity and discipline.
        </p>

      </div>

      {/* FILTERS */}
      <div className="filter-container">

        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${
              activeFilter === filter ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}

      </div>

      {/* CARDS */}
      <div className="activities-grid">

        {filteredClubs.map((club, index) => (
          <motion.div
            key={index}
            className="activity-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
          >

            <div className="activity-image">

              <ImageSlider images={club.images} />

              <div className="club-category">
                {club.category}
              </div>

            </div>

            <div className="activity-content">

              <h3>{club.title}</h3>

              <p>{club.description}</p>

              <div className="club-stats">

                <div>
                  <strong>{club.members}</strong>
                  <span>Members</span>
                </div>

                <div>
                  <strong>Weekly</strong>
                  <span>Meetings</span>
                </div>

              </div>

              <div className="club-info">

                <p>📅 {club.meeting}</p>
                <p>🏆 {club.achievement}</p>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Clubs;