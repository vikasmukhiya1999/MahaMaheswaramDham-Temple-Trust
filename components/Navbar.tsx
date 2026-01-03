
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Heart, ShieldCheck } from 'lucide-react';

const Navbar: React.FC<{ onNavigate: (path: string) => void, activePath: string }> = ({ onNavigate, activePath }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('/')}>
            <div className="bg-saffron p-2 rounded-lg text-white font-bold text-2xl mr-3 shadow-md">
              ॐ
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 leading-tight">MAHA MAHESWARAM</h1>
              <p className="text-[10px] tracking-[0.2em] text-saffron uppercase font-semibold">Temple Trust & Dham</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activePath === item.path 
                    ? 'text-saffron bg-orange-50' 
                    : 'text-gray-600 hover:text-saffron hover:bg-orange-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => onNavigate('/donations')}
              className="ml-4 px-6 py-2 rounded-full gradient-saffron text-white font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <Heart size={18} fill="currentColor" />
              Donate Now
            </button>
            <button
               onClick={() => onNavigate('/admin')}
               className="p-2 text-gray-400 hover:text-gray-600"
            >
              <ShieldCheck size={20} />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => { onNavigate(item.path); setIsOpen(false); }}
                className="block w-full text-left px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-saffron"
              >
                <span className="flex items-center gap-3">
                  {item.icon} {item.name}
                </span>
              </button>
            ))}
            <button
              onClick={() => { onNavigate('/donations'); setIsOpen(false); }}
              className="w-full mt-4 py-4 gradient-saffron text-white rounded-xl font-bold text-lg"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
