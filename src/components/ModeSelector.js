export default function ModeSelector({ mode, setMode, modes }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {modes.map((m) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          className={`px-6 py-3 rounded-full border-2 border-green-600 font-semibold text-lg sm:text-xl transition ${
            mode === m
              ? 'bg-green-500 text-white'
              : 'text-green-600 hover:bg-green-200'
          }`}
        >
          {m}
        </button>
      ))}
    </div>
  );
}
