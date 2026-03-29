import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      
      <div className="flex flex-col items-center justify-center gap-8">
        
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 flex items-center justify-center">
           
            <svg
              className="w-32 h-32 text-[#00ff00]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M 20 25 L 15 35 L 15 65 L 20 75" />
              <path d="M 80 25 L 85 35 L 85 65 L 80 75" />
              <circle cx="50" cy="50" r="20" />
              <circle cx="50" cy="50" r="3" fill="currentColor" />
            </svg>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-t from-[#00ff00] via-[#00cc00] to-transparent opacity-40 animate-charge"></div>
          </div>

          <div className="absolute inset-0 rounded-full animate-pulse" style={{
            boxShadow: '0 0 30px #00ff00, 0 0 60px rgba(0, 255, 0, 0.3)',
          }}></div>
        </div>

        <div className="text-center">
          <p className="text-[#00ff00] text-lg font-mono tracking-widest animate-pulse">
            INITIALIZING
          </p>
          <p className="text-[#00ff00] text-sm font-mono mt-2 opacity-70">
            Loading hacker mode...
          </p>
        </div>

        <div className="flex gap-1">
          <span className="w-2 h-2 bg-[#00ff00] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
          <span className="w-2 h-2 bg-[#00ff00] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-2 h-2 bg-[#00ff00] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
