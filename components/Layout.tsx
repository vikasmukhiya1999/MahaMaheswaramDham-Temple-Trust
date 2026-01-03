
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  activePath: string;
  onNavigate: (path: string) => void;
  hideChrome?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, activePath, onNavigate, hideChrome }) => {
  if (hideChrome) return <>{children}</>;

  return (
    <div className="min-h-screen flex flex-col selection:bg-saffron selection:text-white">
      <Navbar onNavigate={onNavigate} activePath={activePath} />
      <main className="flex-grow transition-opacity duration-300">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
