
import React from 'react';
import { MapPin, Sparkles, Navigation, ShieldCheck, Flower2, Clock, Plane, Train, Sun, Moon, Info, ArrowRight, History } from 'lucide-react';

const SACRED_SPOTS = [
  {
    title: "The Akhanda Jyoti",
    desc: "An eternal flame that has burned for centuries, symbolizing the unwavering light of consciousness.",
    lore: "Legend says this flame was lit by a sage in meditation and has never been extinguished, surviving even the harshest Himalayan winds.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Amrit Kunda",
    desc: "The celestial pond whose waters are said to mirror the clarity of a pure heart.",
    lore: "Pilgrims often witness the reflection of the ancient temple architecture perfectly aligned with the morning sun.",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "The Kalpavriksha",
    desc: "A massive, thousand-year-old banyan tree that serves as the silent guardian of the Dham.",
    lore: "Under its shade, hundreds find peace every day. It is believed that prayer made with absolute silence here is heard by the universe.",
    image: "https://images.unsplash.com/photo-1518132047140-98da13edcfc2?auto=format&fit=crop&q=80&w=800"
  }
];

const Visit: React.FC = () => (
  <div className="bg-sandalwood min-h-screen">
    {/* Cinematic Hero Header */}
    <div className="relative pt-48 pb-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10 mandala-bg scale-150"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-8 py-3 bg-vermillion/5 rounded-full border border-vermillion/10 text-vermillion text-xs font-bold mb-10 uppercase tracking-[0.5em] animate-in fade-in duration-1000">
          <Sparkles size={16} /> 
          Not a destination, but a homecoming
        </div>
        <h1 className="text-7xl md:text-[10rem] font-bold text-mysticTeal mb-8 font-display italic divine-text leading-tight animate-in slide-in-from-bottom-12 duration-1000">
          The Sacred <span className="text-vermillion">Path</span>
        </h1>
        <p className="text-2xl md:text-4xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed mb-12 italic">
          "A pilgrimage is a journey to the center of your own heart, where the divine resides."
        </p>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 pb-48">
      {/* The Journey Stages */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-40">
        {[
          { icon: <Sun className="text-vermillion" />, title: "Shuddhi", sub: "Purification", desc: "Prepare your mind through silence and modest attire before entering." },
          { icon: <Navigation className="text-mysticTeal" />, title: "Pravesh", sub: "Arrival", desc: "Leave behind the noise of the world as you step into the valley." },
          { icon: <Flower2 className="text-divineGold" />, title: "Darshan", sub: "The Vision", desc: "Witness the sacred rituals and connect with the eternal energy." },
          { icon: <Moon className="text-purple-400" />, title: "Ananda", sub: "Bliss", desc: "Depart with the peace of prasad and a heart full of light." },
        ].map((stage, i) => (
          <div key={i} className="bg-white/50 backdrop-blur-sm p-10 rounded-[3.5rem] border border-vermillion/5 shadow-xl shadow-mysticTeal/5 group hover:bg-white transition-all duration-500">
            <div className="w-16 h-16 bg-sandalwood rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              {stage.icon}
            </div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">{stage.sub}</h4>
            <h3 className="text-3xl font-bold text-mysticTeal font-display mb-4">{stage.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-light">{stage.desc}</p>
          </div>
        ))}
      </div>

      {/* Sacred Gallery of Lore */}
      <section className="mb-48">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold text-mysticTeal font-display italic divine-text mb-6">Chronicles of the <span className="text-vermillion">Soil</span></h2>
          <p className="text-xl text-gray-500 font-light tracking-wide">Every stone in the Dham has a story to tell.</p>
        </div>
        
        <div className="space-y-32">
          {SACRED_SPOTS.map((spot, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-20 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-vermillion/10 rounded-[4rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
                <div className="h-[500px] rounded-[4rem] overflow-hidden shadow-2xl border-2 border-white">
                  <img src={spot.image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt={spot.title} />
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4 text-vermillion font-bold text-xs uppercase tracking-[0.4em]">
                  <History size={16} /> <span>Divine Legend</span>
                </div>
                <h3 className="text-5xl font-bold text-mysticTeal font-display leading-tight">{spot.title}</h3>
                <p className="text-2xl text-gray-500 font-light italic leading-relaxed">"{spot.desc}"</p>
                <div className="p-10 bg-white/60 rounded-[3rem] border-l-8 border-divineGold shadow-lg">
                   <p className="text-gray-500 leading-relaxed text-sm font-medium">{spot.lore}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Logistics & Etiquette */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        <div className="space-y-12">
          <div className="bg-white p-12 rounded-[4rem] border border-vermillion/5 shadow-2xl shadow-mysticTeal/5 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-mysticTeal group-hover:scale-150 transition-transform duration-1000">
              <MapPin size={120} />
            </div>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4 text-mysticTeal font-display">
              <MapPin className="text-vermillion group-hover:animate-bounce" /> Reaching the Sanctum
            </h3>
            <div className="w-full h-80 rounded-[3rem] overflow-hidden mb-10 shadow-inner relative border-2 border-sandalwood-dark/50">
              <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover brightness-[0.8]" alt="Map" />
              <div className="absolute inset-0 bg-mysticTeal/10"></div>
            </div>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              The path to the Dham is carved through the sacred valleys of Maheswaram. While connected by a state highway, we recommend taking the local "Punya Path" bus for a community experience.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
               <div className="flex items-center gap-4 p-6 bg-sandalwood rounded-3xl border border-vermillion/5">
                  <Plane className="text-vermillion" size={24} />
                  <div className="text-[10px] font-bold text-mysticTeal uppercase tracking-widest">Airport: 50km</div>
               </div>
               <div className="flex items-center gap-4 p-6 bg-sandalwood rounded-3xl border border-vermillion/5">
                  <Train className="text-vermillion" size={24} />
                  <div className="text-[10px] font-bold text-mysticTeal uppercase tracking-widest">Railway: 12km</div>
               </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="divine-gradient p-12 rounded-[4rem] text-white shadow-2xl shadow-vermillion/20 h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-12 font-display flex items-center gap-4">
                <ShieldCheck size={32} /> Vedic Etiquette
              </h3>
              <div className="space-y-10">
                <div className="flex gap-6 items-start group/item">
                  <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-white group-hover/item:text-vermillion transition-all">
                    <History size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Respect the Silence</h4>
                    <p className="text-white/70 font-light text-sm leading-relaxed">The Dham is a zone of quiet reflection. Please keep your conversations to a humble whisper near the main sanctum.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group/item">
                  <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-white group-hover/item:text-vermillion transition-all">
                    <Sparkles size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Sacred Attire</h4>
                    <p className="text-white/70 font-light text-sm leading-relaxed">We request pilgrims to wear modest ethnic clothes. Traditional dhotis and sarees are available for rent at the visitor gate.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group/item">
                  <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-white group-hover/item:text-vermillion transition-all">
                    <Flower2 size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Prasad Protocols</h4>
                    <p className="text-white/70 font-light text-sm leading-relaxed">Prasad is distributed daily. Please accept it with your right hand as a token of divine grace.</p>
                  </div>
                </div>
              </div>
              <button className="mt-16 w-full py-6 bg-white text-vermillion rounded-3xl font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 hover:scale-105 transition-all">
                Download Yatra Guide <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Visit;
