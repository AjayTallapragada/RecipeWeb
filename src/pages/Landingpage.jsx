import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import "../styles/Landing.css";
import "../styles/AboutPage.css";
import bg from "../assets/bg.png";

const data = [
  {
    id: 1,
    text: "What's in your fridge?",
    text2: "Discover recipes based on your ingredients",
    url: bg,
  },
];

// Accepts a prop for the scroll handler
function Section({ text, text2, url, onGetStarted }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1.05, 1.2]), {
    stiffness: 80,
    damping: 12,
  });

  const words = text.split(" ");

  return (
    <section className="image-section" ref={ref}>
      <motion.img
        src={url}
        alt={text}
        className="background-image"
        style={{ scale }}
      />
      <motion.h2
        className="image-text"
        initial={{ opacity: 0, y: 60, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
      >
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            className="word"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h2>
      <motion.div
        className="image-description"
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <p className="image-subtext">{text2}</p>
        <p className="platform-description">
          Our AI-powered platform helps you cook amazing dishes with just what’s in your fridge.
          Upload an image or enter ingredients manually, and we’ll generate smart, tasty recipes
          using cutting-edge object detection and language models.
        </p>
        {/* Get Started Button */}
        <button className="get-started-btn" onClick={onGetStarted}>
          Get Started
        </button>
      </motion.div>
    </section>
  );
}

export default function LandingPage() {
  // Reference to scroll target (Parallax container)
  const parallaxRef = useRef(null);

  // Handler for the "Get Started" button
  const handleGetStarted = () => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="landing-container">
        {data.map((item) => (
          <Section
            key={item.id}
            text={item.text}
            text2={item.text2}
            url={item.url}
            onGetStarted={handleGetStarted}
          />
        ))}
      </div>

      {/* Parallax About Section (give a ref) */}
      <div ref={parallaxRef}>
        <Parallax pages={1.5} style={{ top: '100vh', position: 'absolute' }}>
          <ParallaxLayer offset={0} speed={0.4}>
            <div className="info-section">
              <h1>Why We Built This</h1>
              <p>
                We built this platform to help reduce food waste and solve the everyday question:
                “What can I cook with what I already have?” Our goal is to make cooking smarter and easier.
              </p>
              <p>
                By combining AI, object detection, and recipe generation, we’ve created a tool that
                helps you save money, reduce food waste, and get creative with the ingredients in your fridge.
              </p>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
