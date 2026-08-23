import { Settings, X } from "lucide-react";

const FONTS = [
  { id: "'Inter', sans-serif", name: "Inter (Sans)" },
  { id: "'IBM Plex Mono', monospace", name: "IBM Plex (Mono)" },
  { id: "system-ui, sans-serif", name: "System Default" },
  { id: "'Georgia', serif", name: "Georgia (Serif)" }
];

export function PreferencesModal({ isOpen, onClose, prefs, updatePrefs, resetPrefs }) {
  if (!isOpen) return null;

  return (
    <div className="io-modal-backdrop" onClick={onClose}>
      <div className="io-modal" onClick={e => e.stopPropagation()}>
        <div className="io-modal-header">
          <div className="io-modal-title">
            <Settings size={18} />
            Preferences
          </div>
          <button className="io-modal-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <div className="io-modal-body">
          <div className="io-pref-section">
            <label className="io-pref-label">Theme</label>
            <div className="io-pref-group">
              <button 
                className={`io-pref-btn ${prefs.theme === 'dark' ? 'is-active' : ''}`}
                onClick={() => updatePrefs({ theme: 'dark' })}
              >
                Dark
              </button>
              <button 
                className={`io-pref-btn ${prefs.theme === 'light' ? 'is-active' : ''}`}
                onClick={() => updatePrefs({ theme: 'light' })}
              >
                Light
              </button>
            </div>
          </div>

          <div className="io-pref-section">
            <label className="io-pref-label">Body Font</label>
            <select 
              className="io-pref-select"
              value={prefs.bodyFont}
              onChange={(e) => updatePrefs({ bodyFont: e.target.value })}
            >
              {FONTS.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
              ))}
            </select>
          </div>

          <div className="io-pref-section">
            <label className="io-pref-label">Font Size</label>
            <div className="io-pref-row">
              <input 
                type="range" 
                min="14" max="20" step="1"
                value={prefs.fontSize}
                onChange={(e) => updatePrefs({ fontSize: Number(e.target.value) })}
                className="io-pref-range"
              />
              <span className="io-pref-val">{prefs.fontSize}px</span>
            </div>
          </div>
          <div className="io-pref-section">
            <label className="io-pref-label">Line Height</label>
            <div className="io-pref-row">
              <input 
                type="range" 
                min="1.2" max="2.2" step="0.05"
                value={prefs.lineHeight}
                onChange={(e) => updatePrefs({ lineHeight: Number(e.target.value) })}
                className="io-pref-range"
              />
              <span className="io-pref-val">{prefs.lineHeight}</span>
            </div>
          </div>

          <div className="io-pref-section">
            <label className="io-pref-label">Content Width</label>
            <div className="io-pref-row">
              <input 
                type="range" 
                min="600" max="1200" step="20"
                value={prefs.contentWidth}
                onChange={(e) => updatePrefs({ contentWidth: Number(e.target.value) })}
                className="io-pref-range"
              />
              <span className="io-pref-val">{prefs.contentWidth}px</span>
            </div>
          </div>
          
          <button className="io-pref-reset" onClick={resetPrefs}>
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
}
