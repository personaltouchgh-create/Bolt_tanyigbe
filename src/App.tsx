import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DonationModal from './components/DonationModal';
import VolunteerModal from './components/VolunteerModal';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Culture from './pages/Culture';
import Development from './pages/Development';
import Diaspora from './pages/Diaspora';
import Tourism from './pages/Tourism';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  return (
    <Router>
      <MainLayout
        onDonateClick={() => setIsDonationModalOpen(true)}
        onVolunteerClick={() => setIsVolunteerModalOpen(true)}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/development" element={<Development />} />
          <Route path="/diaspora" element={<Diaspora />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />

      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />
    </Router>
  );
}

export default App;
