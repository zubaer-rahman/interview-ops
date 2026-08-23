import React from "react";
import { Check, BookOpen, Lightbulb, Layers, MessageSquare, Workflow, Code2, ArrowRight } from "lucide-react";

export const TABS = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "plain", label: "Plain English", icon: Lightbulb },
  { id: "deepdive", label: "Deep Dive", icon: Layers },
  { id: "qa", label: "Interview Q&A", icon: MessageSquare },
  { id: "blueprint", label: "Blueprint", icon: Workflow },
  { id: "code", label: "Code", icon: Code2 },
  { id: "mcq", label: "Judge", icon: Layers },

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
        {activeTab === "overview" && (
          <div className="io-tldr">
            {Array.isArray(activeTopic.content?.tldr) 
              ? activeTopic.content.tldr.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)
              : <p dangerouslySetInnerHTML={{ __html: activeTopic.content?.tldr || activeTopic.tldr }} />
            }
          </div>
        )}
        
        {activeTab === "plain" && (
          <p className="io-plain" dangerouslySetInnerHTML={{ __html: activeTopic.content?.laymanDefinition || activeTopic.content?.layman || activeTopic.layman }} />
        )}
        
        {activeTab === "deepdive" && (
          <div className="io-deepdive">
            {Array.isArray(activeTopic.content?.deepDive) 
              ? activeTopic.content.deepDive.map((section, i) => (
                  <div key={i} style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ color: 'var(--amber)', fontSize: '15px', marginBottom: '8px' }}>{section.heading}</h3>
                    <p dangerouslySetInnerHTML={{ __html: section.text }} />
                  </div>
                ))
              : <p dangerouslySetInnerHTML={{ __html: activeTopic.content?.deepDive || activeTopic.deepDive }} />
            }
          </div>
        )}
        
        {activeTab === "blueprint" && activeTopic.content?.diagramSvg && (
          <div className="io-blueprint-svg" dangerouslySetInnerHTML={{ __html: activeTopic.content.diagramSvg }} style={{ background: 'var(--panel-alt)', padding: '16px', borderRadius: '8px', overflowX: 'auto' }} />
        )}
        {activeTab === "blueprint" && (activeTopic.content?.diagram || activeTopic.diagram) && !activeTopic.content?.diagramSvg && (
          <div className="io-blueprint">
            {(activeTopic.content?.diagram?.steps || activeTopic.diagram?.steps || []).map((step, i, arr) => (
              <React.Fragment key={i}>
                <div className="io-blueprint-step">
                  <span className="io-blueprint-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </div>
                {i < arr.length - 1 && (
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
            {(activeTopic.content?.interviewAnswer || activeTopic.interviewAnswer) && (
              <div className="io-qa-item io-qa-summary" style={{ background: 'var(--panel-alt)', padding: '16px', borderRadius: '8px', marginBottom: '24px', borderLeft: '4px solid var(--amber)' }}>
                <h4 style={{ color: 'var(--text)', marginBottom: '8px', fontSize: '14px' }}>How to answer in an interview:</h4>
                <div dangerouslySetInnerHTML={{ __html: activeTopic.content?.interviewAnswer || activeTopic.interviewAnswer }} style={{ fontSize: '14.5px', lineHeight: '1.6' }} />
              </div>
            )}
            
            {(activeTopic.content?.interviewQuestions || activeTopic.content?.qa || activeTopic.qa || []).map((pair, i) => (
              <div className="io-qa-item" key={i}>
                <div className="io-qa-q" dangerouslySetInnerHTML={{ __html: `Q. ${pair.question || pair.q}` }} />
                <div className="io-qa-a" dangerouslySetInnerHTML={{ __html: pair.answer || pair.a }} />
              </div>
            ))}
          </div>
        )}
        
        {activeTab === "mcq" && (
          <div className="io-mcq-list">
            {(activeTopic.content?.mcqQuestions || []).map((mcq, i) => (
              <div className="io-mcq-item" key={i} style={{ marginBottom: '32px' }}>
                <h4 style={{ fontSize: '15px', color: 'var(--text)', marginBottom: '16px' }}>{i + 1}. {mcq.question}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                  {(mcq.options || mcq.components || []).map((opt, idx) => (
                    <div key={idx} style={{ 
                      padding: '12px 16px', 
                      background: idx === mcq.answer ? 'rgba(79,209,197,0.1)' : 'var(--panel-alt)', 
                      border: `1px solid ${idx === mcq.answer ? 'var(--teal)' : 'var(--border)'}`, 
                      borderRadius: '8px',
                      color: idx === mcq.answer ? 'var(--teal)' : 'var(--text-dim)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}>
                      <span style={{ fontWeight: 'bold' }}>{String.fromCharCode(65 + idx)}.</span>
                      <span dangerouslySetInnerHTML={{ __html: opt }} />
                    </div>
                  ))}
                </div>
                {mcq.explanation && (
                  <div style={{ padding: '12px 16px', background: 'rgba(242, 169, 74, 0.1)', borderLeft: '4px solid var(--amber)', borderRadius: '4px', fontSize: '13px', color: '#e8eaed' }}>
                    <strong>Explanation:</strong> <span dangerouslySetInnerHTML={{ __html: mcq.explanation }} />
                  </div>
                )}
              </div>
            ))}
            {!(activeTopic.content?.mcqQuestions?.length > 0) && (
              <p style={{ color: 'var(--text-muted)' }}>No quiz available for this topic.</p>
            )}
          </div>
        )}
        
        {activeTab === "code" && (
          <div className="io-code-examples">
            {activeTopic.content?.codeExamples ? (
              activeTopic.content.codeExamples.map((ex, i) => (
                <div key={i} style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '14px', marginBottom: '6px', color: 'var(--text)' }}>{ex.title}</h4>
                  {ex.description && <p style={{ fontSize: '13px', color: 'var(--text-dim)', marginBottom: '8px' }}>{ex.description}</p>}
                  <pre className="io-code">
                    <code>{ex.code}</code>
                  </pre>
                </div>
              ))
            ) : (activeTopic.content?.code || activeTopic.code) ? (
              <pre className="io-code">
                <code>{activeTopic.content?.code?.snippet || activeTopic.code?.snippet}</code>
              </pre>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
