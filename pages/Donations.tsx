
import React, { useState } from 'react';
import { CAMPAIGNS } from '../constants';
import { Shield, CreditCard, Heart, CheckCircle2, Star, Filter } from 'lucide-react';

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
    pan: '',
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
      <div className="max-w-4xl mx-auto px-4 py-24 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8 shadow-inner">
          <CheckCircle2 size={64} />
        </div>
        <h2 className="text-4xl font-bold mb-4 font-display">Divine Gratitude!</h2>
        <p className="text-xl text-gray-600 mb-10">
          Your donation of <span className="text-saffron font-bold">₹{amount}</span> for <span className="italic font-medium">{selectedCampaign.title}</span> has been received. 
          The trust blesses your kindness.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => setIsSuccess(false)}
            className="px-8 py-4 gradient-saffron text-white rounded-xl font-bold shadow-lg"
          >
            Make Another Seva
          </button>
          <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all">
            Download 80G Receipt
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfaf7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-display italic">Seva & Support</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your contributions fuel our mission to provide food, shelter, and spiritual guidance to all souls.
          </p>
        </div>

        {/* Festival Section Highlight */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <Star className="text-saffron fill-saffron" />
            <h2 className="text-2xl font-bold uppercase tracking-widest text-gray-500">Special Festival Seva</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {CAMPAIGNS.filter(c => c.category === 'Festival').map(festival => (
               <div key={festival.id} className="bg-white p-8 rounded-[3rem] border-2 border-saffron shadow-2xl flex flex-col md:flex-row gap-8 items-center group cursor-pointer hover:scale-[1.01] transition-all" onClick={() => { setSelectedCampaign(festival); window.scrollTo({top: document.getElementById('donation-form')?.offsetTop || 0, behavior: 'smooth'}); }}>
                  <div className="w-full md:w-48 h-48 rounded-[2rem] overflow-hidden flex-shrink-0">
                    <img src={festival.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                     <h3 className="text-2xl font-bold mb-2 text-gray-900">{festival.title}</h3>
                     <p className="text-gray-500 text-sm mb-4">{festival.description}</p>
                     <button className="px-6 py-2 bg-saffron text-white rounded-full text-sm font-bold shadow-md">Support Festival</button>
                  </div>
               </div>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Campaign Selection */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Choose a Category</h2>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {['All', 'Annadaan', 'Gau Seva', 'Yagya'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter as any)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                      activeFilter === filter ? 'bg-gray-900 text-white shadow-lg' : 'bg-white text-gray-500 border border-gray-100 hover:bg-gray-50'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCampaigns.filter(c => c.category !== 'Festival' || activeFilter === 'Festival').map(campaign => (
                <div 
                  key={campaign.id}
                  onClick={() => {
                    setSelectedCampaign(campaign);
                    setAmount(campaign.suggestedAmounts[0]);
                  }}
                  className={`p-6 rounded-[2.5rem] border-2 transition-all cursor-pointer flex flex-col gap-4 ${
                    selectedCampaign.id === campaign.id 
                      ? 'border-saffron bg-orange-50 shadow-xl scale-[1.02]' 
                      : 'border-white bg-white hover:border-orange-50 hover:shadow-lg shadow-sm'
                  }`}
                >
                  <div className="w-full h-40 rounded-3xl overflow-hidden shadow-md">
                    <img src={campaign.imageUrl} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="font-bold text-lg text-gray-900 leading-tight">{campaign.title}</h3>
                       {selectedCampaign.id === campaign.id && <CheckCircle2 size={20} className="text-saffron" />}
                    </div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">{campaign.category}</p>
                    <p className="text-xs text-gray-500 line-clamp-2">{campaign.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Donation Form */}
          <div id="donation-form" className="lg:col-span-5 bg-white rounded-[3rem] shadow-2xl border border-orange-50 overflow-hidden sticky top-28">
            <div className="p-8 border-b border-gray-100 bg-orange-50/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-saffron uppercase tracking-widest">Selected Seva</span>
                <Heart size={20} className="text-saffron fill-saffron" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{selectedCampaign.title}</h2>
            </div>

            <form onSubmit={handleDonate} className="p-10 space-y-8">
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Amount to Contribute</label>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {selectedCampaign.suggestedAmounts.map(amt => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt)}
                      className={`py-3 rounded-2xl font-bold text-sm border-2 transition-all ${
                        amount === amt 
                          ? 'border-saffron bg-saffron text-white shadow-lg' 
                          : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-orange-100'
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg">₹</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Other Amount"
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-5 pl-12 pr-6 focus:ring-4 focus:ring-saffron/20 focus:border-saffron outline-none transition-all text-xl font-bold"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Personal Details</label>
                <input
                  required
                  type="text"
                  placeholder="Your Name (As per PAN)"
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-saffron outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-saffron outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-saffron outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <input
                  type="text"
                  placeholder="PAN (Optional for 80G tax benefit)"
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-saffron outline-none"
                  value={formData.pan}
                  onChange={(e) => setFormData({...formData, pan: e.target.value})}
                />
              </div>

              <button
                disabled={isProcessing}
                type="submit"
                className="w-full py-5 gradient-saffron text-white rounded-2xl font-bold text-lg shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <CreditCard size={24} />
                    Secure Checkout
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-6 text-[10px] text-gray-400 font-bold uppercase tracking-wider pt-4">
                <span className="flex items-center gap-1"><Shield size={14} className="text-green-500" /> Secure Payments</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500" /> 80G Compliant</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;
