import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ModeSelector from './components/ModeSelector';
import TimerDisplay from './components/TimerDisplay';
import Controls from './components/Controls';
import ProgressBar from './components/ProgressBar';
import SettingsButton from './components/SettingsButton';
import NotificationModal from './components/NotificationModal';

const defaultTimes = {
  'pomodoro': 25 * 60,
  'short break': 5 * 60,
  'long break': 15 * 60,
};

function App() {
  const [mode, setMode] = useState('short break');
  const [timeLeft, setTimeLeft] = useState(defaultTimes[mode]);
  const [isRunning, setIsRunning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [nextMessage, setNextMessage] = useState('');

  useEffect(() => {
    setTimeLeft(defaultTimes[mode]);
    setIsRunning(false);
  }, [mode]);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleTimeEnd = () => {
    const next = mode === 'pomodoro' ? 'short break' : 'pomodoro';
    const message = next === 'pomodoro' ? 'waktunya fokus!' : 'waktu istirahat!';
    setMode(next);
    setNextMessage(message);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 5000);
  };

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');
  const progress = 1 - timeLeft / defaultTimes[mode];

  return (
    <div className="min-h-screen bg-green-100 font-inter flex items-center justify-center px-4 py-10 relative">
      <div className="w-full max-w-xl sm:max-w-2xl flex flex-col items-center gap-8">
        <Header />
        <ModeSelector mode={mode} setMode={setMode} modes={Object.keys(defaultTimes)} />
        <TimerDisplay minutes={minutes} seconds={seconds} />
        <Controls
          isRunning={isRunning}
          toggleRunning={() => setIsRunning((prev) => !prev)}
          resetTime={() => setTimeLeft(defaultTimes[mode])}
        />
        <ProgressBar progress={progress} />
      </div>
      <SettingsButton />
      {showModal && (
        <NotificationModal
          message={nextMessage}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default App;
