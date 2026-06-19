import "./About.css";
import { motion } from "framer-motion";

/* IMAGES */
import principal from "../../assets/images/staff4.jpeg";
import bomChair from "../../assets/images/bom.jpeg";
import pta from "../../assets/images/pta.jpeg";
import staff1 from "../../assets/images/staff1.jpeg";
import staff2 from "../../assets/images/staff2.jpeg";

function About() {
    return (
        <section className="about" id="about">

            {/* HEADER */}
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2>About Our School</h2>
                <p>Nurturing Excellence, Leadership and Character Since 2011</p>
            </motion.div>

            {/* STORY */}
            <div className="story-section">

                <motion.div
                    className="story-content"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-tag">Our Journey</span>

                    <h3>A Legacy of Growth and Excellence</h3>

                    <p>
                        Founded in 2011, Kalatine Girls Secondary School
                        has grown into a center of academic excellence,
                        leadership development, and holistic education.
                    </p>

                    <p>
                        We nurture disciplined, confident and responsible
                        learners prepared for national and global impact.
                    </p>
                </motion.div>

                <motion.div
                    className="timeline"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h4>Leadership Timeline</h4>

                    <div className="timeline-item">
                        <span>2011 - 2013</span>
                        <p>Mrs. Muthengi Faith</p>
                    </div>

                    <div className="timeline-item">
                        <span>2013 - 2018</span>
                        <p>Mrs. Muthui Anastacia</p>
                    </div>

                    <div className="timeline-item">
                        <span>2019 - 2022</span>
                        <p>Ms. Mugo Catherine</p>
                    </div>

                    <div className="timeline-item">
                        <span>2023 - Present</span>
                        <p>Mrs. Bonface Phyllis</p>
                    </div>
                </motion.div>

            </div>

            {/* =========================
               SCHOOL LEADERSHIP
            ========================= */}
            <div className="leadership-section">

                <motion.h3>School Leadership</motion.h3>

                <div className="leadership-grid">

                    <motion.div className="leader-card" whileHover={{ y: -10 }}>
                        <img src={principal} alt="Principal" />
                        <div className="leader-info">
                            <span>Principal</span>
                            <h4>Mrs. Bonface Phyllis</h4>
                            <p>Academic excellence and student development leadership.</p>
                        </div>
                    </motion.div>

                    <motion.div className="leader-card" whileHover={{ y: -10 }}>
                        <img src={bomChair} alt="BOM Chair" />
                        <div className="leader-info">
                            <span>Board of Management</span>
                            <h4>Jeffrey Kyalo Musya</h4>
                            <p>Strategic governance and institutional oversight.</p>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* =========================
               PTA SECTION
            ========================= */}
            <div className="leadership-section">

                <motion.h3>Parents Teachers Association (PTA)</motion.h3>

                <div className="leadership-grid">

                    <motion.div className="leader-card" whileHover={{ y: -10 }}>
                        <img src={pta} alt="PTA" />
                        <div className="leader-info">
                            <span>PTA Leadership</span>
                            <h4>Parent–Teacher Collaboration</h4>
                            <p>
                                Strengthening communication and cooperation
                                between parents and teachers for student success.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* =========================
               TEACHING STAFF ONLY
            ========================= */}
            <div className="leadership-section">

                <motion.h3>Teaching Staff</motion.h3>

                <div className="leadership-grid">

                    <motion.div className="leader-card" whileHover={{ y: -10 }}>
                        <img src={staff1} alt="Teaching Staff" />
                        <div className="leader-info">
                            <span>Teaching Staff</span>
                            <h4>Academic Team</h4>
                            <p>
                                Qualified and dedicated teachers committed to
                                academic excellence and mentorship.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div className="leader-card" whileHover={{ y: -10 }}>
                        <img src={staff2} alt="Teaching Staff" />
                        <div className="leader-info">
                            <span>Teaching Staff</span>
                            <h4>Subject Specialists</h4>
                            <p>
                                Experts guiding learners through practical and
                                theoretical academic excellence.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* STATS */}
            <div className="stats-section">

                <div className="stat-box">
                    <h3>185+</h3>
                    <p>Students</p>
                </div>

                <div className="stat-box">
                    <h3>10</h3>
                    <p>Teachers</p>
                </div>

                <div className="stat-box">
                    <h3>6</h3>
                    <p>County Participation</p>
                </div>

            </div>

            {/* VALUES */}
            <div className="values-section">

                <h3>Core Values</h3>

                <div className="values-grid">

                    {[
                        "Team Work",
                        "Integrity",
                        "Respect",
                        "Excellence",
                        "Discipline",
                        "Resilience"
                    ].map((value, index) => (
                        <motion.div
                            key={index}
                            className="value-pill"
                            whileHover={{ scale: 1.08, y: -5 }}
                        >
                            {value}
                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default About;