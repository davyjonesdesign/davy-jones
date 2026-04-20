import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';


// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navigation />
        <main role="main">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:alias" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Navigate to="/work" replace />} />
              <Route path="/projects" element={<Navigate to="/work" replace />} />
              <Route path="/resume" element={<Navigate to="/about" replace />} />
              <Route path="*" element={<NotFound />} />

            </Routes>
          </PageTransition>
        </main>
      </div>
    </Router>
  );
}

export default App;