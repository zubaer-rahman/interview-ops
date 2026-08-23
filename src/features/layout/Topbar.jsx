import { Flame, Menu, Clock, Target } from "lucide-react";

export function Topbar({ overallPct, completedCount, TOTAL_TOPICS, loadingProfile, storageError, isSidebarOpen, setIsSidebarOpen, activeTopic }) {
  return (
    <header className="io-topbar">
      <div className="io-topbar-progress">
        <button 
          className="io-menu-btn" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle Menu"
        >
          <Menu size={20} />
        </button>
        <div className="io-ring">
          <svg viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="17" className="io-ring-track" />
            <circle
              cx="20"
              cy="20"
              r="17"
              className="io-ring-fill"
              strokeDasharray={`${overallPct * 1.068} 1000`}
            />
          </svg>
          <span className="io-ring-label">{overallPct}%</span>
        </div>
        <div>
          <div className="io-topbar-title">Overall progress</div>
          <div className="io-topbar-sub">
            {completedCount} of {TOTAL_TOPICS} topics completed
          </div>
        </div>
      </div>
      <div className="io-topbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {activeTopic && (
          <div className="io-topbar-meta" style={{ display: 'flex', gap: '8px' }}>
            {activeTopic.difficulty && (
              <div className={`io-meta-badge diff-${activeTopic.difficulty.toLowerCase()}`}>
                <Target size={14} />
                <span>{activeTopic.difficulty}</span>
              </div>
            )}
            {activeTopic.estimatedMinutes && (
              <div className="io-meta-badge time-badge">
                <Clock size={14} />
                <span>{activeTopic.estimatedMinutes}m</span>
              </div>
            )}
          </div>
        )}
        <div className="io-streak">
          <Flame size={14} />
          <span>
            {loadingProfile
              ? "Loading saved progress…"
              : storageError
              ? "Starting fresh — couldn't reach saved progress"
              : completedCount > 0
              ? "Keep going"
              : "Start your first topic"}
          </span>
        </div>
      </div>
    </header>
  );
}
