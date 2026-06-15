import "./About.css";
import { motion } from "framer-motion";

import principal from "../../assets/images/principal1.jpeg";
import bomChair from "../../assets/images/bom.jpeg";

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
                <p>
                    Nurturing Excellence, Leadership and Character Since 2011
                </p>
            </motion.div>

            {/* SCHOOL STORY */}
            <div className="story-section">

                <motion.div
                    className="story-content"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-tag">
                        Our Journey
                    </span>

                    <h3>
                        A Legacy of Growth and Excellence
                    </h3>

                    <p>
                        Founded in 2011 by the local community intiated by Mr Benson Mukiti Mutio, Kalatine Girls
                        Secondary School was established to provide quality
                        education opportunities for girls in the then Kyuso
                        Sub-County, currently Mumoni Sub-County.
                    </p>

                    <p>
                        Beginning with only 8 students and 2 teachers,
                        the institution has grown into a respected centre
                        of academic excellence, leadership development,
                        and holistic education.
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
                        <span>2023 - Apr 2024</span>
                        <p>Mrs. Manzi Philomena</p>
                    </div>

                    <div className="timeline-item">
                        <span>Apr 2024 - Present</span>
                        <p>Mrs. Bonface Phyllis</p>
                    </div>
                </motion.div>

            </div>

            {/* LEADERSHIP */}
            <div className="leadership-section">

                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    School Leadership
                </motion.h3>

                <div className="leadership-grid">

                    {/* Principal */}
                    <motion.div
                        className="leader-card"
                        whileHover={{ y: -10 }}
                    >
                        <img
                            src={principal}
                            alt="Principal"
                        />

                        <div className="leader-info">
                            <span>Principal</span>

                            <h4>Mrs. Bonface Phyllis</h4>

                            <p>
                                Leading the institution towards academic
                                excellence, discipline and holistic
                                student development.
                            </p>
                        </div>
                    </motion.div>

                    {/* BOM Chair */}
                    <motion.div
                        className="leader-card"
                        whileHover={{ y: -10 }}
                    >
                        <img
                            src={bomChair}
                            alt="BOM Chair"
                        />

                        <div className="leader-info">
                            <span>Board of Management Chairperson</span>

                            <h4>Jeffrey Kyalo musya</h4>

                            <p>
                                Providing governance, strategic direction,
                                and institutional oversight for sustainable
                                growth.
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
                        "Continuous Improvement",
                        "Respect",
                        "Integrity",
                        "Efficiency",
                        "Resilience",
                        "Diligence"
                    ].map((value, index) => (
                        <motion.div
                            key={index}
                            className="value-pill"
                            whileHover={{
                                scale: 1.08,
                                y: -5
                            }}
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