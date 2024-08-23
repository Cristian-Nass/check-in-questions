import { useState, useEffect, useCallback } from "react";

const useCountdown = (initialCount: number) => {
  const [count, setCount] = useState(initialCount);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive && count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isActive, count]);

  const startCountdown = useCallback(() => {
    setIsActive(true);
  }, []);

  const togglePause = useCallback(() => {
    setIsActive((prevIsActive) => !prevIsActive);
  }, []);

  const resetCountdown = useCallback(() => {
    setIsActive(false);
    setCount(initialCount);
  }, [initialCount]);

  return { count, isActive, startCountdown, togglePause, resetCountdown };
};

export default useCountdown;
