
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Donations from './pages/Donations';
import AdminDashboard from './pages/AdminDashboard';
import Facilities from './pages/Facilities';
import Visit from './pages/Visit';
import Events from './pages/Events';
import Social from './pages/Social';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.replace('#', '') || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.replace('#', '') || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/': return <Home onNavigate={navigate} />;
      case '/donations': return <Donations />;
      case '/visit': return <Visit />;
      case '/events': return <Events />;
      case '/facilities': return <Facilities />;
      case '/social': return <Social />;
      case '/admin': return <AdminDashboard />;
      default: return (
        <div className="py-48 text-center bg-white min-h-[60vh]">
          <h1 className="text-6xl font-bold text-saffron mb-4 font-display">Coming Soon</h1>
          <p className="text-gray-500">The divine portal for this section is being prepared.</p>
          <button onClick={() => navigate('/')} className="mt-12 px-10 py-4 bg-gray-900 text-white rounded-full font-bold shadow-2xl">Return Home</button>
        </div>
      );
    }
  };

  const isFullPage = currentPath === '/admin';

  return (
    <Layout activePath={currentPath} onNavigate={navigate} hideChrome={isFullPage}>
      {renderPage()}
    </Layout>
  );
};

export default App;
