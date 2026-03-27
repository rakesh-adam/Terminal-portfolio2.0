import React, { useState, useEffect, useRef } from 'react';

const IdCard = () => {
  const [cardPos, setCardPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isSpringing, setIsSpringing] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      setCardPos({
        x: e.clientX - dragStartRef.current.x,
        y: e.clientY - dragStartRef.current.y
      });
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setIsSpringing(true);
        setCardPos({ x: 0, y: 0 });
        setTimeout(() => setIsSpringing(false), 800);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsSpringing(false);
    dragStartRef.current = {
      x: e.clientX - cardPos.x,
      y: e.clientY - cardPos.y
    };
  };

  const dx = cardPos.x;
  const dy = Math.max(10, 64 + cardPos.y); 
  const stretchedLength = Math.sqrt(dx * dx + dy * dy);
  const stretchAngle = Math.atan2(-dx, dy) * (180 / Math.PI);

  return (
    <div className="hidden md:flex w-1/3 lg:w-1/4 border border-[#333] rounded-md h-[calc(100vh-140px)] min-h-[500px] relative justify-center overflow-hidden bg-[#050505] shadow-[inset_0_0_20px_rgba(0,0,0,1)] select-none shrink-0">
      <div className="absolute top-0 w-full flex justify-center animate-dropIn pointer-events-none" style={{ transformOrigin: 'top center' }}>
        <div className={`relative w-full flex justify-center ${!isDragging && !isSpringing ? 'animate-sway' : ''}`} style={{ transformOrigin: 'top center' }}>
          
          <div 
            className={`absolute top-0 w-4 bg-gradient-to-b from-[#111] via-[#333] to-[#111] shadow-xl border-l border-r border-[#222] origin-top ${isSpringing ? 'spring-bounce' : ''}`}
            style={{ 
              height: `${isDragging || isSpringing ? stretchedLength : 64}px`,
              transform: `rotate(${isDragging || isSpringing ? stretchAngle : 0}deg)`
            }}
          ></div>
          
          <div 
            className={`mt-[64px] flex flex-col items-center pointer-events-auto z-50 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} ${isSpringing ? 'spring-bounce' : ''}`}
            style={{ transform: `translate(${cardPos.x}px, ${cardPos.y}px) rotate(${cardPos.x * 0.05}deg)` }}
            onMouseDown={handleMouseDown}
          >
            <div className="w-6 h-4 bg-gray-500 rounded-sm -mt-1 z-10 flex justify-center items-start border-b-2 border-gray-700 shadow-md">
              <div className="w-2 h-2 rounded-full bg-[#111] mt-[2px]"></div>
            </div>
            
            <div className="w-56 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-[#00ff00]/30 rounded-xl flex flex-col items-center p-4 -mt-[2px] shadow-[0_15px_35px_rgba(0,255,0,0.15)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-20 pointer-events-none"></div>

              <div className="w-20 h-20 rounded-full border-2 border-[#00ff00] overflow-hidden bg-black shadow-[0_0_15px_rgba(0,255,0,0.3)] mt-1 pointer-events-none">
                <img 
                  src="/rakesh.jpeg" 
                  alt="Rakesh Matta" 
                  className="w-full h-full object-cover pointer-events-none"
                  onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Rakesh+Matta&background=000&color=00ff00&size=128' }}
                />
              </div>
              
              <h2 className="text-[#00ff00] font-bold text-lg mt-3 uppercase tracking-widest text-center">Rakesh Matta</h2>
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mt-1">23221A0575</p>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00ff00]/50 to-transparent my-3 pointer-events-none"></div>
              
              <div className="w-full text-[11px] text-gray-300 space-y-1.5 font-mono ml-2 pointer-events-none">
                <p><span className="text-yellow-400 w-12 inline-block">DOB:</span> 11-03-2005</p>
                <p><span className="text-yellow-400 w-12 inline-block">B.Tech:</span> CSE (2023-2027)</p>
                <p><span className="text-yellow-400 w-12 inline-block">Mobile:</span> +91 9177820572</p>
              </div>

              <div className="mt-4 flex gap-6 h-8 w-full justify-center opacity-80 pointer-events-auto">
                <a href="https://github.com/rakesh-adam" target="_blank" rel="noreferrer" onMouseDown={(e) => e.stopPropagation()} className="text-[#00ff00] hover:text-white transition-colors cursor-pointer">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/rakesh-matta-722b11330/" target="_blank" rel="noreferrer" onMouseDown={(e) => e.stopPropagation()} className="text-[#00ff00] hover:text-[#0a66c2] transition-colors cursor-pointer">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdCard;