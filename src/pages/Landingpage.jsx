import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "../styles/Landing.css";
import bg from "../assets/bg.png";
import bg2 from "../assets/bg2.jpg";

const data = [
    {
        id: 1,
        text: "Whats in your fridge?",
        text2 : "Discover recipes based on your ingredients",
        url: bg,
    },
];

function Section({ text, text2, url, showButtons }) {
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

      <motion.p
        className="image-subtext"
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          color: 'white',
          fontSize: '1.5rem',
          textAlign: 'center',
          marginTop: '1rem',
          textShadow: '0 2px 8px rgba(0,0,0,0.4)'
        }}
      >
        {text2}
      </motion.p>

      <motion.p
        className="platform-description"
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          color: 'white',
          fontSize: '1.15rem',
          textAlign: 'center',
          marginTop: '1.5rem',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textShadow: '0 2px 8px rgba(0,0,0,0.4)'
        }}
      >
        Our AI-powered platform helps you cook amazing dishes with just what’s in your fridge.
        Upload an image or enter ingredients manually and we’ll generate smart, tasty recipes
        using cutting-edge object detection and language models.
      </motion.p>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="landing-container">
      {data.map((item, index) => (
        <Section
          key={item.id}
          text={item.text}
          url={item.url}
          showButtons={index === data.length - 1}
        />
      ))}
    </div>
  );
}
