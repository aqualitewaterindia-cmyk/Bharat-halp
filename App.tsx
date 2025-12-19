
import React, { useState, useMemo } from 'react';
import { 
  Search, 
  PhoneCall, 
  ShieldAlert, 
  ChevronRight, 
  MapPin, 
  Building2, 
  ChevronLeft,
  X,
  Phone,
  Info,
  Navigation,
  Globe
} from 'lucide-react';
import { NATIONAL_HELPLINES, POLICE_DIRECTORY } from './constants';
import { StateData, District, PoliceStation } from './types';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);

  // Global Search Logic
  const searchResults = useMemo(() => {
    if (!searchTerm) return null;
    const results: { type: 'State' | 'District' | 'Station', path: string, item: any }[] = [];
    
    POLICE_DIRECTORY.forEach(state => {
      if (state.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push({ type: 'State', path: state.name, item: state });
      }
      state.districts.forEach(dist => {
        if (dist.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push({ type: 'District', path: `${state.name} > ${dist.name}`, item: dist });
        }
        dist.policeStations.forEach(ps => {
          if (ps.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push({ type: 'Station', path: `${state.name} > ${dist.name}`, item: ps });
          }
        });
      });
    });
    return results.slice(0, 10);
  }, [searchTerm]);

  const handleCall = (number: string) => {
    window.location.href = `tel:${number.replace(/\s+/g, '')}`;
  };

  const handleSearchSelect = (res: any) => {
    setSearchTerm('');
    if (res.type === 'State') {
      setSelectedState(res.item);
      setSelectedDistrict(null);
    } else if (res.type === 'District') {
      const state = POLICE_DIRECTORY.find(s => s.districts.some(d => d.name === res.item.name));
      if (state) setSelectedState(state);
      setSelectedDistrict(res.item);
    } else if (res.type === 'Station') {
      const state = POLICE_DIRECTORY.find(s => s.districts.some(d => d.policeStations.some(p => p.name === res.item.name)));
      const dist = state?.districts.find(d => d.policeStations.some(p => p.name === res.item.name));
      if (state) setSelectedState(state);
      if (dist) setSelectedDistrict(dist);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA]">
      {/* Primary Emergency Bar */}
      <div className="sticky top-0 z-50 bg-[#000080] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-white p-1 rounded">
              <PhoneCall size={18} className="text-[#000080]" fill="currentColor" />
            </div>
            <h1 className="text-lg font-black tracking-tight hidden sm:block">POLICE DIRECTORY INDIA</h1>
            <h1 className="text-lg font-black tracking-tight sm:hidden">PDI</h1>
          </div>
          
          <button 
            onClick={() => handleCall('112')}
            className="bg-[#E63946] hover:bg-red-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 font-black text-lg transition-transform active:scale-95 animate-pulse shadow-inner"
          >
            <ShieldAlert size={20} />
            DIAL 112
          </button>
        </div>
      </div>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 space-y-8">
        
        {/* Search Engine */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="text-slate-400" size={20} />
          </div>
          <input 
            type="text"
            placeholder="Search Police Station, District or State..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-12 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:border-[#000080] outline-none shadow-sm transition-all text-lg font-medium"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              <X size={20} />
            </button>
          )}

          {searchResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 z-40 overflow-hidden divide-y divide-slate-100 animate-in fade-in slide-in-from-top-2">
              {searchResults.map((res, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleSearchSelect(res)}
                  className="w-full text-left p-4 hover:bg-slate-50 flex items-center justify-between group/res"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#000080] bg-blue-50 px-2 py-0.5 rounded uppercase mr-2">
                      {res.type}
                    </span>
                    <span className="font-bold text-slate-700">{res.item.name}</span>
                    <div className="text-xs text-slate-400">{res.path}</div>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover/res:text-[#000080]" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Directory Explorer */}
        <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Navigation className="text-[#000080]" size={20} />
              <h2 className="font-black text-slate-800 tracking-tight">POLICE DIRECTORY</h2>
            </div>
            {(selectedState || selectedDistrict) && (
              <button 
                onClick={() => { setSelectedState(null); setSelectedDistrict(null); }}
                className="text-xs font-bold text-red-600 hover:bg-red-50 px-2 py-1 rounded"
              >
                Reset
              </button>
            )}
          </div>

          <div className="p-6">
            {!selectedState ? (
              /* State Selection */
              <div className="space-y-4">
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Select State / UT</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {POLICE_DIRECTORY.map(state => (
                    <button 
                      key={state.name}
                      onClick={() => setSelectedState(state)}
                      className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border-2 border-transparent hover:border-[#FF9933] hover:bg-white transition-all group"
                    >
                      <span className="font-bold text-slate-700">{state.name}</span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[#FF9933]" />
                    </button>
                  ))}
                </div>
              </div>
            ) : !selectedDistrict ? (
              /* District Selection */
              <div className="space-y-4">
                <button onClick={() => setSelectedState(null)} className="flex items-center gap-2 text-sm font-bold text-[#000080] mb-4">
                  <ChevronLeft size={16} /> Back to States
                </button>
                <div className="flex items-center gap-2 mb-6">
                   <h3 className="text-2xl font-black text-slate-900">{selectedState.name}</h3>
                   <span className="bg-[#FF9933]/10 text-[#FF9933] text-[10px] font-bold px-2 py-0.5 rounded uppercase">State Selected</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedState.districts.map(dist => (
                    <button 
                      key={dist.name}
                      onClick={() => setSelectedDistrict(dist)}
                      className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border-2 border-transparent hover:border-[#000080] hover:bg-white transition-all group"
                    >
                      <div>
                        <div className="font-bold text-slate-700">{dist.name}</div>
                        <div className="text-[10px] text-slate-400">{dist.policeStations.length} Police Stations</div>
                      </div>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[#000080]" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Police Station List */
              <div className="space-y-6">
                <button onClick={() => setSelectedDistrict(null)} className="flex items-center gap-2 text-sm font-bold text-[#000080]">
                  <ChevronLeft size={16} /> Back to Districts
                </button>
                
                <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">District Control Room</div>
                      <h3 className="text-2xl font-black">{selectedDistrict.name}</h3>
                    </div>
                    <button 
                      onClick={() => handleCall(selectedDistrict.controlRoomNumber)}
                      className="bg-white text-slate-900 px-6 py-3 rounded-xl font-black flex items-center gap-3 hover:bg-slate-100 transition-all"
                    >
                      <Phone size={20} fill="currentColor" />
                      {selectedDistrict.controlRoomNumber}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-slate-700 flex items-center gap-2">
                    <Building2 size={18} className="text-slate-400" />
                    Police Stations in {selectedDistrict.name}
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedDistrict.policeStations.map((ps, idx) => (
                      <div key={idx} className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#000080]/30 transition-all">
                        <div>
                          <h5 className="font-bold text-slate-800">{ps.name}</h5>
                          {ps.address && <p className="text-xs text-slate-500">{ps.address}</p>}
                        </div>
                        <button 
                          onClick={() => handleCall(ps.number)}
                          className="flex items-center justify-center gap-3 bg-blue-50 text-[#000080] px-5 py-2.5 rounded-xl font-black text-lg hover:bg-[#000080] hover:text-white transition-all"
                        >
                          <Phone size={18} fill="currentColor" />
                          {ps.number}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* National Emergency Grid */}
        <section className="space-y-4">
          <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Globe className="text-[#FF9933]" size={20} />
            NATIONAL HELPLINES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {NATIONAL_HELPLINES.map(h => (
              <button 
                key={h.id}
                onClick={() => handleCall(h.number)}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#FF9933] transition-all text-center group"
              >
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">{h.name}</div>
                <div className="text-2xl font-black text-slate-900 group-hover:text-[#000080]">{h.number}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-3xl flex gap-4 items-start">
          <Info className="text-blue-400 shrink-0" size={24} />
          <div className="text-sm text-blue-800 leading-relaxed">
            <strong>Citizen Guidance:</strong> This directory is part of the Digital India initiative. In life-threatening emergencies, always dial <strong>112</strong> immediately. The 112 system integrates police, fire, and ambulance services into a single response network across all States and Union Territories.
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
        © {new Date().getFullYear()} India Police & Emergency Directory • Verified Government Resource
      </footer>

      {/* Quick Action Floating Button (Mobile Only) */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => handleCall('112')}
          className="bg-[#E63946] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center animate-bounce animate-duration-[2000ms]"
        >
          <PhoneCall size={28} fill="currentColor" />
        </button>
      </div>
    </div>
  );
};

export default App;
