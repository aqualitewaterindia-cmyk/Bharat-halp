
import React from 'react';
import { Phone, Info, Share2 } from 'lucide-react';
import { Helpline } from '../types';

interface Props {
  helpline: Helpline;
  onCall: (num: string) => void;
}

const HelplineCard: React.FC<Props> = ({ helpline, onCall }) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Emergency': return 'bg-red-50 text-red-600 border-red-100';
      case 'Social': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Utility': return 'bg-orange-50 text-orange-600 border-orange-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: `India Helpline: ${helpline.name}`,
        text: `Urgent: Call ${helpline.name} at ${helpline.number}`,
        url: window.location.href
      });
    }
  };

  return (
    <div 
      onClick={() => onCall(helpline.number)}
      className="group bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-red-400 transition-all cursor-pointer active:scale-[0.98]"
    >
      <div className="flex justify-between items-start mb-2">
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${getCategoryColor(helpline.category)}`}>
          {helpline.category}
        </span>
        <button onClick={handleShare} className="p-1 text-slate-400 hover:text-slate-600">
          <Share2 size={16} />
        </button>
      </div>
      
      <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1 group-hover:text-red-600 transition-colors">
        {helpline.name}
      </h3>
      
      {helpline.description && (
        <p className="text-xs text-slate-500 mb-3 line-clamp-2">
          {helpline.description}
        </p>
      )}

      <div className="flex items-center justify-between mt-auto">
        <div className="text-2xl font-black text-slate-900 tracking-tight">
          {helpline.number}
        </div>
        <div className="bg-red-500 text-white p-2 rounded-full group-hover:bg-red-600 shadow-sm transition-all">
          <Phone size={20} fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default HelplineCard;
