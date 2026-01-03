
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Heart, ShieldCheck } from 'lucide-react';

const Navbar: React.FC<{ onNavigate: (path: string) => void, activePath: string }> = ({ onNavigate, activePath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-md py-2 shadow-xl shadow-vermillion/5' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer group gap-4" 
            onClick={() => onNavigate('/')}
          >
            <div className="bg-vermillion p-3 rounded-2xl text-white font-bold text-2xl shadow-lg shadow-vermillion/30 group-hover:scale-110 transition-transform duration-500">
              ॐ
            </div>
            <div>
              <h1 className="text-xl font-bold text-mysticTeal leading-none tracking-tight divine-text">
                MAHA MAHESWARAM
              </h1>
              <p className="text-[10px] tracking-[0.3em] text-vermillion font-bold uppercase mt-1">
                Sacred Dham Trust
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`px-5 py-2 rounded-xl text-xs font-bold tracking-widest transition-all uppercase relative overflow-hidden group ${
                  activePath === item.path 
                    ? 'text-vermillion bg-vermillion/5' 
                    : 'text-mysticTeal hover:text-vermillion'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-vermillion transition-all duration-300 ${activePath === item.path ? 'w-4' : 'w-0 group-hover:w-4'}`}></span>
              </button>
            ))}
            <div className="h-6 w-px bg-sandalwood-dark mx-6"></div>
            <button
              onClick={() => onNavigate('/donations')}
              className="px-8 py-3 rounded-2xl divine-gradient text-white font-bold text-xs uppercase tracking-widest flex items-center gap-3 shadow-lg shadow-vermillion/20 hover:shadow-vermillion/40 hover:-translate-y-0.5 transition-all"
            >
              <Heart size={16} fill="white" className="animate-pulse" />
              Sewa Offerings
            </button>
            <button
               onClick={() => onNavigate('/admin')}
               className="ml-3 p-3 text-mysticTeal/30 hover:text-vermillion hover:bg-vermillion/5 rounded-2xl transition-all"
               title="Admin Portal"
            >
              <ShieldCheck size={20} />
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-vermillion p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-sandalwood animate-in slide-in-from-right duration-500">
          <div className="flex flex-col h-full p-10 pt-28 space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => { onNavigate(item.path); setIsOpen(false); }}
                className={`flex items-center gap-6 p-6 rounded-3xl text-xl font-bold tracking-widest transition-all ${
                  activePath === item.path ? 'bg-vermillion text-white shadow-xl shadow-vermillion/20' : 'text-mysticTeal bg-white/50'
                }`}
              >
                <span className={activePath === item.path ? 'text-white' : 'text-vermillion'}>{item.icon}</span> 
                <span className="font-display uppercase">{item.name}</span>
              </button>
            ))}
            <div className="pt-10">
              <button
                onClick={() => { onNavigate('/donations'); setIsOpen(false); }}
                className="w-full py-6 divine-gradient text-white rounded-3xl font-bold text-lg shadow-2xl uppercase tracking-[0.2em] flex items-center justify-center gap-4"
              >
                <Heart size={20} fill="white" /> Sacred Donation
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;