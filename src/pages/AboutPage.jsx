import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion } from 'framer-motion';
import '../styles/AboutPage.css';
import whyBg from '../assets/whybg.jpg'; // update path if needed
import ModelViewer from '../components/ModelViewer'; // adjust path if needed

const AboutPage = () => {
  return (
    <Parallax pages={3} style={{ top: '100vh', position: 'absolute' }}>
      
      {/* About Section */}
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="about-section">
          <h1>About the Website</h1>
          <p>
            We built this to solve a common daily struggle — not knowing what to cook with what's left in the fridge...
          </p>
        </div>
      </ParallaxLayer>

      {/* Why Section */}
      <ParallaxLayer offset={1} speed={0.3}>
        <div
          className="why-section"
          style={{
            backgroundImage: `url(${whyBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="why-content">
            <h1>Why We Built This</h1>
            <p>
              We built this platform to help reduce food waste and solve the everyday question:
              “What can I cook with what I already have?” Our goal is to make cooking smarter and easier.
              <br /><br />
              By combining AI, object detection, and recipe generation, we’ve created a tool that helps
              you save money, reduce food waste, and get creative with the ingredients in your fridge.
            </p>
          </div>
        </div>
      </ParallaxLayer>

      {/* 3D Models Section */}
      <ParallaxLayer offset={2} speed={0.3}>
        <motion.div
          className="model-section"
          initial={{ y: 200, opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <ModelViewer />
        </motion.div>
      </ParallaxLayer>

    </Parallax>
  );
};

export default AboutPage;
