
import React, { useState } from 'react';
// Fixed: Removed non-existent 'EVENTS' from constants import as it's not exported or used
import { CAMPAIGNS } from '../constants';
import { ArrowRight, Sparkles, MessageSquare, Send, X, Clock, Navigation } from 'lucide-react';
import { askSpiritualGuide } from '../services/geminiService';

const Home: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Namaste! I am your spiritual guide. How can I assist you today?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    const userMsg = chatInput;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    setLoading(true);

    const response = await askSpiritualGuide(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response || '...' }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/templehero/1920/1080" 
            className="w-full h-full object-cover" 
            alt="Temple Hero" 
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-gray-900/80 via-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-saffron/20 backdrop-blur-md rounded-full border border-saffron/30 text-saffron-300 text-sm font-semibold mb-6">
            <Sparkles size={16} />
            Experience Divine Serenity
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Where Devotion Meets <br />
            <span className="text-saffron">Divine Purpose</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of devotees in a journey of spirituality, service, and self-discovery at the Maha Maheswaram Dham.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('/donations')}
              className="px-10 py-4 gradient-saffron text-white rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-transform"
            >
              Support Our Cause
            </button>
            <button 
              onClick={() => onNavigate('/visit')}
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              Plan Your Visit
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats / Highlights */}
      <section className="bg-white py-16 -mt-12 relative z-20 rounded-t-[3rem] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-200">
                <Clock size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Temple Timings</h3>
              <p className="text-gray-600">4:00 AM - 10:00 PM</p>
              <p className="text-xs text-saffron mt-2 font-semibold">Mangala Aarti: 4:30 AM</p>
            </div>
            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-temple-gold rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-200">
                <Navigation size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Visit Us</h3>
              <p className="text-gray-600">Divine Valley, Sector 12</p>
              <p className="text-xs text-saffron mt-2 font-semibold hover:underline cursor-pointer">Get Directions</p>
            </div>
            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 flex flex-col items-center text-center md:col-span-2">
               <h3 className="text-xl font-bold mb-4">Our Social Impact</h3>
               <div className="flex gap-8 justify-around w-full">
                  <div>
                    <div className="text-3xl font-bold text-saffron">10K+</div>
                    <div className="text-sm text-gray-600">Daily Meals Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-saffron">500+</div>
                    <div className="text-sm text-gray-600">Weddings Facilitated</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-saffron">100+</div>
                    <div className="text-sm text-gray-600">Active Volunteers</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-24 bg-[#fdfaf7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Campaigns</h2>
              <p className="text-gray-600">Every contribution, big or small, makes a profound difference.</p>
            </div>
            <button onClick={() => onNavigate('/donations')} className="hidden md:flex items-center text-saffron font-bold gap-2 group">
              View All <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAMPAIGNS.filter(c => c.featured).map(campaign => (
              <div key={campaign.id} className="bg-white rounded-[2rem] overflow-hidden border border-orange-100 shadow-xl shadow-orange-900/5 group">
                <div className="relative h-64 overflow-hidden">
                  <img src={campaign.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={campaign.title} />
                  <div className="absolute top-4 left-4 bg-saffron text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {campaign.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{campaign.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">{campaign.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-xs font-bold text-gray-500 uppercase mb-2">
                      <span>Raised: ₹{campaign.currentAmount.toLocaleString()}</span>
                      <span>Goal: ₹{campaign.goalAmount?.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-orange-50 h-3 rounded-full overflow-hidden">
                      <div 
                        className="bg-saffron h-full transition-all duration-1000" 
                        style={{ width: `${(campaign.currentAmount / (campaign.goalAmount || 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <button 
                    onClick={() => onNavigate('/donations')}
                    className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-colors"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen ? (
          <div className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl border border-orange-100 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="gradient-saffron p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold flex items-center gap-2">
                  <Sparkles size={18} /> Spiritual Guide
                </h3>
                <p className="text-xs text-white/80">Available to help 24/7</p>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white/80 hover:text-white">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-orange-50/30">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.role === 'user' 
                      ? 'bg-saffron text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-orange-100 shadow-sm rounded-bl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && <div className="text-xs text-gray-400 animate-pulse">Assistant is contemplating...</div>}
            </div>

            <form onSubmit={handleChatSubmit} className="p-4 bg-white border-t border-orange-100 flex gap-2">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about puja, timings, or seva..." 
                className="flex-1 bg-gray-50 border-none focus:ring-2 focus:ring-saffron rounded-xl px-4 text-sm"
              />
              <button type="submit" className="p-3 bg-saffron text-white rounded-xl hover:bg-orange-600 transition-colors">
                <Send size={20} />
              </button>
            </form>
          </div>
        ) : (
          <button 
            onClick={() => setChatOpen(true)}
            className="w-16 h-16 rounded-full gradient-saffron text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
          >
            <MessageSquare size={28} />
            <span className="absolute right-20 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              How can I help you?
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
