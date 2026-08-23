import { Terminal, ArrowRight } from "lucide-react";
import { CATEGORIES } from "../../data/categories.js";

const TOTAL_TOPICS = CATEGORIES.reduce((sum, c) => sum + c.topics.length, 0);

export function Login({ nameInput, setNameInput, handleLogin }) {
  return (
    <div className="io-root io-login-root">
      <div className="io-login-card">
        <div className="io-login-mark">
          <Terminal size={20} strokeWidth={2} />
        </div>
        <h1 className="io-login-title">Interview Ops</h1>
        <p className="io-login-sub">
          Sign in with a name to track your own progress. No password — this just keeps each person's checklist separate.
        </p>
        <div className="io-login-form">
          <input
            className="io-login-input"
            placeholder="e.g. priya, dev-team-alex"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleLogin();
            }}
            autoFocus
          />
          <button
            type="button"
            className="io-login-btn"
            onClick={handleLogin}
            disabled={!nameInput.trim()}
          >
            Continue
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="io-login-foot">
          {TOTAL_TOPICS} topics across {CATEGORIES.length} categories
        </div>
      </div>
    </div>
  );
}
