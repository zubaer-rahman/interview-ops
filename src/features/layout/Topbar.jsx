import { Flame } from "lucide-react";

export function Topbar({ overallPct, completedCount, TOTAL_TOPICS, loadingProfile, storageError }) {
  return (
    <header className="io-topbar">
      <div className="io-topbar-progress">
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
    </header>
  );
}
