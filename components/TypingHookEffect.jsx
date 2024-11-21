// TypingHookEffect.jsx
import { useState, useEffect } from "react";

const useTypingEffect = (text, delay = 0, typingSpeed = 0) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (text) {
      const typingTimeout = setTimeout(() => {
        setIsTyping(true);
      }, delay);

      return () => clearTimeout(typingTimeout);
    }
  }, [text, delay]);

  useEffect(() => {
    if (isTyping) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }
  }, [isTyping, text, typingSpeed]);

  return displayText;
};

export default useTypingEffect;
