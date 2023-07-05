import { useState, useEffect } from "react";

export function useBlacked() {
  const [blacked, setBlacked] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 0) {
      setBlacked(true);
    } else setBlacked(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return blacked;
}