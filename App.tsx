
import React, { useState, useMemo } from 'react';
import { 
  Search, 
  PhoneCall, 
  ShieldAlert, 
  MessageCircle, 
  Heart, 
  Building2, 
  Users, 
  Filter,
  ArrowRight,
  Menu,
  X,
  Globe
} from 'lucide-react';
import { NATIONAL_HELPLINES, CITY_DATA, STATE_DATA } from './constants';
import { Helpline, CityData, Category } from './types';
import HelplineCard from './components/HelplineCard';
import CitySelector from './components/CitySelector';
import StateSelector from './components/StateSelector';
import AISidebar from './components/AISidebar';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedCity, setSelectedCity] = useState<CityData | null>(CITY_DATA[0]);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredHelplines = useMemo(() => {
    return NATIONAL_HELPLINES.filter(h => {
      const matchesSearch = h.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           h.number.includes(searchTerm);
      const matchesCategory = selectedCategory === 'All' || h.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleCall = (number: string) => {
    window.location.href = `tel:${number.replace(/\s+/g, '')}`;
  };

  const categories: { label: Category | 'All'; icon: React.ReactNode }[] = [
    { label: 'All', icon: <Filter size={18} /> },
    { label: 'Emergency', icon: <ShieldAlert size={18} /> },
    { label: 'Social', icon: <Users size={18} /> },
    { label: 'Utility', icon: <Building2 size={18} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfd]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded-lg text-white">
              <PhoneCall size={20} fill="currentColor" />
            </div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">
              INDIA<span className="text-red-600">HELPLINE</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#directory" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">Directory</a>
            <a href="#states" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">State Directory</a>
            <a href="#cities" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">City Guide</a>
            <button 
              onClick={() => setIsAiOpen(true)}
              className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95"
            >
              <MessageCircle size={18} />
              AI Assistant
            </button>
          </nav>

          <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 p-4 bg-white space-y-3 animate-in fade-in slide-in-from-top-4 shadow-xl">
            <a href="#directory" onClick={() => setMobileMenuOpen(false)} className="block p-3 font-bold text-slate-700 hover:bg-slate-50 rounded-xl">Directory</a>
            <a href="#states" onClick={() => setMobileMenuOpen(false)} className="block p-3 font-bold text-slate-700 hover:bg-slate-50 rounded-xl">State Directory</a>
            <a href="#cities" onClick={() => setMobileMenuOpen(false)} className="block p-3 font-bold text-slate-700 hover:bg-slate-50 rounded-xl">City Guide</a>
            <button 
              onClick={() => { setIsAiOpen(true); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 bg-red-600 text-white p-3 rounded-xl font-bold"
            >
              <MessageCircle size={20} />
              Open AI Assistant
            </button>
          </div>
        )}
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 w-full py-8 space-y-12">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <div className="relative z-10 md:max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              24/7 National Emergency
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              One Number for <br />Every Emergency: <span className="text-amber-400">112</span>
            </h2>
            <p className="text-lg text-red-100 mb-8 max-w-lg leading-relaxed">
              India's unified emergency response system. Use 112 for Police, Fire, Ambulance, and more across all states.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => handleCall('112')}
                className="bg-white text-red-600 px-8 py-4 rounded-2xl font-black text-xl flex items-center gap-3 hover:bg-slate-100 transition-all shadow-lg active:scale-95"
              >
                <PhoneCall size={24} fill="currentColor" />
                CALL 112 NOW
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 h-full w-full pointer-events-none opacity-10 flex items-center justify-end p-8">
            <PhoneCall size={400} />
          </div>
        </section>

        {/* Directory Section */}
        <section id="directory" className="space-y-6 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">National Helpline Directory</h2>
              <p className="text-slate-500 max-w-xl">Search and filter across India's verified national service numbers.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text"
                  placeholder="Search service or number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat.label
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-red-300'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredHelplines.length > 0 ? (
              filteredHelplines.map((h) => (
                <HelplineCard key={h.id} helpline={h} onCall={handleCall} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center bg-white rounded-3xl border border-dashed border-slate-300">
                <div className="text-slate-400 mb-2">No helplines matching your filters</div>
                <button 
                  onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                  className="text-red-600 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* State Guide Section */}
        <section id="states" className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 scroll-mt-20">
          <StateSelector data={STATE_DATA} />
        </section>

        {/* City Wise Section */}
        <section id="cities" className="bg-slate-100/50 rounded-3xl p-6 md:p-10 scroll-mt-20">
          <CitySelector 
            cities={CITY_DATA} 
            selectedCity={selectedCity} 
            onSelect={setSelectedCity} 
          />
        </section>

        {/* Info / FAQ Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Need Urgent Safety Advice?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our AI Emergency Guide is trained to provide instant step-by-step instructions for medical emergencies, accident reporting, and personal safety while you wait for professional help.
            </p>
            <ul className="space-y-3">
              {[
                "Fire safety and evacuation steps",
                "Basic first aid for burns or fractures",
                "Cyber-crime reporting procedures",
                "Women safety protocols in travel"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full">
                    <ArrowRight size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setIsAiOpen(true)}
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-slate-800 transition-all shadow-lg"
            >
              START AI CONSULTATION
            </button>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-100 to-red-50 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2070&auto=format&fit=crop" 
              alt="Public Safety" 
              className="relative rounded-3xl shadow-xl border-4 border-white aspect-video object-cover"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-red-600 p-1.5 rounded-lg text-white">
                  <PhoneCall size={16} fill="currentColor" />
                </div>
                <h3 className="text-lg font-black text-slate-900">INDIA HELPLINE</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                A non-profit community initiative providing simplified access to emergency and utility services across the Republic of India. Always verify numbers with official government sources.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Essential Services</h4>
              <div className="flex flex-wrap gap-2">
                {['112 Emergency', '1098 Child Care', '181 Women', '1930 Cyber Crime', '14567 Senior Citizens'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Disclaimer</h4>
              <p className="text-xs text-slate-400 italic">
                Information provided is for reference only. In critical life-threatening situations, use physical emergency buttons or dial 112 directly. We do not store any personal data or track your calls.
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
            <p>© {new Date().getFullYear()} India Helpline Pro. Made with <Heart className="inline text-red-500 mx-1" size={14} fill="currentColor" /> for Citizen Safety.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-600 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-red-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Sidebar Overlay */}
      <AISidebar isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
      
      {/* Quick Action Floating Button (Mobile Only) */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => handleCall('112')}
          className="bg-red-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center animate-bounce animate-duration-[2000ms]"
        >
          <PhoneCall size={28} fill="currentColor" />
        </button>
      </div>
    </div>
  );
};

export default App;
