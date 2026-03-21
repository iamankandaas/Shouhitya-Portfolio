import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import BrandView from './components/BrandView';
import ProjectDetail from './components/ProjectDetail';
import MainMenu from './components/MainMenu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MeshGradient from './components/MeshGradient';
import { portfolioData } from './mock/mockData';
import './App.css';

// Scroll to top on route change (except when returning to home with scrollToKeypad)
const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    if (!location.state?.scrollToKeypad) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return null;
};

// Global Keypad Listener
const KeypadListener = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Only listen on specific pages
      if (location.pathname.includes('/project/')) return;

      switch (e.key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
          navigate(`/brand/${e.key}`);
          break;
        case '0':
          navigate('/', { state: { scrollToKeypad: true } });
          break;
        case '*':
          navigate('/about');
          break;
        case '#':
          navigate('/contact');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate, location]);

  return null;
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Hero />
      <Footer data={portfolioData.personal} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MeshGradient />
      <BrowserRouter>
        <ScrollToTop />
        <KeypadListener />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<><About /><Footer data={portfolioData.personal} /></>} />
          <Route path="/brand/:brandId" element={<BrandView />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/contact" element={<><Contact /><Footer data={portfolioData.personal} /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
