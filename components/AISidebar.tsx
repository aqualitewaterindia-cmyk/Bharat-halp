
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X, Loader2, Info, AlertTriangle, ExternalLink } from 'lucide-react';
import { getEmergencyGuidance } from '../services/geminiService';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AISidebar: React.FC<Props> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string; sources?: { title: string; uri: string }[] }[]>([
    { role: 'bot', content: "Hello! I am your AI Emergency Assistant. I can provide safety guidance for accidents, fires, or medical emergencies. How can I help?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    const result = await getEmergencyGuidance(userMsg);
    
    setMessages(prev => [...prev, { 
      role: 'bot', 
      content: result.text,
      sources: result.sources
    }]);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-red-600 text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Bot size={20} />
            </div>
            <div>
              <h2 className="font-bold leading-none">Emergency Guide</h2>
              <span className="text-[10px] opacity-80 uppercase tracking-tighter">AI-Powered Safety Advice</span>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          <div className="bg-amber-50 border border-amber-100 p-3 rounded-xl flex gap-3 text-amber-800 text-sm">
            <AlertTriangle className="shrink-0" size={18} />
            <p><strong>Disclaimer:</strong> This AI assistant provides general guidance. In an actual emergency, always call <strong>112</strong> or <strong>100</strong> immediately.</p>
          </div>

          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl p-4 ${
                m.role === 'user' 
                  ? 'bg-red-600 text-white rounded-tr-none' 
                  : 'bg-slate-100 text-slate-800 rounded-tl-none shadow-sm'
              }`}>
                <div className="prose prose-sm prose-slate break-words">
                  {m.content.split('\n').map((line, idx) => (
                    <p key={idx} className="mb-2 last:mb-0">{line}</p>
                  ))}
                </div>
                {m.sources && m.sources.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Sources</p>
                    <div className="flex flex-wrap gap-2">
                      {m.sources.map((s, idx) => (
                        <a 
                          key={idx} 
                          href={s.uri} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-1 text-[10px] bg-white border border-slate-200 px-2 py-1 rounded hover:bg-slate-50 transition-colors text-slate-600"
                        >
                          <ExternalLink size={10} />
                          {s.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                <Loader2 className="animate-spin text-red-500" size={18} />
                <span className="text-sm text-slate-500">Consulting emergency protocols...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-slate-200 bg-slate-50">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask for safety tips (e.g. 'First aid for burns')"
              className="w-full pl-4 pr-12 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all shadow-sm"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AISidebar;
