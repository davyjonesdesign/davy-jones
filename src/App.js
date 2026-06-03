import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Systems from './pages/Systems';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import { portfolioData } from './data/portfolioData';

const DEFAULT_TITLE = 'Davy Jones | Lead UX Designer and Design Systems Leader';
const DEFAULT_DESCRIPTION = 'Lead UX Designer specializing in enterprise UX strategy, design leadership, design systems governance, and scalable product quality.';

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
      description: 'Leadership background, competencies, and approach to enterprise UX strategy, design systems governance, mentorship, and cross-functional influence.'
    };
  }

  if (pathname === '/work') {
    return {
      title: 'Work | Davy Jones',
      description: 'Case studies spanning enterprise UX strategy, product ownership, design systems governance, mentorship, and AI-assisted workflow design.'
    };
  }


  if (pathname === '/systems' || pathname === '/work/design-systems') {
    return {
      title: 'Design Systems & Governance | Davy Jones',
      description: 'A deep dive into UI.wheels design system architecture, governance, semantic tokens, WCAG AA standards, and enterprise adoption.'
    };
  }

  if (pathname === '/contact') {
    return {
      title: 'Contact | Davy Jones',
      description: 'Connect with Davy Jones for Lead UX Designer and Principal Designer roles focused on UX strategy, design systems, and design culture.'
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
              <Route path="/systems" element={<Systems />} />
              <Route path="/work/design-systems" element={<Systems />} />
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
