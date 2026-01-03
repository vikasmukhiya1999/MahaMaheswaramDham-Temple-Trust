
import React, { useState, useEffect } from 'react';
import { CAMPAIGNS } from '../constants';
import { ArrowRight, Sparkles, MessageSquare, Send, X, Clock, Navigation, ShieldCheck, Heart, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { askSpiritualGuide } from '../services/geminiService';

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&q=80&w=2200",
    subtitle: "Vedic Tradition • Seva • Soul",
    title: "Path to Eternal Divinity",
    description: "Join a sanctuary of peace and service in the heart of the Divine Valley. Experience ancient rituals and modern compassion.",
    primaryCTA: { text: "Plan Your Visit", path: "/visit", color: "bg-divineGold" },
    secondaryCTA: { text: "Sacred Darshan", path: "/events", color: "bg-white/10" }
  },
  {
    image: "https://images.unsplash.com/photo-1591189863430-ab87e120f312?auto=format&fit=crop&q=80&w=2200",
    subtitle: "Compassion • Feeding • Love",
    title: "Spirit of Sacred Giving",
    description: "Your generosity fuels our mission to serve the underprivileged. Participate in the divine act of Annadaan and Gau Seva.",
    primaryCTA: { text: "Offer Sacred Seva", path: "/donations", color: "bg-vermillion" },
    secondaryCTA: { text: "View Impact", path: "/social", color: "bg-white/10" }
  },
  {
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=2200",
    subtitle: "Community • Upliftment • Dharma",
    title: "Seva to Humanity",
    description: "Building bridges of hope through education, healthcare, and social initiatives. Be a part of our growing spiritual family.",
    primaryCTA: { text: "Join our Mission", path: "/social", color: "bg-mysticTeal" },
    secondaryCTA: { text: "Trust History", path: "/facilities", color: "bg-white/10" }
  }
];

const Home: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Namaste! I am your spiritual guide. How can I assist you in your pilgrimage today?' }
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || loading) return;
    
    const userMsg = chatInput;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    setLoading(true);

    const response = await askSpiritualGuide(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response || 'The divine connection is silent. Please try again later.' }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col">
      {/* Rotating Hero Banner */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          >
            <img 
              src={slide.image} 
              className="w-full h-full object-cover brightness-[0.4]" 
              alt={slide.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-mysticTeal/60 via-transparent to-sandalwood"></div>
          </div>
        ))}
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {HERO_SLIDES.map((slide, index) => (
            <div key={index} className={index === currentSlide ? 'block' : 'hidden'}>
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 text-divineGold-glow text-[12px] font-bold mb-10 uppercase tracking-[0.4em] animate-in fade-in duration-1000">
                <Sparkles size={16} className="animate-pulse" />
                {slide.subtitle}
              </div>
              <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 leading-[1.05] divine-text font-display animate-in slide-in-from-bottom-12 duration-1000">
                {slide.title.split(' ').map((word, i) => 
                  word === 'Eternal' || word === 'Sacred' || word === 'Humanity' ? 
                  <span key={i} className="text-vermillion italic"> {word} </span> : 
                  ` ${word} `
                )}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-14 max-w-3xl mx-auto leading-relaxed font-light animate-in fade-in duration-1000 delay-300">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-in slide-in-from-bottom-8 duration-700 delay-500">
                <button 
                  onClick={() => onNavigate(slide.primaryCTA.path)}
                  className={`px-14 py-6 ${slide.primaryCTA.color} text-white rounded-3xl font-bold text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest shadow-black/20`}
                >
                  {slide.primaryCTA.text}
                </button>
                <button 
                  onClick={() => onNavigate(slide.secondaryCTA.path)}
                  className="px-14 py-6 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-3xl font-bold text-lg hover:bg-white hover:text-mysticTeal transition-all duration-300 flex items-center gap-3"
                >
                  {slide.secondaryCTA.text} <ArrowRight size={22} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-12 bg-vermillion' : 'w-2 bg-white/40 hover:bg-white'}`}
            />
          ))}
        </div>

        {/* Manual Navigation */}
        <button 
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
          className="absolute left-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all z-20 hidden lg:block"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="absolute right-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all z-20 hidden lg:block"
        >
          <ChevronRight size={32} />
        </button>
      </section>

      {/* Floating Info Cards */}
      <section className="relative z-20 -mt-24 max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Clock className="text-vermillion" />, 
              title: "Temple Hours", 
              desc: "4:00 AM — 10:00 PM", 
              footer: "Mangala Aarti: 4:30 AM",
              bg: "bg-white"
            },
            { 
              icon: <Navigation className="text-vermillion" />, 
              title: "Sacred Location", 
              desc: "Divine Valley Road, Sec 12", 
              footer: "Guided Map Available",
              bg: "bg-white"
            },
            { 
              icon: <ShieldCheck className="text-vermillion" />, 
              title: "Verified Trust", 
              desc: "ISO Certified & 80G Compliant", 
              footer: "Transparent Stewardship",
              bg: "bg-white shadow-xl ring-2 ring-vermillion/5"
            }
          ].map((info, i) => (
            <div key={i} className={`${info.bg} p-12 rounded-[3.5rem] shadow-2xl shadow-mysticTeal/5 group hover:-translate-y-3 transition-all duration-500 border border-vermillion/5`}>
              <div className="w-14 h-14 bg-vermillion/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className="text-2xl font-bold text-mysticTeal mb-3 font-display">{info.title}</h3>
              <p className="text-gray-500 font-medium mb-6 text-sm">{info.desc}</p>
              <div className="pt-6 border-t border-sandalwood-dark text-[11px] font-bold text-vermillion uppercase tracking-widest flex items-center justify-between">
                <span>{info.footer}</span>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campaign Showcase */}
      <section className="py-48 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold text-mysticTeal mb-8 font-display divine-text">
              Divine <span className="text-vermillion italic">Opportunities</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed font-light">
              Participate in the sacred duty of giving. Every offering fuels a life-changing community project.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('/donations')} 
            className="px-10 py-4 bg-mysticTeal text-white rounded-2xl font-bold text-sm hover:bg-mysticTeal-dark transition-all shadow-xl shadow-mysticTeal/20 flex items-center gap-3 uppercase tracking-widest"
          >
            All Campaigns <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {CAMPAIGNS.filter(c => c.featured).map(campaign => (
            <div key={campaign.id} className="bg-white rounded-[4rem] overflow-hidden border border-vermillion/5 shadow-2xl shadow-mysticTeal/5 group flex flex-col h-full hover:shadow-vermillion/10 transition-all duration-500">
              <div className="relative h-80 overflow-hidden">
                <img src={campaign.imageUrl} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={campaign.title} />
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-xl px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-mysticTeal shadow-xl">
                  {campaign.category}
                </div>
              </div>
              <div className="p-12 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-5 text-mysticTeal font-display leading-tight">{campaign.title}</h3>
                <p className="text-gray-500 text-sm mb-10 flex-1 leading-relaxed font-light">{campaign.description}</p>
                
                {campaign.impactMessage && (
                  <div className="mb-10 p-6 bg-sandalwood rounded-3xl border border-vermillion/10 text-xs font-bold text-vermillion italic flex items-center gap-4">
                    <Sparkles size={16} /> <span>"{campaign.impactMessage}"</span>
                  </div>
                )}

                <div className="space-y-6 pt-10 border-t border-sandalwood-dark">
                  <div className="flex justify-between items-end text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    <span>Goal Reached</span>
                    <span className="text-vermillion">{Math.round((campaign.currentAmount / (campaign.goalAmount || 1)) * 100)}%</span>
                  </div>
                  <div className="w-full bg-sandalwood-dark h-3 rounded-full overflow-hidden p-0.5">
                    <div 
                      className="divine-gradient h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(255,94,19,0.3)]" 
                      style={{ width: `${(campaign.currentAmount / (campaign.goalAmount || 1)) * 100}%` }}
                    ></div>
                  </div>
                  <button 
                    onClick={() => onNavigate('/donations')}
                    className="w-full py-5 bg-mysticTeal text-white rounded-3xl font-bold text-sm shadow-xl hover:bg-vermillion transition-all duration-300 uppercase tracking-widest active:scale-95"
                  >
                    Contribute Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Spiritual Concierge Widget */}
      <div className="fixed bottom-12 right-12 z-50">
        {chatOpen ? (
          <div className="glass-panel w-[420px] sm:w-[480px] h-[680px] rounded-[4rem] shadow-[0_40px_120px_-20px_rgba(0,77,64,0.15)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-12 duration-500">
            <div className="divine-gradient p-12 text-white relative">
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-2xl flex items-center gap-3 mb-1 font-display">
                    Spiritual Guide
                  </h3>
                  <p className="text-[10px] text-white/70 uppercase font-bold tracking-widest">Divine Concierge Desk</p>
                </div>
                <button onClick={() => setChatOpen(false)} className="bg-black/10 p-3 rounded-full hover:bg-black/20 transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-10 space-y-10 scrollbar-hide bg-white/30">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-6 rounded-[2.5rem] text-[15px] leading-relaxed font-medium shadow-sm border border-vermillion/5 ${
                    m.role === 'user' 
                      ? 'bg-mysticTeal text-white rounded-br-none' 
                      : 'bg-white text-gray-800 rounded-bl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white p-6 rounded-3xl shadow-sm flex gap-2">
                    <div className="w-2 h-2 bg-vermillion rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-vermillion rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-vermillion rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleChatSubmit} className="p-10 bg-white border-t border-sandalwood-dark flex gap-4 items-center">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about Timings, Pujas..." 
                className="flex-1 bg-sandalwood border-none focus:ring-2 focus:ring-vermillion/20 rounded-2xl px-8 py-5 text-sm font-medium"
              />
              <button type="submit" className="p-5 divine-gradient text-white rounded-2xl hover:scale-110 active:scale-95 transition-all shadow-xl shadow-vermillion/20">
                <Send size={24} />
              </button>
            </form>
          </div>
        ) : (
          <button 
            onClick={() => setChatOpen(true)}
            className="w-24 h-24 rounded-full divine-gradient text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative border-4 border-white shadow-vermillion/30"
          >
            <MessageSquare size={36} />
            <div className="absolute -top-1 -right-1 w-7 h-7 bg-green-500 border-4 border-white rounded-full"></div>
            <span className="absolute right-28 bg-mysticTeal text-white px-6 py-4 rounded-[2rem] text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all shadow-2xl pointer-events-none -translate-x-4 group-hover:translate-x-0">
              Guide Online
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
