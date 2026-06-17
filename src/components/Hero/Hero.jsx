import "./Hero.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../assets/images/school1.jpg";
import img2 from "../../assets/images/school5.jpg";
import img3 from "../../assets/images/school4.jpeg";

function Hero() {

    const slides = [img1, img2, img3];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero" id="home">

            {/* BACKGROUND SLIDES */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    className="hero-bg"
                    style={{ backgroundImage: `url(${slides[current]})` }}
                    initial={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
                    transition={{ duration: 1.2 }}
                />
            </AnimatePresence>

            <div className="overlay" />

{/* CONTENT */}
<div className="hero-content container">

    

    {/* Title */}
    <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
    >
        The Alliance of <span>Mumoni</span>
    </motion.h1>

   

    {/* OFFICIAL IDENTITY BLOCK (UPDATED ACCURATE TEXT) */}
    <motion.div
        className="identity-block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
    >

        <div className="identity-item">
            <span>School Vision</span>
            <p>Quality Education for Self Reliance</p>
        </div>

        <div className="identity-item">
            <span>School Mission</span>
            <p>
                To be a centre of excellence providing quality lifelong education
                for sustainable development and responsible citizenship
            </p>
        </div>

        <div className="identity-item">
            <span>School Motto</span>
            <p>Hard Work Pays</p>
        </div>

    </motion.div>

    {/* BUTTONS */}


   <motion.div
    className="hero-buttons"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
>

    <a href="#about">
        <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
        >
            Explore School
        </motion.button>
    </a>

    <motion.button
        className="btn-secondary"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
    >
        Apply Now
    </motion.button>


    </motion.div>


            </div>
        </section>
    );
}

export default Hero;