
import React from 'react';
import { Calendar } from 'lucide-react';

const Events: React.FC = () => (
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

export default Events;
