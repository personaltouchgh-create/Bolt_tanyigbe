import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import DonationModal from './components/DonationModal';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import GoodwillMessage from './pages/GoodwillMessage';
import Culture from './pages/Culture';
import Development from './pages/Development';
import Diaspora from './pages/Diaspora';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import TanyigbeAnyigbe from './pages/divisions/TanyigbeAnyigbe';
import TanyigbeEtoe from './pages/divisions/TanyigbeEtoe';
import TanyigbeAtidze from './pages/divisions/TanyigbeAtidze';
import TanyigbeDzafe from './pages/divisions/TanyigbeDzafe';
import Login from './pages/admin/Login';
import SignUp from './pages/admin/SignUp';
import Dashboard from './pages/admin/Dashboard';
import Categories from './pages/admin/Categories';
import Tags from './pages/admin/Tags';
import GalleryManagement from './pages/admin/GalleryManagement';
import PostsManagement from './pages/admin/PostsManagement';
import PostEditor from './pages/admin/PostEditor';
import PageManagement from './pages/admin/PageManagement';
import RoleManagement from './pages/admin/RoleManagement';

function App() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/signup" element={<SignUp />} />

          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="pages" element={<PageManagement />} />
                    <Route path="roles" element={<RoleManagement />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="tags" element={<Tags />} />
                    <Route path="gallery" element={<GalleryManagement />} />
                    <Route path="posts" element={<PostsManagement />} />
                    <Route path="posts/new" element={<PostEditor />} />
                    <Route path="posts/:postId" element={<PostEditor />} />
                  </Routes>
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={
              <MainLayout onDonateClick={() => setIsDonationModalOpen(true)}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/about/goodwill-message" element={<GoodwillMessage />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/culture" element={<Culture />} />
                  <Route path="/divisions/anyigbe" element={<TanyigbeAnyigbe />} />
                  <Route path="/divisions/etoe" element={<TanyigbeEtoe />} />
                  <Route path="/divisions/atidze" element={<TanyigbeAtidze />} />
                  <Route path="/divisions/dzafe" element={<TanyigbeDzafe />} />
                  <Route path="/development" element={<Development />} />
                  <Route path="/diaspora" element={<Diaspora />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </MainLayout>
            }
          />
        </Routes>

        <DonationModal
          isOpen={isDonationModalOpen}
          onClose={() => setIsDonationModalOpen(false)}
        />
      </Router>
    </AuthProvider>
  );
}

export default App;
