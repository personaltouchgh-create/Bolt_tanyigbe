import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DonationModal from './components/DonationModal';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import GoodwillMessage from './pages/GoodwillMessage';
import Culture from './pages/Culture';
import TraditionalGovernance from './pages/TraditionalGovernance';
import NorduFestival from './pages/NorduFestival';
import Tayafest from './pages/Tayafest';
import Development from './pages/Development';
import Diaspora from './pages/Diaspora';
import Tourism from './pages/Tourism';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import TanyigbeAnyigbe from './pages/divisions/TanyigbeAnyigbe';
import TanyigbeEtoe from './pages/divisions/TanyigbeEtoe';
import TanyigbeAtidze from './pages/divisions/TanyigbeAtidze';
import TanyigbeDzafe from './pages/divisions/TanyigbeDzafe';

function App() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <Router>
      <MainLayout
        onDonateClick={() => setIsDonationModalOpen(true)}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/goodwill-message" element={<GoodwillMessage />} />
          <Route path="/history" element={<History />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/culture/governance" element={<TraditionalGovernance />} />
          <Route path="/culture/nordu-festival" element={<NorduFestival />} />
          <Route path="/culture/tayafest" element={<Tayafest />} />
          <Route path="/divisions/anyigbe" element={<TanyigbeAnyigbe />} />
          <Route path="/divisions/etoe" element={<TanyigbeEtoe />} />
          <Route path="/divisions/atidze" element={<TanyigbeAtidze />} />
          <Route path="/divisions/dzafe" element={<TanyigbeDzafe />} />
          <Route path="/development" element={<Development />} />
          <Route path="/diaspora" element={<Diaspora />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </Router>
  );
}

export default App;
