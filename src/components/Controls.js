import { RotateCcw } from 'react-feather';

export default function Controls({ isRunning, toggleRunning, resetTime }) {
  return (
    <div className="flex items-center gap-6">
      <button
        onClick={toggleRunning}
        className="px-8 py-3 border-2 border-green-700 text-green-700 rounded-full hover:bg-green-200 transition text-2xl"
      >
        {isRunning ? 'pause' : 'start'}
      </button>
      <button
        onClick={resetTime}
        className="text-green-600 hover:text-green-800"
      >
        <RotateCcw size={36} />
      </button>
    </div>
  );
}
