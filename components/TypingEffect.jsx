"use client";
import React, { useState, useEffect } from "react";

const TypingHeader = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDelaying, setIsDelaying] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const fullText = "Hello, I'm\nDang Lam!";

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIsDelaying(false);
      setIsTyping(true);
    }, 2000);

    return () => clearTimeout(delayTimer);
  }, []);

  useEffect(() => {
    if (isTyping) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [isTyping]);

  // Split the text to handle line break
  const [firstLine, secondLine] = displayText.split("\n");

  return (
    <h1 className="h1 mb-6">
      {isDelaying ? (
        ""
      ) : (
        <>
          {firstLine}
          <br />
          <span className="text-accent">{secondLine}</span>
          {isTyping && <span className="animate-pulse">|</span>}
        </>
      )}
    </h1>
  );
};

export default TypingHeader;
