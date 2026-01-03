
import React from 'react';
import { FACILITIES } from '../constants';
// Added ArrowRight to the imports from lucide-react to fix the error on line 108
import { CheckCircle, Info, ExternalLink, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const Facilities: React.FC = () => {
  return (
    <div className="bg-spiritualWhite min-h-screen">
      {/* Immersive Vibrant Header */}
      <section className="relative py-56 px-6 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
           <img src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=2200" className="w-full h-full object-cover brightness-[0.4]" alt="Facilities Header" />
           <div className="absolute inset-0 bg-gradient-to-b from-vedicNavy/60 via-transparent to-spiritualWhite"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center animate-in fade-in duration-1000">
          <div className="inline-block px-8 py-3 bg-saffron/20 backdrop-blur-xl border border-saffron/30 rounded-full text-templeGold-bright text-[11px] font-black uppercase tracking-[0.5em] mb-12">
            Sanctified Infrastructure
          </div>
          <h1 className="text-7xl md:text-9xl font-extrabold text-white mb-10 font-display italic leading-tight">Sacred <span className="text-saffron drop-shadow-lg">Spaces</span></h1>
          <p className="text-2xl md:text-3xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            World-class environments designed to nourish the body, calm the mind, and elevate the soul.
          </p>
        </div>
      </section>

      {/* Balanced Facilities Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="space-y-48">
          {FACILITIES.map((facility, idx) => (
            <div key={facility.id} className={`flex flex-col lg:flex-row gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full h-[600px] lg:h-[750px] rounded-[5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] group relative">
                <img src={facility.imageUrl} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={facility.name} />
                <div className="absolute top-12 left-12">
                  <div className="bg-white/95 backdrop-blur-xl px-8 py-4 rounded-[2rem] shadow-2xl flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-vedicNavy">{facility.status}</span>
                  </div>
                </div>
                <div className="absolute bottom-12 left-12 right-12 flex flex-wrap gap-4">
                   {facility.amenities?.map(amn => (
                     <span key={amn} className="px-6 py-3 bg-vedicNavy/80 backdrop-blur-md rounded-2xl text-[10px] font-black text-white uppercase tracking-widest shadow-xl border border-white/10 hover:bg-saffron transition-colors cursor-default">
                        {amn}
                     </span>
                   ))}
                </div>
              </div>
              <div className="flex-1 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="w-16 h-1 bg-saffron rounded-full"></span>
                    <span className="text-xs font-black text-saffron uppercase tracking-[0.4em]">Divine Facility</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-extrabold text-vedicNavy font-display leading-[1.1]">{facility.name}</h2>
                </div>
                
                <p className="text-2xl text-gray-500 leading-relaxed font-medium italic border-l-4 border-saffron/20 pl-10">
                  {facility.description}
                </p>
                
                <div className="bg-white p-12 rounded-[4rem] border-2 border-orange-50 shadow-2xl shadow-orange-900/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Sparkles size={80} className="text-saffron" />
                  </div>
                  <h4 className="font-black text-2xl text-vedicNavy flex items-center gap-4 mb-10">
                    <ShieldCheck size={28} className="text-saffron" /> Sanctity & Rules
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {facility.rules.map((rule, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-600 font-bold text-md leading-tight group">
                        <CheckCircle size={22} className="text-saffron mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" /> 
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                  <button className="px-12 py-6 bg-vedicNavy text-white rounded-[2rem] font-black text-lg flex items-center justify-center gap-4 hover:bg-black hover:-translate-y-2 transition-all shadow-[0_20px_50px_-15px_rgba(0,33,71,0.3)]">
                    {facility.enquiryCTA} <ExternalLink size={24} />
                  </button>
                  <button className="px-12 py-6 border-2 border-orange-100 text-vedicNavy rounded-[2rem] font-black text-lg hover:bg-saffron hover:text-white hover:border-saffron transition-all flex items-center justify-center gap-3 group">
                    <Info size={24} className="group-hover:rotate-12 transition-transform" /> Virtual Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vibrant Call to Action */}
      <section className="py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative gradient-royal rounded-[6rem] p-20 md:p-36 text-white shadow-3xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-saffron/20 rounded-full -mr-80 -mt-80 blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-templeGold/20 rounded-full -ml-40 -mb-40 blur-[80px]"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-8xl font-black mb-12 leading-tight font-display italic">A Place for Every <br/><span className="text-saffron drop-shadow-md">Soul</span></h2>
              <p className="text-2xl md:text-3xl text-white/80 mb-16 font-medium leading-relaxed max-w-3xl mx-auto">
                Our trust ensures that no soul goes unserved. If you need our facilities for genuine charitable causes, reach out to us.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <button className="px-14 py-6 bg-white text-vedicNavy rounded-full font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
                  Contact Office
                </button>
                <button className="px-14 py-6 border-2 border-white/40 text-white rounded-full font-black text-xl hover:bg-white/10 transition-all flex items-center gap-3">
                  Trust Bylaws <ArrowRight size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
