
import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Heart, Calendar, 
  Settings, LogOut, Search, Plus, MoreVertical,
  TrendingUp, TrendingDown, IndianRupee, Image, FileText, HelpCircle
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'donations' | 'events' | 'banners' | 'posts'>('dashboard');

  const stats = [
    { label: 'Total Donations', value: '₹24,56,700', trend: '+12.5%', icon: <IndianRupee className="text-saffron" />, up: true },
    { label: 'Total Donors', value: '1,240', trend: '+5.2%', icon: <Users className="text-blue-500" />, up: true },
    { label: 'Active Events', value: '12', trend: '-2.1%', icon: <Calendar className="text-purple-500" />, up: false },
    { label: 'Social Reach', value: '45K', trend: '+24%', icon: <Heart className="text-red-500" />, up: true },
  ];

  const recentDonations = [
    { id: '1', name: 'Rahul Sharma', amount: '₹1,100', campaign: 'Annadaan Seva', status: 'PAID', date: '2 mins ago' },
    { id: '2', name: 'Priya Singh', amount: '₹5,100', campaign: 'Vivah Bhawan', status: 'PAID', date: '15 mins ago' },
    { id: '3', name: 'Anonymous', amount: '₹501', campaign: 'General', status: 'FAILED', date: '1 hour ago' },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-gray-50 rounded-2xl">{stat.icon}</div>
                    <div className={`flex items-center gap-1 text-xs font-bold ${stat.up ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      {stat.trend}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-8 border-b border-gray-100 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold">Recent Activity</h3>
                  <p className="text-sm text-gray-500">Latest updates across all modules</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-2 bg-saffron text-white rounded-full font-bold text-sm shadow-lg shadow-orange-100">
                  <Plus size={18} /> New Entry
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider">
                    <tr>
                      <th className="px-8 py-4">Source</th>
                      <th className="px-8 py-4">Context</th>
                      <th className="px-8 py-4">Details</th>
                      <th className="px-8 py-4">Status</th>
                      <th className="px-8 py-4">Time</th>
                      <th className="px-8 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentDonations.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-5">
                          <div className="font-semibold text-gray-900">{item.name}</div>
                        </td>
                        <td className="px-8 py-5">
                          <span className="text-sm text-gray-600">{item.campaign}</span>
                        </td>
                        <td className="px-8 py-5">
                          <span className="font-bold text-gray-900">{item.amount}</span>
                        </td>
                        <td className="px-8 py-5">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                            item.status === 'PAID' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-8 py-5">
                          <span className="text-sm text-gray-400">{item.date}</span>
                        </td>
                        <td className="px-8 py-5 text-right">
                          <button className="p-2 text-gray-400 hover:text-gray-600">
                            <MoreVertical size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      case 'donations':
        return (
          <div className="bg-white p-12 rounded-[3rem] border border-gray-100 text-center">
            <Heart className="mx-auto text-saffron mb-6" size={64} />
            <h2 className="text-3xl font-bold mb-4">Donation Management</h2>
            <p className="text-gray-500 mb-8">Detailed reporting, 80G receipt automation, and campaign CRUD.</p>
            <button className="px-8 py-3 bg-saffron text-white rounded-full font-bold">Manage Campaigns</button>
          </div>
        );
      case 'events':
        return (
          <div className="bg-white p-12 rounded-[3rem] border border-gray-100 text-center">
            <Calendar className="mx-auto text-blue-500 mb-6" size={64} />
            <h2 className="text-3xl font-bold mb-4">Events & Calendar</h2>
            <p className="text-gray-500 mb-8">Manage one-time festivals and recurring community meals.</p>
            <button className="px-8 py-3 bg-blue-500 text-white rounded-full font-bold">Schedule Event</button>
          </div>
        );
      default:
        return (
          <div className="py-20 text-center text-gray-400">
            <Settings className="mx-auto mb-4 animate-spin-slow" size={48} />
            <p>Module rendering... Module settings coming soon.</p>
          </div>
        );
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-8 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-saffron rounded-lg flex items-center justify-center text-white font-bold text-xl">ॐ</div>
            <h2 className="font-bold text-gray-900 leading-tight">Temple<br/>Admin</h2>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {[
            { id: 'dashboard', label: 'Overview', icon: <LayoutDashboard size={20} /> },
            { id: 'donations', label: 'Donations', icon: <Heart size={20} /> },
            { id: 'events', label: 'Events', icon: <Calendar size={20} /> },
            { id: 'banners', label: 'Banners & Hero', icon: <Image size={20} /> },
            { id: 'posts', label: 'Social Updates', icon: <FileText size={20} /> },
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === item.id ? 'bg-orange-50 text-saffron shadow-sm' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
          <div className="pt-4 mt-4 border-t border-gray-100">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-400 hover:text-gray-600">
              <Users size={20} /> Users & Roles
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-400 hover:text-gray-600">
              <Settings size={20} /> Settings
            </button>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="bg-gray-50 p-4 rounded-2xl mb-4">
             <div className="flex items-center gap-3 mb-2">
                <HelpCircle size={16} className="text-saffron" />
                <span className="text-xs font-bold text-gray-900 uppercase">Support</span>
             </div>
             <p className="text-[10px] text-gray-500 leading-tight">Contact trust technical team for assistance.</p>
          </div>
          <button onClick={() => window.location.href = '/'} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50">
            <LogOut size={20} /> Exit Admin
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
             <h2 className="text-xl font-bold text-gray-900 capitalize">{activeTab}</h2>
             <span className="text-xs font-bold text-gray-300">/</span>
             <span className="text-xs font-bold text-gray-400">Primary Instance</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-gray-100 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-saffron w-64"
              />
            </div>
            <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-900">M. Pandit</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-saffron p-0.5 shadow-md">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="Admin" className="w-full h-full rounded-full bg-white" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
