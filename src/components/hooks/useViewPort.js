import { useEffect } from "react";
import { useState } from "react";

export const useViewPort = () => {
  const [widowWidth, setWidowWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );
  useEffect(() => {
    const handleWindowWidth = () => {
      const width = window.innerWidth || document.documentElement.clientWidth;
      setWidowWidth(width);
    };
    handleWindowWidth();
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);
  return [widowWidth]
};
