import React, { useState, useEffect } from 'react';

const TypeWriter = ({ html, speed = 10, onComplete, onType }) => {
  const [displayedHtml, setDisplayedHtml] = useState('');

  useEffect(() => {
    let currentHtml = '';
    let tokenIndex = 0;
    let charIndex = 0;
    let isMounted = true;

    const tokens = [];
    const regex = /(<[^>]*>)|([^<]+)/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
      if (match[1]) tokens.push({ type: 'tag', content: match[1] });
      else if (match[2]) tokens.push({ type: 'text', content: match[2] });
    }

    if (tokens.length === 0) {
      if (onComplete) onComplete();
      return;
    }

    const typeNext = () => {
      if (!isMounted) return;
      if (tokenIndex >= tokens.length) {
        if (onComplete) onComplete();
        return;
      }

      const token = tokens[tokenIndex];
      
      if (token.type === 'tag') {
        currentHtml += token.content;
        tokenIndex++;
        typeNext(); 
      } else {
        const chunkSize = 2;
        const charsToType = token.content.substr(charIndex, chunkSize);
        currentHtml += charsToType;
        charIndex += chunkSize;
        
        if (charIndex >= token.content.length) {
          charIndex = 0;
          tokenIndex++;
        }
        setDisplayedHtml(currentHtml);
        if (onType) onType();
        setTimeout(typeNext, speed);
      }
    };

    setTimeout(typeNext, speed);
    return () => { isMounted = false; };
  }, [html, speed, onComplete, onType]);

  return <div dangerouslySetInnerHTML={{ __html: displayedHtml }} />;
};

export default TypeWriter;