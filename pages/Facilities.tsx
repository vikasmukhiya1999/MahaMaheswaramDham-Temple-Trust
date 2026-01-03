
import React from 'react';
import { FACILITIES } from '../constants';
import { CheckCircle, Info, ExternalLink } from 'lucide-react';

const Facilities: React.FC = () => {
  return (
    <div className="bg-[#fdfaf7] min-h-screen">
      {/* Header */}
      <section className="relative py-24 px-4 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1498435525480-77a87e35cc39?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Facilities BG" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Facilities</h1>
          <p className="text-xl text-gray-200">World-class amenities for spiritual comfort and community service.</p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-16">
          {FACILITIES.map((facility, idx) => (
            <div key={facility.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src={facility.imageUrl} className="w-full h-full object-cover" alt={facility.name} />
              </div>
              <div className="flex-1 space-y-8">
                <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase tracking-widest">
                  {facility.status}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{facility.name}</h2>
                <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-saffron pl-6">
                  "{facility.description}"
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <Info size={18} className="text-saffron" /> Usage Rules & Guidelines
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {facility.rules.map((rule, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" /> {rule}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-black transition-all shadow-xl shadow-gray-200">
                    {facility.enquiryCTA} <ExternalLink size={18} />
                  </button>
                  <button className="px-8 py-4 border-2 border-orange-100 text-saffron rounded-2xl font-bold hover:bg-orange-50 transition-all">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry Banner */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="gradient-saffron rounded-[3rem] p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need a specific facility?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Our trust is committed to serving humanity. If you represent an NGO or need our spaces for charity, reach out to us.
            </p>
            <button className="px-12 py-4 bg-white text-saffron rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
              Contact Trust Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
