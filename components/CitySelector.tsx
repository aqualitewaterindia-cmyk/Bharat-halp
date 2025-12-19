
import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { CityData } from '../types';

interface Props {
  cities: CityData[];
  selectedCity: CityData | null;
  onSelect: (city: CityData) => void;
}

const CitySelector: React.FC<Props> = ({ cities, selectedCity, onSelect }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="text-red-500" size={24} />
        <h2 className="text-xl font-bold text-slate-800">City Specific Helplines</h2>
      </div>
      
      <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar custom-scrollbar">
        {cities.map((city) => (
          <button
            key={city.name}
            onClick={() => onSelect(city)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
              selectedCity?.name === city.name
                ? 'bg-red-600 text-white shadow-md ring-2 ring-red-100'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-red-300'
            }`}
          >
            {city.name}
          </button>
        ))}
      </div>

      {selectedCity && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
            <h3 className="font-bold text-slate-800 text-lg">
              {selectedCity.name}, <span className="text-slate-500 font-medium">{selectedCity.state}</span>
            </h3>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {Object.entries(selectedCity.numbers).map(([label, val]) => {
              // Fix: Explicitly cast the value to string to resolve the 'unknown' type error during build
              const number = val as string;
              return (
                <a
                  key={label}
                  href={`tel:${number.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-red-50 border border-transparent hover:border-red-100 transition-all group"
                >
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                      {label}
                    </div>
                    <div className="text-xl font-black text-slate-800 group-hover:text-red-600">
                      {number}
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-full shadow-sm text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                    <Phone size={18} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CitySelector;
