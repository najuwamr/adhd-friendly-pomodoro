export default function TimerDisplay({ minutes, seconds }) {
  return (
    <div className="text-8xl sm:text-9xl font-mono font-bold text-green-700 tracking-wider">
      {minutes}:{seconds}
    </div>
  );
}
