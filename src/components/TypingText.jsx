// components/TypingText.jsx
import { useState, useEffect } from 'react';

const TypingText = ({ texts, typingSpeed = 100, delayBetweenTexts = 3000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typeText = () => {
      if (currentIndex < texts.length) {
        let text = texts[currentIndex];
        let index = 0;
        let typingInterval = setInterval(() => {
          setDisplayedText((prev) => prev + text[index]);
          index++;
          if (index === text.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
              setDisplayedText('');
              setCurrentIndex((prev) => prev + 1);
            }, delayBetweenTexts);
          }
        }, typingSpeed);
      } else {
        setCurrentIndex(0);
      }
    };

    typeText();
  }, [currentIndex, texts, typingSpeed, delayBetweenTexts]);

  return (
    <div className="typing-container">
      {displayedText}
      <style jsx>{`
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
        
        .typing-container {
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          border-right: 0.15em solid;
          animation: typing ${typingSpeed * texts[0].length / 100}s steps(${texts[0].length}, end), blink 0.75s step-end infinite;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default TypingText;
