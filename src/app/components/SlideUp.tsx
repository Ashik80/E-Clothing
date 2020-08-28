import React, { useState, useEffect } from "react";

const SlideUp: React.FC<{offset?: number}> = ({ offset, children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.scrollY <= offset) {
      console.log(window.scrollY);
      setScrolled(false);
    } else {
      setScrolled(true);
    }
  };

  return (
    <div
      style={
        scrolled
          ? { position: "relative", top: 0, transition: "all 1s ease", zIndex: "-1" }
          : { position: "relative", top: 300, transition: "all 1s ease", zIndex: "-1" }
      }
    >
      {children}
    </div>
  );
};

export default SlideUp;
