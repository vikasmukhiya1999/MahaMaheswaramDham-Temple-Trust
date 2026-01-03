
import React, { useState } from 'react';
import { CAMPAIGNS } from '../constants';
// Added ArrowRight to the imports from lucide-react to fix the error on line 141
import { Shield, CreditCard, Heart, CheckCircle2, Sparkles, User, Mail, Phone, Lock, ArrowRight } from 'lucide-react';

const Donations: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Festival' | 'Annadaan' | 'Gau Seva' | 'Yagya'>('All');
  const [selectedCampaign, setSelectedCampaign] = useState(CAMPAIGNS[0]);
  const [amount, setAmount] = useState<number | string>(selectedCampaign.suggestedAmounts[0]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const filteredCampaigns = activeFilter === 'All' 
    ? CAMPAIGNS 
    : CAMPAIGNS.filter(c => c.category === activeFilter);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-48 text-center animate-in zoom-in duration-700">
        <div className="w-40 h-40 bg-vermillion/10 rounded-full flex items-center justify-center text-vermillion mx-auto mb-12 shadow-[0_0_60px_rgba(255,94,19,0.2)] animate-pulse">
          <CheckCircle2 size={100} />
        </div>
        <h2 className="text-6xl md:text-7xl font-bold mb-6 font-display text-mysticTeal divine-text">Seva Consecrated</h2>
        <p className="text-2xl text-gray-500 mb-16 leading-relaxed max-w-2xl mx-auto font-light">
          Your noble contribution of <span className="text-vermillion font-bold text-3xl">₹{amount}</span> for <span className="text-mysticTeal font-semibold">{selectedCampaign.title}</span> has been accepted into the temple trust. May you be blessed with eternal peace.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <button 
            onClick={() => setIsSuccess(false)}
            className="px-14 py-6 divine-gradient text-white rounded-3xl font-bold text-xl shadow-2xl shadow-vermillion/30 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
          >
            New Offering
          </button>
          <button className="px-14 py-6 border-2 border-mysticTeal text-mysticTeal rounded-3xl font-bold text-xl hover:bg-mysticTeal hover:text-white transition-all flex items-center gap-3 justify-center">
            <Lock size={20} /> 80G Receipt
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sandalwood min-h-screen">
      {/* Immersive Header */}
      <div className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 mandala-bg scale-150"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-vermillion/5 rounded-full border border-vermillion/10 text-vermillion text-xs font-bold mb-8 uppercase tracking-[0.4em] animate-in fade-in duration-1000">
            <Sparkles size={16} /> 
            Digital Sewa Portal
          </div>
          <h1 className="text-6xl md:text-9xl font-bold text-mysticTeal mb-8 font-display italic divine-text animate-in slide-in-from-bottom-12 duration-1000">
            Sacred <span className="text-vermillion">Giving</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed animate-in fade-in duration-1000 delay-300">
            "Dana" is the highest virtue in Vedic wisdom. Your support preserves rituals, protects sacred life, and nourishes the soul of humanity.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Campaign Selection: Left Column */}
          <div className="lg:col-span-7 space-y-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-sandalwood-dark">
              <div className="space-y-1">
                <h2 className="text-3xl font-bold text-mysticTeal font-display">Sacred Causes</h2>
                <p className="text-sm text-gray-400 font-medium">Choose a campaign to consecrate your offering</p>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {['All', 'Annadaan', 'Gau Seva', 'Yagya'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter as any)}
                    className={`px-8 py-4 rounded-2xl text-[10px] font-bold transition-all uppercase tracking-widest border-2 ${
                      activeFilter === filter 
                        ? 'bg-mysticTeal text-white border-mysticTeal shadow-xl shadow-mysticTeal/20' 
                        : 'bg-white text-gray-400 border-white hover:border-vermillion/40 hover:text-vermillion shadow-sm'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10">
              {filteredCampaigns.map(campaign => (
                <div 
                  key={campaign.id}
                  onClick={() => {
                    setSelectedCampaign(campaign);
                    setAmount(campaign.suggestedAmounts[0]);
                    document.getElementById('donation-form-anchor')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`group relative flex flex-col md:flex-row bg-white rounded-[4rem] border-2 transition-all cursor-pointer overflow-hidden ${
                    selectedCampaign.id === campaign.id 
                      ? 'border-vermillion ring-8 ring-vermillion/5 shadow-[0_40px_80px_-20px_rgba(255,94,19,0.15)] scale-[1.01]' 
                      : 'border-white hover:border-vermillion/20 shadow-xl shadow-mysticTeal/5'
                  }`}
                >
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                    <img src={campaign.imageUrl} alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                    <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-xl px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-mysticTeal shadow-xl">
                      {campaign.category}
                    </div>
                  </div>
                  <div className="md:w-3/5 p-12 flex flex-col justify-center space-y-6">
                    <div className="flex justify-between items-start">
                       <h3 className="font-bold text-3xl text-mysticTeal font-display leading-tight">{campaign.title}</h3>
                       {selectedCampaign.id === campaign.id && (
                         <div className="p-2 bg-vermillion text-white rounded-full shadow-lg animate-in zoom-in duration-300">
                           <CheckCircle2 size={24} />
                         </div>
                       )}
                    </div>
                    <p className="text-lg text-gray-500 font-light leading-relaxed">{campaign.description}</p>
                    
                    <div className="pt-6 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest">
                       <div className="flex items-center gap-3 text-vermillion italic">
                         <Sparkles size={16} /> <span>{campaign.impactMessage}</span>
                       </div>
                       <div className="text-gray-300 group-hover:text-vermillion transition-colors flex items-center gap-2">
                         Learn More <ArrowRight size={14} />
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Offering Form: Right Column (Sticky) */}
          <div className="lg:col-span-5 sticky top-32" id="donation-form-anchor">
            <div className="bg-white rounded-[4.5rem] shadow-2xl shadow-mysticTeal/10 border border-vermillion/5 overflow-hidden">
              {/* Form Header */}
              <div className="divine-gradient p-16 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-mysticTeal/20 rounded-full -ml-16 -mb-16 blur-xl"></div>
                <div className="relative z-10">
                  <Heart className="mx-auto mb-6 fill-white animate-pulse" size={48} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.5em] block mb-4 opacity-80">Sanctified Offering for</span>
                  <h2 className="text-4xl font-bold font-display leading-[1.2] drop-shadow-md">{selectedCampaign.title}</h2>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleDonate} className="p-16 space-y-12 bg-white/50 backdrop-blur-sm">
                
                {/* Amount Selection */}
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em]">Consecration Amount (₹)</label>
                    <span className="text-[10px] font-bold text-vermillion bg-vermillion/5 px-3 py-1 rounded-full border border-vermillion/10">Tax Exempt</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {selectedCampaign.suggestedAmounts.map(amt => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setAmount(amt)}
                        className={`group py-6 rounded-3xl font-bold text-lg border-2 transition-all relative overflow-hidden ${
                          amount === amt 
                            ? 'border-vermillion bg-vermillion text-white shadow-xl shadow-vermillion/30 scale-[1.02]' 
                            : 'border-sandalwood-dark bg-sandalwood/50 text-mysticTeal hover:border-vermillion/50 hover:bg-white'
                        }`}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                           ₹{amt.toLocaleString()}
                           {amount === amt && <Sparkles size={16} className="text-white/80" />}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="relative group">
                    <span className="absolute left-10 top-1/2 -translate-y-1/2 text-vermillion font-bold text-3xl group-focus-within:scale-125 transition-transform">₹</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Other Amount"
                      className="w-full bg-sandalwood/80 border-2 border-sandalwood-dark rounded-3xl py-7 pl-20 pr-10 focus:ring-4 focus:ring-vermillion/10 focus:border-vermillion outline-none transition-all text-3xl font-bold text-mysticTeal placeholder:text-mysticTeal/10"
                    />
                  </div>
                </div>

                {/* Devotee Details */}
                <div className="space-y-8">
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em] pb-2 border-b border-sandalwood-dark">Devotee Information</label>
                  
                  <div className="space-y-6">
                    <div className="relative group">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-vermillion transition-colors" size={20} />
                      <input
                        required
                        placeholder="Full Name (for Consecration)"
                        className="w-full bg-sandalwood/50 border-2 border-transparent rounded-2xl py-5 pl-16 pr-8 focus:bg-white focus:ring-4 focus:ring-vermillion/10 focus:border-vermillion outline-none font-bold transition-all text-mysticTeal"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="relative group">
                      <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-vermillion transition-colors" size={20} />
                      <input
                        required
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-sandalwood/50 border-2 border-transparent rounded-2xl py-5 pl-16 pr-8 focus:bg-white focus:ring-4 focus:ring-vermillion/10 focus:border-vermillion outline-none font-bold transition-all text-mysticTeal"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="relative group">
                      <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-vermillion transition-colors" size={20} />
                      <input
                        required
                        type="tel"
                        placeholder="Contact Number"
                        className="w-full bg-sandalwood/50 border-2 border-transparent rounded-2xl py-5 pl-16 pr-8 focus:bg-white focus:ring-4 focus:ring-vermillion/10 focus:border-vermillion outline-none font-bold transition-all text-mysticTeal"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Section */}
                <div className="space-y-6 pt-4">
                  <button
                    disabled={isProcessing}
                    type="submit"
                    className="w-full py-8 divine-gradient text-white rounded-[2.5rem] font-bold text-2xl shadow-3xl shadow-vermillion/30 hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-6 disabled:opacity-50 uppercase tracking-[0.2em]"
                  >
                    {isProcessing ? (
                      <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <CreditCard size={32} />
                        Proceed to Sewa
                      </>
                    )}
                  </button>

                  <div className="flex flex-col items-center gap-6 pt-6">
                    <div className="flex items-center gap-8 text-[10px] text-gray-300 font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-2"><Shield size={16} className="text-green-500/50" /> Secure AES-256</span>
                      <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500/50" /> 80G Certified</span>
                    </div>
                    <p className="text-[10px] text-gray-300 text-center font-medium leading-relaxed max-w-[80%] italic">
                      All donations are received by Maha Maheswaram Dham Trust. A divine receipt will be sent to your email.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Donations;
