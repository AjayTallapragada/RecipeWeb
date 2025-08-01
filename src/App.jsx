import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Landingpage from './pages/Landingpage';
import Navbar from './components/Navbar';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import StrawberryScene from "./components/StrawberryScene";

function App() {
  // Simple loading logic (customize the delay as needed)
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLanding(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!showLanding) return <LoadingScreen />;

  return (
    <>
      <div style={{ width: "100vw", height: "100vh", position: "fixed", zIndex: 0 }}>
        <StrawberryScene />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
