import { Terminal, Search, Check, ChevronRight, LogOut, Settings } from "lucide-react";

export function Sidebar({
  query,
  setQuery,
  filteredCategories,
  activeCategory,
  setActiveCategory,
  categoryProgress,
  activeTopicId,
  setActiveTopicId,
  setActiveTab,
  progress,
  profile,
  overallPct,
  switchProfile,
  isSidebarOpen,
  setIsSidebarOpen,
  onOpenPrefs
}) {
  return (
    <>
      <div 
        className={`io-sidebar-backdrop ${isSidebarOpen ? "is-open" : ""}`} 
        onClick={() => setIsSidebarOpen(false)} 
      />
      <aside className={`io-sidebar ${isSidebarOpen ? "is-open" : ""}`}>
      <div className="io-brand">
        <div className="io-brand-mark">
          <Terminal size={16} strokeWidth={2.5} />
        </div>
        <span className="io-brand-name">Interview Ops</span>
      </div>

      <div className="io-search">
        <Search size={14} />
        <input
          placeholder="Search topics…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <nav className="io-nav">
        {filteredCategories.map((cat) => {
          const cp = categoryProgress(cat);
          const isActive = cat.id === activeCategory;
          return (
            <div key={cat.id} className="io-cat-group">
              <button
                className={`io-cat-btn ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveCategory(isActive ? activeCategory : cat.id)}
              >
                <span className="io-cat-tag" style={{ background: `${cat.color}20`, color: cat.color }}>{cat.icon}</span>
                <span className="io-cat-name">{cat.name}</span>
                <span className="io-cat-count">
                  {cp.done}/{cp.total}
                </span>
              </button>
              <div className="io-spine">
                <div className="io-spine-fill" style={{ width: `${cp.pct}%` }} />
              </div>

              {isActive && (
                <div className="io-topic-list">
                  {cat.topics.map((t) => (
                    <button
                      key={t.id}
                      className={`io-topic-btn ${t.id === activeTopicId ? "is-active" : ""}`}
                      onClick={() => {
                        setActiveTopicId(t.id);
                        setActiveTab("overview");
                      }}
                    >
                      <span className={`io-dot ${progress[t.id] ? "is-done" : ""}`}>
                        {progress[t.id] && <Check size={10} strokeWidth={3} />}
                      </span>
                      <span>{t.title}</span>
                      <ChevronRight size={13} className="io-topic-chev" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="io-profile">
        <div className="io-profile-info">
          <div className="io-profile-avatar">{profile.slice(0, 1).toUpperCase()}</div>
          <div>
            <div className="io-profile-name">{profile}</div>
            <div className="io-profile-pct">{overallPct}% complete</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '4px' }}>
          <button
            className="io-profile-switch"
            onClick={onOpenPrefs}
            title="Preferences"
          >
            <Settings size={15} />
          </button>
          <button
            className="io-profile-switch"
            onClick={switchProfile}
            title="Switch profile"
          >
            <LogOut size={15} />
          </button>
        </div>
      </div>
    </aside>
    </>
  );
}
