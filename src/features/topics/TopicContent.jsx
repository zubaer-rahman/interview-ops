import React from "react";
import { Check, BookOpen, Lightbulb, Layers, MessageSquareText, Workflow, Code2, ArrowRight } from "lucide-react";

export const TABS = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "plain", label: "Plain English", icon: Lightbulb },
  { id: "deepdive", label: "Deep Dive", icon: Layers },
  { id: "qa", label: "Interview Q&A", icon: MessageSquareText },
  { id: "blueprint", label: "Blueprint", icon: Workflow },
  { id: "code", label: "Code", icon: Code2 },
];

export function TopicContent({ activeTopic, progress, toggleComplete, activeTab, setActiveTab }) {
  if (!activeTopic) return null;

  return (
    <div className="io-content">
      <div className="io-content-head">
        <div className="io-breadcrumb">{activeTopic.categoryName}</div>
        <div className="io-content-title-row">
          <h2 className="io-content-title">{activeTopic.title}</h2>
          <button
            className={`io-complete-btn ${progress[activeTopic.id] ? "is-done" : ""}`}
            onClick={() => toggleComplete(activeTopic.id)}
          >
            <Check size={14} strokeWidth={3} />
            {progress[activeTopic.id] ? "Completed" : "Mark complete"}
          </button>
        </div>
      </div>

      <div className="io-tabs">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`io-tab ${activeTab === tab.id ? "is-active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={14} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="io-panel">
        {activeTab === "overview" && <p className="io-tldr">{activeTopic.tldr}</p>}
        {activeTab === "plain" && <p className="io-plain">{activeTopic.layman}</p>}
        {activeTab === "deepdive" && <p className="io-deepdive">{activeTopic.deepDive}</p>}
        {activeTab === "blueprint" && activeTopic.diagram && (
          <div className="io-blueprint">
            {activeTopic.diagram.steps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="io-blueprint-step">
                  <span className="io-blueprint-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </div>
                {i < activeTopic.diagram.steps.length - 1 && (
                  <div className="io-blueprint-arrow">
                    <ArrowRight size={16} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
        {activeTab === "qa" && (
          <div className="io-qa-list">
            {activeTopic.qa.map((pair, i) => (
              <div className="io-qa-item" key={i}>
                <div className="io-qa-q">Q. {pair.q}</div>
                <div className="io-qa-a">{pair.a}</div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "code" && activeTopic.code && (
          <pre className="io-code">
            <code>{activeTopic.code.snippet}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
