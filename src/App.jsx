import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Landingpage from './pages/Landingpage';
import Navbar from './components/Navbar';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';

function App() {
  const [showLanding, setShowLanding] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(true);
      navigate('/'); // 🔁 Force redirect to landing page
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (!showLanding) return <LoadingScreen />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
