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

const DEFAULT_TITLE = 'Davy Jones | Senior UI Designer';
const DEFAULT_DESCRIPTION = 'Senior UI designer at Wheels, working across product interfaces, design systems, and the details that get designs into production.';

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
      description: 'I work across product UI, design systems, and front-end implementation at Wheels.'
    };
  }

  if (pathname === '/work') {
    return {
      title: 'Work | Davy Jones',
      description: 'Selected product and design-system work, including what I tried, what worked, and what still needed more work.'
    };
  }


  if (pathname === '/systems' || pathname === '/work/design-systems') {
    return {
      title: 'Design Systems & Governance | Davy Jones',
      description: 'How we brought shared components, design guidance, and implementation patterns together after a merger.'
    };
  }

  if (pathname === '/contact') {
    return {
      title: 'Contact | Davy Jones',
      description: 'Contact Davy Jones about Lead UX Designer and Principal Designer opportunities.'
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
