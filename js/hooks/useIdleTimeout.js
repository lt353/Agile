// Idle timeout hook
function useIdleTimeout(onIdle, timeout = 60000, warningTime = 15000) {
  const { useState, useEffect, useCallback, useRef } = React;
  const [showWarning, setShowWarning] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const timeoutRef = useRef(null);
  const warningRef = useRef(null);
  const countdownRef = useRef(null);

  const resetTimer = useCallback(() => {
    setShowWarning(false);
    setCountdown(15);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (warningRef.current) clearTimeout(warningRef.current);
    if (countdownRef.current) clearInterval(countdownRef.current);

    timeoutRef.current = setTimeout(() => {
      setShowWarning(true);
      setCountdown(15);

      let count = 15;
      countdownRef.current = setInterval(() => {
        count--;
        setCountdown(count);
        if (count <= 0) {
          clearInterval(countdownRef.current);
          onIdle();
        }
      }, 1000);
    }, timeout);
  }, [onIdle, timeout]);

  useEffect(() => {
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];

    events.forEach(event => {
      document.addEventListener(event, resetTimer, { passive: true });
    });

    resetTimer();

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, resetTimer);
      });
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (warningRef.current) clearTimeout(warningRef.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, [resetTimer]);

  return { showWarning, countdown, dismissWarning: resetTimer };
}
