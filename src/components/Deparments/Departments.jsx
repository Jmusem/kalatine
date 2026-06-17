import "./Deparments.css";
import { motion } from "framer-motion";

import scienceHod from "../../assets/images/hod-science.jpeg";
import gamesHod from "../../assets/images/games-hod.jpeg";

function Departments() {

  const departments = [
    {
      id: "science",
      title: "Science Department",
      tagline: "Innovation • Discovery • Excellence",
      side: "left",
      hod: {
        name: "",
        title: "Head of Science Department",
        experience: "",
        image: scienceHod,
        statement:
          "The Science Department nurtures curiosity, experimentation, and innovation. We focus on hands-on learning where learners explore real-world problems through science and technology."
      },
      highlight:
        "Driven by curiosity and powered by experimentation, Science transforms learners into problem solvers of the future."
    },

    {
      id: "games",
      title: "Games Department",
      tagline: "Discipline • Talent • Teamwork",
      side: "right",
      hod: {
        name: "Coach ",
        title: "Head of Games & Sports",
        experience: "",
        image: gamesHod,
        statement:
          "The Games Department promotes discipline, teamwork, and resilience through sports. Students build confidence, leadership, and lifelong physical fitness through structured sporting activities."
      },
      highlight:
        "Through sports, students build discipline, unity, and mental strength that extends beyond the field."
    }
  ];

  return (
    <section className="departments" id="departments">

      {/* HEADER */}
      <motion.div
        className="dept-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2>Academic Departments</h2>
        <p>Where Knowledge, Talent & Excellence Interconnect</p>
      </motion.div>

      {/* CENTRAL CONNECTOR LINE */}
      <div className="dept-line" />

      {/* TIMELINE */}
      <div className="dept-timeline">

        {departments.map((dept, index) => (
          <motion.div
            key={dept.id}
            className={`dept-card ${dept.side}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >

            {/* DOT CONNECTOR */}
            <div className="dept-dot" />

            {/* IMAGE */}
            <div className="hod-image">
              <img src={dept.hod.image} alt={dept.hod.name} />
            </div>

            {/* CONTENT */}
            <div className="dept-content">

              <span className="badge">Department Head</span>

              <h3>{dept.title}</h3>
              <p className="tagline">{dept.tagline}</p>

              <h4>{dept.hod.name}</h4>
              <p className="role">{dept.hod.title}</p>

              <p className="statement">
                {dept.hod.statement}
              </p>

              {/* INTERLINKED HIGHLIGHT */}
              <div className="dept-highlight">
                <span>Connecting Idea</span>
                <p>{dept.highlight}</p>
              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Departments;