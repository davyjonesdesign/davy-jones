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
import { portfolioData } from './data/portfolioData';

const DEFAULT_TITLE = 'Davy Jones | Design Systems Lead and UX Engineer';
const DEFAULT_DESCRIPTION = 'Staff-level UX/UI Designer specializing in enterprise design systems, UX engineering, and AI-assisted interfaces.';

function setMetaDescription(content) {
  const tag = document.querySelector('meta[name="description"]');
  if (tag) {
    tag.setAttribute('content', content);
  }
}

function getPageMetadata(pathname) {
  if (pathname === '/') {
    return {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION
    };
  }

  if (pathname === '/about') {
    return {
      title: 'About | Davy Jones',
      description: 'Experience, leadership background, and approach to enterprise UX, design systems, and cross-functional product collaboration.'
    };
  }

  if (pathname === '/work') {
    return {
      title: 'Work | Davy Jones',
      description: 'Case studies spanning enterprise design systems, UX engineering initiatives, and AI-assisted product concepts.'
    };
  }

  if (pathname === '/contact') {
    return {
      title: 'Contact | Davy Jones',
      description: 'Connect with Davy Jones for staff-level UX/UI design, design systems leadership, and UX engineering opportunities.'
    };
  }

  if (pathname.startsWith('/work/')) {
    const alias = pathname.replace('/work/', '');
    const project = portfolioData.find((item) => item.alias === alias);

    if (project) {
      return {
        title: `${project.title} | Davy Jones`,
        description: project.subtitle || DEFAULT_DESCRIPTION
      };
    }
  }

  return {
    title: 'Page Not Found | Davy Jones',
    description: DEFAULT_DESCRIPTION
  };
}

// Scroll to top + page metadata component
function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const { title, description } = getPageMetadata(pathname);
    document.title = title;
    setMetaDescription(description);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <RouteEffects />
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
