// TypingText.jsx
import React from "react";
import useTypingEffect from "./TypingHookEffect"; // Correct the path to the actual filename

const TypingText = ({ text, delay = 100, typingSpeed = 70 }) => {
  const displayText = useTypingEffect(text, delay, typingSpeed);

  return (
    <p className="mt-5 mb-5 p-3 text-lg text-white">
      {displayText}
      {displayText && <span className="animate-pulse">|</span>}
    </p>
  );
};

export default TypingText;
