
import React, { useState } from 'react';
import { Globe, Phone, Info, ChevronDown, ChevronUp, Search, Map } from 'lucide-react';
import { StateData } from '../types';

interface Props {
  data: StateData[];
}

const StateSelector: React.FC<Props> = ({ data }) => {
  const [activeRegion, setActiveRegion] = useState(data[0].region);
  const [expandedState, setExpandedState] = useState<string | null>(null);
  const [districtSearch, setDistrictSearch] = useState('');

  const regionData = data.find(r => r.region === activeRegion);

  const toggleExpand = (stateName: string) => {
    if (expandedState === stateName) {
      setExpandedState(null);
    } else {
      setExpandedState(stateName);
      setDistrictSearch('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Globe className="text-red-500" size={24} />
        <h2 className="text-xl font-bold text-slate-800">State Directory & Districts</h2>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar custom-scrollbar">
        {data.map((region) => (
          <button
            key={region.region}
            onClick={() => {
              setActiveRegion(region.region);
              setExpandedState(null);
            }}
            className={`px-4 py-2 rounded-xl whitespace-nowrap text-sm font-bold transition-all ${
              activeRegion === region.region
                ? 'bg-slate-900 text-white shadow-lg'
                : 'bg-white text-slate-500 border border-slate-200 hover:border-red-300'
            }`}
          >
            {region.region}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {regionData?.states.map((state) => (
          <div 
            key={state.name}
            className={`bg-white border rounded-2xl overflow-hidden transition-all ${
              expandedState === state.name ? 'border-red-400 ring-1 ring-red-100' : 'border-slate-200 hover:border-red-300'
            }`}
          >
            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div 
                  onClick={() => toggleExpand(state.name)}
                  className="cursor-pointer group flex-1"
                >
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">State / UT</div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-800 text-lg group-hover:text-red-600 transition-colors">{state.name}</h4>
                    {expandedState === state.name ? <ChevronUp size={16} className="text-red-500" /> : <ChevronDown size={16} className="text-slate-400" />}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleExpand(state.name)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    expandedState === state.name ? 'bg-slate-100 text-slate-700' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  <Map size={14} />
                  {expandedState === state.name ? 'Hide Districts' : `View ${state.districts?.length || 0} Districts`}
                </button>
                <a 
                  href={`tel:${state.womenHelpline}`}
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl font-black text-lg hover:bg-red-700 transition-all shadow-md"
                >
                  <Phone size={18} fill="currentColor" />
                  {state.womenHelpline}
                </a>
              </div>
            </div>

            {expandedState === state.name && state.districts && (
              <div className="bg-slate-50 border-t border-slate-200 p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-center justify-between mb-4 gap-4">
                   <h5 className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    Districts of {state.name}
                   </h5>
                   <div className="relative max-w-xs w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input 
                      type="text"
                      placeholder="Find district..."
                      value={districtSearch}
                      onChange={(e) => setDistrictSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none shadow-sm"
                    />
                   </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-h-60 overflow-y-auto custom-scrollbar pr-2">
                  {state.districts
                    .filter(d => d.toLowerCase().includes(districtSearch.toLowerCase()))
                    .map(district => (
                      <div key={district} className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-600 hover:border-red-200 hover:text-red-600 transition-all">
                        {district}
                      </div>
                    ))
                  }
                  {state.districts.filter(d => d.toLowerCase().includes(districtSearch.toLowerCase())).length === 0 && (
                    <div className="col-span-full py-4 text-center text-slate-400 text-xs italic">
                      No district found matching "{districtSearch}"
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex gap-3 text-blue-800 text-sm">
        <Info className="shrink-0" size={20} />
        <p>While state-specific numbers exist, <strong>112</strong> is the primary unified emergency number valid across all districts for immediate assistance.</p>
      </div>
    </div>
  );
};

export default StateSelector;
