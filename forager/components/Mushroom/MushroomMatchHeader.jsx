export default function MatchBadge() {
  return (
    <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-3 py-1 rounded-full flex items-center shadow-md" style={{ flexShrink: 0, borderRadius: '10px', background: '#FF5050', fontFamily: 'Nunito' }}>
      <img src="/icons/icon_warning.svg" className="w-5 h-5" alt="warning icon" />
      <span className="font-semibold ml-1">97% Match</span>
    </div>
  );
}
