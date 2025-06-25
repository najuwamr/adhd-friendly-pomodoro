export default function ProgressBar({ progress }) {
  return (
    <div className="w-full max-w-md mt-4">
      <div className="h-3 bg-green-200 rounded-full">
        <div
          className="h-3 bg-green-500 rounded-full transition-all duration-300"
          style={{ width: `${progress * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
