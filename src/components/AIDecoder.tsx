import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';

export default function AIDecoder() {
  return (
    <div id="ai-decoder" className="py-12 relative w-full">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-orange/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>New Feature</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6">AI Profile Decoder</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto text-balance">
            Instantly evaluate your academic profile, discover your chances, and explore tailored scholarship opportunities using our AI-powered tool.
          </p>
        </div>

        <div className="px-0 sm:px-6 lg:px-8 md:px-12">
          <div className="relative mx-auto max-w-5xl sm:rounded-[1.5rem] md:rounded-[2rem] border-y sm:border border-white/10 glass-panel overflow-hidden bg-black/40 shadow-2xl shadow-brand-orange/5 h-[90vh] sm:min-h-[600px] md:h-[800px]">
            <div className="absolute top-0 left-0 w-full h-10 sm:h-12 bg-white/5 border-b border-white/10 flex items-center justify-between px-4 sm:px-6 z-20">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
              </div>
              <a 
                href="https://aikkadam-decoder.streamlit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/80 transition-colors flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm font-medium"
                title="Open in new tab"
              >
                <span className="truncate max-w-[150px] sm:max-w-none">aikkadam-decoder.streamlit.app</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
              </a>
            </div>

            <iframe 
              src="https://aikkadam-decoder.streamlit.app/?embed=true"
              className="w-full h-full pt-10 sm:pt-12 border-none"
              title="Aik Kadam AI Decoder"
              allow="clipboard-write; clipboard-read"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
