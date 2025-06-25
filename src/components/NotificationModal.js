import { Coffee } from 'react-feather';

export default function NotificationModal({ message, onClose }) {
  return (
    <div className="absolute bottom-8 sm:bottom-10 bg-green-50 border border-green-300 shadow-md rounded-2xl px-6 py-4 flex items-center gap-4 animate-fade-in">
      <Coffee size={40} className="text-green-600" />
      <span className="text-green-500 italic text-xl sm:text-2xl">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 bg-green-500 text-white font-bold px-4 py-1 rounded-lg hover:bg-green-600 transition"
      >
        OK
      </button>
    </div>
  );
}
