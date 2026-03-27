import React, { useState, useEffect, useRef, useCallback } from 'react';
import TypeWriter from './TypeWriter';
import { getCommandOutput } from '../utils/commandHandler';

const initialOutput = `
  <div class="text-[#00ff00] mb-4 text-lg">
    <p>Starting up...</p>
    <br/>
    <p>Welcome to Rakesh Adam's interactive portfolio!</p>
    <br/>
    <p>Type <span class="text-[#ff00ff] italic">help</span> for a list of commands</p>
  </div>
`;

const Terminal = () => {
  const [history, setHistory] = useState([
    { id: 0, command: '', output: initialOutput, isTyping: true }
  ]);
  const [input, setInput] = useState('');
  const [isGlobalTyping, setIsGlobalTyping] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'auto' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  // Expose focus function to parent so clicking anywhere focuses input
  useEffect(() => {
    const handleGlobalClick = () => {
      if (!isGlobalTyping) inputRef.current?.focus();
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [isGlobalTyping]);

  const handleCommand = (e) => {
    if (e.key === 'Enter' && !isGlobalTyping) {
      const trimmedInput = input.trim().toLowerCase();
      
      if (trimmedInput === '') {
        addHistory('', '');
        setInput('');
        return;
      }

      if (trimmedInput === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }

      if (trimmedInput === 'download') {
        const link = document.createElement('a');
        link.href = '/Resume.pdf'; // Make sure this is in your public folder
        link.download = 'Rakesh_Matta_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        addHistory(input, '<div class="mt-2 text-[#00ff00]">Initiating download for Rakesh_Matta_Resume.odf...</div>');
        setInput('');
        return;
      }

      const args = trimmedInput.split(' ');
      const newOutputHtml = getCommandOutput(args[0], args);
      addHistory(input, newOutputHtml);
      setInput('');
    }
  };

  const addHistory = (cmd, outHtml) => {
    setIsGlobalTyping(true);
    setHistory(prev => [
      ...prev.map(item => ({ ...item, isTyping: false })),
      { id: Date.now(), command: cmd, output: outHtml, isTyping: true }
    ]);
  };

  return (
    <div className="flex-1 overflow-y-auto pb-4 custom-scrollbar lg:pr-4 h-full">
      {history.map((item) => (
        <div key={item.id} className="mb-2">
          {item.command && (
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-[#00ff00] font-bold">visitor@rakesh-matta:</span>
              <span className="text-blue-400 font-bold">~/portfolio</span>
              <span className="text-gray-400">$</span>
              <span className="text-white">{item.command}</span>
            </div>
          )}
          {item.output && (
            <div className="ml-4 sm:ml-6">
              {item.isTyping ? (
                <TypeWriter 
                  html={item.output} 
                  speed={5} 
                  onType={scrollToBottom}
                  onComplete={() => {
                    setIsGlobalTyping(false);
                    setHistory(prev => prev.map(h => h.id === item.id ? { ...h, isTyping: false } : h));
                    setTimeout(() => inputRef.current?.focus(), 10);
                  }} 
                />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: item.output }} />
              )}
            </div>
          )}
        </div>
      ))}
      
      {!isGlobalTyping && (
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <span className="text-[#00ff00] font-bold">visitor@rakesh-matta:</span>
          <span className="text-blue-400 font-bold">~/portfolio</span>
          <span className="text-gray-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent border-none outline-none text-white font-mono min-w-[100px] caret-[#00ff00]"
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      )}
      <div ref={bottomRef} className="h-4" />
    </div>
  );
};

export default Terminal;