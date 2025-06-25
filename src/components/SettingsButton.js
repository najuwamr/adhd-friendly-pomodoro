import { Settings } from 'react-feather';

export default function SettingsButton() {
  return (
    <div className="absolute bottom-6 left-6">
      <button className="text-green-800 hover:rotate-45 transition-transform duration-300">
        <Settings size={36} />
      </button>
    </div>
  );
}
