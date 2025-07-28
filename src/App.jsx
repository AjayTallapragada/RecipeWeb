import { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/Landingpage';
import LoadingScreen from './components/LoadingScreen';
import './styles/LoadingScreen.css';


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
          <LandingPage />
        </>
      )}
    </>
  );
}

export default App;