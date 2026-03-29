import React, { useState, useEffect } from 'react';
import Terminal from './components/Terminal';
import IdCard from './components/IdCard';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="h-[100dvh] overflow-hidden flex flex-col bg-black text-[#00ff00] font-mono p-4 sm:p-8 cursor-text selection:bg-[#00ff00] selection:text-black tracking-wide">
      <div className="max-w-6xl w-full mx-auto flex flex-col flex-1 text-base sm:text-lg h-full min-h-0">
        
        <header className="w-full text-center border-b border-[#333] pb-4 mb-4 shrink-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            Rakesh Adam's Portfolio
          </h1>
        </header>

        <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-0">
          <Terminal />
          <IdCard />
        </div>

      </div>
    </div>
  );
};

export default App;