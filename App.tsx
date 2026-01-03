
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Donations from './pages/Donations';
import AdminDashboard from './pages/AdminDashboard';
import Facilities from './pages/Facilities';
import { Calendar, MapPin, Search, Instagram, Facebook, Youtube } from 'lucide-react';
import { POSTS } from './constants';

const VisitPage = () => (
  <div className="bg-[#fdfaf7] min-h-screen">
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display italic">Divine Pilgrimage</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to know before stepping into the holy precinct of Maha Maheswaram Dham.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div className="space-y-8">
          <div className="bg-white p-10 rounded-[3rem] border border-orange-100 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <MapPin className="text-saffron" /> Location & Access
            </h3>
            <div className="bg-gray-200 w-full h-80 rounded-[2rem] overflow-hidden mb-6 shadow-inner relative">
              <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale-[0.5]" alt="Map" />
              <div className="absolute inset-0 bg-saffron/10 pointer-events-none"></div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Situated in the lush valleys of Maheswaram, the dham is easily accessible via the state highway. Private parking is available for devotees.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-orange-100 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Sacred Decorum</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-green-50 rounded-3xl border border-green-100">
                 <h4 className="font-bold text-green-700 mb-2">DO'S</h4>
                 <ul className="text-sm text-green-800 space-y-2">
                    <li>✓ Wear modest ethnic attire</li>
                    <li>✓ Maintain silence in sanctum</li>
                    <li>✓ Use designated dustbins</li>
                 </ul>
              </div>
              <div className="p-6 bg-red-50 rounded-3xl border border-red-100">
                 <h4 className="font-bold text-red-700 mb-2">DON'TS</h4>
                 <ul className="text-sm text-red-800 space-y-2">
                    <li>✕ No flash photography</li>
                    <li>✕ No non-veg inside dham</li>
                    <li>✕ No mobile usage in puja</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="gradient-saffron p-10 rounded-[3rem] text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Connectivity</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">✈</div>
                <div>
                  <h4 className="font-bold text-lg">By Air</h4>
                  <p className="text-white/80">Divine City Airport (50km). Taxi services available 24/7.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">🚂</div>
                <div>
                  <h4 className="font-bold text-lg">By Rail</h4>
                  <p className="text-white/80">Maheswaram Jn. (12km). Local bus and rickshaws connect every 15 mins.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[400px] rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer">
             <img src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Temple View" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent flex items-end p-12">
                <div>
                  <h4 className="text-4xl font-bold text-white mb-4">Divine Virtual Experience</h4>
                  <p className="text-white/70 mb-8 max-w-sm">Take a spiritual flight through the dham using our high-definition 360° virtual tour.</p>
                  <button className="px-10 py-4 bg-white text-saffron rounded-full font-bold shadow-xl hover:bg-saffron hover:text-white transition-all">Launch Tour</button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const EventsPage = () => (
  <div className="bg-[#fdfaf7] min-h-screen py-24 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-display italic">Dham Calendar</h1>
          <p className="text-xl text-gray-600">Sacred festivals, community annadaan, and spiritual yatras happening soon.</p>
        </div>
        <div className="flex bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm">
          <button className="px-8 py-3 bg-saffron text-white rounded-xl font-bold shadow-lg">List View</button>
          <button className="px-8 py-3 text-gray-400 font-bold hover:text-gray-900 transition-colors">Calendar</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="bg-white rounded-[3rem] border border-gray-50 shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-500">
            <div className="h-64 relative overflow-hidden">
               <img src={`https://images.unsplash.com/photo-1621274403997-37aae1848b40?auto=format&fit=crop&q=80&w=800&sig=${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
               <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-3 rounded-3xl shadow-2xl">
                  <span className="block text-2xl font-bold text-saffron tracking-tight">12 JUN</span>
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Wednesday</span>
               </div>
            </div>
            <div className="p-10">
               <div className="flex items-center gap-2 text-xs font-bold text-saffron uppercase mb-4 tracking-widest">
                  <Calendar size={14} /> Major Festival
               </div>
               <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-saffron transition-colors">Purnima Maha Abhishek</h3>
               <p className="text-gray-500 text-sm mb-10 leading-relaxed">Join thousands of devotees for the grand ritual bath and midnight aarti.</p>
               <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex -space-x-3">
                     {[1,2,3].map(u => <div key={u} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>)}
                     <div className="w-8 h-8 rounded-full border-2 border-white bg-saffron flex items-center justify-center text-[8px] font-bold text-white">+2k</div>
                  </div>
                  <button className="font-bold text-gray-900 text-sm hover:text-saffron transition-colors">Interested →</button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SocialPage = () => (
  <div className="bg-[#fdfaf7] min-h-screen py-24 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
         <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-display italic">Dham Chronicles</h1>
         <p className="text-xl text-gray-600">Stories of impact, divine updates, and community highlights.</p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {POSTS.concat(POSTS).concat(POSTS).map((post, i) => (
          <div key={i} className="break-inside-avoid bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all">
            <img src={post.imageUrl} className="w-full object-cover" alt="" />
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-saffron uppercase tracking-widest px-2 py-1 bg-orange-50 rounded-lg">#{tag}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{post.content}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 font-bold">
                 <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                 <div className="flex gap-3">
                    <Facebook size={16} className="cursor-pointer hover:text-saffron" />
                    <Instagram size={16} className="cursor-pointer hover:text-saffron" />
                    <Youtube size={16} className="cursor-pointer hover:text-saffron" />
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const renderPage = () => {
    switch (currentPath) {
      case '/': return <Home onNavigate={setCurrentPath} />;
      case '/donations': return <Donations />;
      case '/visit': return <VisitPage />;
      case '/events': return <EventsPage />;
      case '/facilities': return <Facilities />;
      case '/social': return <SocialPage />;
      case '/admin': return <AdminDashboard />;
      default: return (
        <div className="py-48 text-center bg-white min-h-[60vh]">
          <h1 className="text-6xl font-bold text-saffron mb-4 font-display">Coming Soon</h1>
          <p className="text-gray-500">The divine portal for this section is being prepared.</p>
          <button onClick={() => setCurrentPath('/')} className="mt-12 px-10 py-4 bg-gray-900 text-white rounded-full font-bold shadow-2xl">Return Home</button>
        </div>
      );
    }
  };

  const isFullPage = currentPath === '/admin';

  return (
    <div className="min-h-screen selection:bg-saffron selection:text-white">
      {!isFullPage && <Navbar onNavigate={setCurrentPath} activePath={currentPath} />}
      <main className="transition-all duration-300">
        {renderPage()}
      </main>
      {!isFullPage && <Footer />}
    </div>
  );
};

export default App;
