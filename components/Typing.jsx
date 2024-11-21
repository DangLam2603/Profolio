// TypingText.js
import React from "react";
import useTypingEffect from "./typingHookEffect";

const TypingText = ({ text, delay = 100, typingSpeed = 70 }) => {
  const displayText = useTypingEffect(text, delay, typingSpeed);

  return (
    <p className="mt-4 mb-5 p-3 text-lg text-white">
      {displayText}
      {displayText && <span className="animate-pulse">|</span>}
    </p>
  );
};

export default TypingText;
