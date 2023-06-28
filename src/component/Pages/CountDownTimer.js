import React, { useState, useEffect, useRef } from "react";

const CountdownTimer = () => {
  const [timer, setTimer] = useState(() => {
    const storedTimer = localStorage.getItem("countdownTimer");
    return storedTimer ? parseInt(storedTimer) : 900; // 900 seconds = 15 minutes
  });

  const [quarter, setQuarter] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("countdownTimer", timer.toString());
  }, [timer]);

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.play().catch((error) => {
      // Handle playback error
      console.log("Audio playback error:", error);
    });
  }, []);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const audioElement = audioRef.current;
      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement.play().catch((error) => {
        // Handle playback error
        console.log("Audio playback error:", error);
      });
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            clearInterval(intervalRef.current);
            if (quarter < 4) {
              setQuarter((prevQuarter) => prevQuarter + 1);
              setTimer(900); // Reset timer to 15 minutes for the next quarter
            }
          }
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setQuarter(1);
    setTimer(900);
    localStorage.removeItem("countdownTimer");
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <div>Quarter: {quarter}</div>
      <div>Time Remaining: {formatTime(timer)}</div>
      {!isRunning ? (
        <>
          <button onClick={startTimer}>Start</button>
          <button onClick={resetTimer}>Reset</button>
        </>
      ) : (
        <button onClick={pauseTimer}>Pause</button>
      )}
      <audio ref={audioRef}>
        <source src="src/component/Pages/218318__splicesound__referee-whistle-blow-gymnasium.wav" type="audio/wav" />
      </audio>
    </div>
  );
};

export default CountdownTimer;
