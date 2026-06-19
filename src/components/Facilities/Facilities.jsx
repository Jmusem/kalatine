import "./Facilities.css";
import { motion } from "framer-motion";

/* IMAGES */
import scienceLab from "../../assets/images/scienceLab.jpeg";
import dininghall from "../../assets/images/dininghall.jpeg";
import computerLab from "../../assets/images/computerLab.jpeg";
import adminBlock from "../../assets/images/adminBlock.jpeg";
import tuitionBlock from "../../assets/images/tuitionBlock.jpeg";
import homeScience from "../../assets/images/homeScience.jpeg";
import principalsHouse from "../../assets/images/principalsHouse.jpeg";
import maliliHouse from "../../assets/images/maliliHouse.jpeg";
import bensonmutio from "../../assets/images/bensonmutio.jpeg";

function Facilities() {

  const facilities = [
    {
      title: "Administration Block",
      image: adminBlock,
      description:
        "The operational hub of the school where administration, leadership and student support services are coordinated."
    },
    {
      title: "Science Laboratory",
      image: scienceLab,
      description:
        "A modern laboratory equipped for experiments, scientific discovery and innovation-based learning."
    },
    {
      title: "Dining Hall",
      image: dininghall,
      description:
        "A spacious, clean and organized dining facility ensuring student comfort and well-being."
    },
    {
      title: "Computer Laboratory",
      image: computerLab,
      description:
        "A digital learning hub supporting ICT skills, research and technological literacy."
    },
    {
      title: "Tuition Block",
      image: tuitionBlock,
      description:
        "Dedicated academic classrooms designed for effective teaching and focused learning."
    },
    {
      title: "Home Science Laboratory",
      image: homeScience,
      description:
        "A developing facility enhancing practical skills in nutrition, textiles and home management."
    },
    {
      title: "Principal's House",
      image: principalsHouse,
      description:
        "Official residence supporting leadership presence and smooth school operations."
    },
    {
      title: "Malili House",
      image: maliliHouse,
      description:
        "A residential facility supporting institutional accommodation and school structure."
    },
    {
      title: "Benson Mutio House",
      image: bensonmutio,
      description:
        "A landmark facility named in honor of the school founder, supporting institutional heritage."
    }
  ];

  return (
    <section className="facilities" section id="facilities">

      {/* FLOATING BACKGROUND ELEMENTS */}
      <div className="floating-circle circle1" />
      <div className="floating-circle circle2" />
      <div className="floating-circle circle3" />

      {/* HEADER */}
      <motion.div
        className="facilities-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge">School Infrastructure</span>

        <h2>State-of-the-Art Facilities</h2>

        <p>
          Our school provides a modern, secure and inspiring environment
          designed to support academic excellence and holistic development.
        </p>
      </motion.div>

      {/* STATS */}
      <div className="facility-stats">
        <div>
          <h3>9+</h3>
          <p>Facilities</p>
        </div>
        <div>
          <h3>2</h3>
          <p>Laboratories</p>
        </div>
        <div>
          <h3>100%</h3>
          <p>Student Access</p>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="facilities-timeline">

        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            className={`facility-card ${
              index % 2 === 0 ? "left" : "right"
            }`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -120 : 120,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          >

            {/* TIMELINE NODE */}
            <div className="timeline-node">
              {index + 1}
            </div>

            {/* IMAGE */}
            <div className="facility-image">
              <img src={facility.image} alt={facility.title} />
            </div>

            {/* CONTENT */}
            <div className="facility-content">

              <span className="facility-badge">
                School Facility
              </span>

              <h3>{facility.title}</h3>

              <p>{facility.description}</p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Facilities;