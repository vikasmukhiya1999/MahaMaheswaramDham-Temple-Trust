
import React from 'react';
import { Facebook, Instagram, Youtube, ArrowUpRight, Share2, Heart, Clock, Sparkles } from 'lucide-react';
import { POSTS } from '../constants';

const Social: React.FC = () => (
  <div className="bg-sandalwood min-h-screen">
    {/* Page Header */}
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10 mandala-bg scale-150"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-mysticTeal/5 rounded-full border border-mysticTeal/10 text-mysticTeal text-[10px] font-bold mb-8 uppercase tracking-[0.4em] animate-in fade-in duration-1000">
          <Sparkles size={16} /> 
          Sacred Updates
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-mysticTeal mb-8 font-display italic divine-text animate-in slide-in-from-bottom-12 duration-1000">
          Dham <span className="text-vermillion">Chronicles</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed animate-in fade-in duration-1000 delay-300">
          Witness the unfolding journey of our mission. From remote village outreach to grand Vedic festivals, every story is a blessing.
        </p>
      </div>
    </section>

    {/* Content Grid */}
    <section className="max-w-7xl mx-auto px-6 pb-48">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
        {POSTS.concat(POSTS).concat(POSTS).map((post, i) => (
          <div 
            key={i} 
            className="break-inside-avoid group bg-white rounded-[3.5rem] border-2 border-sandalwood-dark/30 shadow-xl shadow-mysticTeal/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-vermillion/10 hover:-translate-y-3 hover:border-vermillion/20"
          >
            {/* Image Section with Aspect Ratio Control */}
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={post.imageUrl} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1" 
                alt={post.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-6 left-6 flex gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-[9px] font-black text-white uppercase tracking-widest px-4 py-2 bg-vermillion/90 backdrop-blur-md rounded-full shadow-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <button className="absolute bottom-6 right-6 p-4 bg-white/90 backdrop-blur-md text-mysticTeal rounded-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl hover:bg-vermillion hover:text-white">
                <ArrowUpRight size={20} />
              </button>
            </div>

            {/* Content Section */}
            <div className="p-10">
              <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                <Clock size={14} className="text-vermillion" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span className="w-1.5 h-1.5 bg-sandalwood-dark rounded-full"></span>
                <span className="text-mysticTeal">{post.author || 'Temple Trust'}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-5 text-mysticTeal font-display leading-tight group-hover:text-vermillion transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-10 font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                {post.content}
              </p>
              
              {/* Interaction Bar */}
              <div className="flex items-center justify-between pt-8 border-t border-sandalwood-dark">
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-vermillion transition-colors group/btn">
                    <Heart size={16} className="group-hover/btn:fill-current" /> 1.2k
                  </button>
                  <button className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-mysticTeal transition-colors">
                    <Share2 size={16} /> Share
                  </button>
                </div>
                
                <div className="flex gap-4 items-center pl-6 border-l border-sandalwood-dark">
                  <a href="#" className="p-2 text-gray-300 hover:text-vermillion transition-all hover:scale-125">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="p-2 text-gray-300 hover:text-vermillion transition-all hover:scale-125">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="p-2 text-gray-300 hover:text-vermillion transition-all hover:scale-125">
                    <Youtube size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Section */}
      <div className="mt-24 text-center">
        <button className="px-12 py-5 border-2 border-mysticTeal text-mysticTeal rounded-3xl font-bold text-lg hover:bg-mysticTeal hover:text-white transition-all shadow-xl shadow-mysticTeal/5 uppercase tracking-widest">
          Load Past Chronicles
        </button>
      </div>
    </section>
  </div>
);

export default Social;
