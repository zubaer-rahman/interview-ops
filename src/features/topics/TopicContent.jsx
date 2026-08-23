import React, { useState, useEffect } from "react";
import { Check, BookOpen, Lightbulb, Layers, MessageSquare, Workflow, Code2, ArrowRight } from "lucide-react";
import { highlightCode } from "../../utils/highlightCode";

const TABS = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "plain", label: "Plain English", icon: Lightbulb },
  { id: "deepdive", label: "Deep Dive", icon: Layers },
  { id: "qa", label: "Interview Q&A", icon: MessageSquare },
  { id: "blueprint", label: "Blueprint", icon: Workflow },
  { id: "code", label: "Code", icon: Code2 },
  { id: "mcq", label: "Judge", icon: Layers },
];

const EmptyState = ({ message }) => (
  <div style={{ color: 'var(--text-muted)', fontStyle: 'italic', padding: '32px 16px', textAlign: 'center', background: 'var(--panel-alt)', borderRadius: '8px', border: '1px dashed var(--border)' }}>
    {message}
  </div>
);

export function TopicContent({ activeTopic, progress, toggleComplete, activeTab, setActiveTab }) {
  const [mcqAnswers, setMcqAnswers] = useState({});
  const [mcqSubmitted, setMcqSubmitted] = useState(false);

  useEffect(() => {
    setMcqAnswers({});
    setMcqSubmitted(false);
  }, [activeTopic?.id]);

  if (!activeTopic) return null;
  
  if (activeTopic.content === null) {
    return (
      <div className="io-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
        <div style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div className="io-spinner" style={{ width: '24px', height: '24px', border: '2px solid var(--border)', borderTopColor: 'var(--teal)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          <span>Loading content...</span>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

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

      <div className="io-scroll-area">
        <div className="io-panel">
          {activeTab === "overview" && (
            <div className="io-tldr">
              {activeTopic.content?.tldr?.length > 0 || activeTopic.tldr ? (
                Array.isArray(activeTopic.content?.tldr) 
                  ? activeTopic.content.tldr.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)
                  : <p dangerouslySetInnerHTML={{ __html: activeTopic.content?.tldr || activeTopic.tldr }} />
              ) : <EmptyState message="No overview available for this topic." />}
            </div>
          )}
          
          {activeTab === "plain" && (
            <div className="io-plain">
              {activeTopic.content?.laymanDefinition || activeTopic.content?.layman || activeTopic.layman ? (
                <p dangerouslySetInnerHTML={{ __html: activeTopic.content?.laymanDefinition || activeTopic.content?.layman || activeTopic.layman }} />
              ) : <EmptyState message="No plain English explanation available." />}
            </div>
          )}
          
          {activeTab === "deepdive" && (
            <div className="io-deepdive">
              {activeTopic.content?.deepDive?.length > 0 || activeTopic.deepDive ? (
                Array.isArray(activeTopic.content?.deepDive) 
                  ? activeTopic.content.deepDive.map((section, i) => (
                      <div key={i} style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ color: 'var(--amber)', fontSize: '15px', marginBottom: '8px' }}>{section.heading}</h3>
                        <p dangerouslySetInnerHTML={{ __html: section.text }} />
                      </div>
                    ))
                  : <p dangerouslySetInnerHTML={{ __html: activeTopic.content?.deepDive || activeTopic.deepDive }} />
              ) : <EmptyState message="No deep dive content available for this topic." />}
            </div>
          )}
          
          {activeTab === "blueprint" && (
            <>
              {activeTopic.content?.diagramSvg ? (
                <div className="io-blueprint-svg" dangerouslySetInnerHTML={{ __html: activeTopic.content.diagramSvg }} style={{ background: 'var(--panel-alt)', padding: '16px', borderRadius: '8px', overflowX: 'auto' }} />
              ) : (activeTopic.content?.diagram || activeTopic.diagram) ? (
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
              ) : <EmptyState message="No blueprint diagram available for this topic." />}
            </>
          )}
          
          {activeTab === "qa" && (
            <div className="io-qa-list">
              {(activeTopic.content?.interviewAnswer || activeTopic.interviewAnswer) && (
                <div className="io-qa-item io-qa-summary" style={{ background: 'var(--panel-alt)', padding: '16px', borderRadius: '8px', marginBottom: '24px', borderLeft: '4px solid var(--amber)' }}>
                  <h4 style={{ color: 'var(--text)', marginBottom: '8px', fontSize: '14px' }}>How to answer in an interview:</h4>
                  <div dangerouslySetInnerHTML={{ __html: activeTopic.content?.interviewAnswer || activeTopic.interviewAnswer }} style={{ fontSize: '14.5px', lineHeight: '1.6' }} />
                </div>
              )}
              
              {((activeTopic.content?.interviewQuestions || activeTopic.content?.qa || activeTopic.qa || [])).length > 0 ? (
                (activeTopic.content?.interviewQuestions || activeTopic.content?.qa || activeTopic.qa || []).map((pair, i) => (
                  <div className="io-qa-item" key={i}>
                    <div className="io-qa-q" dangerouslySetInnerHTML={{ __html: `Q. ${pair.question || pair.q}` }} />
                    <div className="io-qa-a" dangerouslySetInnerHTML={{ __html: pair.answer || pair.a }} />
                  </div>
                ))
              ) : (
                !activeTopic.content?.interviewAnswer && !activeTopic.interviewAnswer && <EmptyState message="No Q&A available for this topic." />
              )}
            </div>
          )}
          
          {activeTab === "mcq" && (
            <div className="io-mcq-list">
              {(activeTopic.content?.mcqQuestions || []).map((mcq, i) => {
                const isCorrect = mcqAnswers[i] === mcq.answer;
                const hasAnswered = mcqAnswers[i] !== undefined;

                return (
                  <div className="io-mcq-item" key={i} style={{ marginBottom: '32px' }}>
                    <h4 style={{ fontSize: '15px', color: 'var(--text)', marginBottom: '16px' }}>{i + 1}. {mcq.question}</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                      {(mcq.options || mcq.components || []).map((opt, idx) => {
                        let bg = 'var(--panel-alt)';
                        let border = 'var(--border)';
                        let color = 'var(--text-dim)';
                        
                        if (mcqSubmitted) {
                          if (idx === mcq.answer) {
                            bg = 'rgba(72,187,120,0.1)';
                            border = '#48bb78';
                            color = '#48bb78';
                          } else if (mcqAnswers[i] === idx && idx !== mcq.answer) {
                            bg = 'rgba(229,62,62,0.1)';
                            border = '#e53e3e';
                            color = '#e53e3e';
                          }
                        } else if (mcqAnswers[i] === idx) {
                          border = 'var(--teal)';
                          bg = 'rgba(79,209,197,0.05)';
                        }

                        return (
                          <label key={idx} style={{ 
                            padding: '12px 16px', 
                            background: bg, 
                            border: `1px solid ${border}`, 
                            borderRadius: '8px',
                            color: color,
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            cursor: mcqSubmitted ? 'default' : 'pointer',
                            transition: 'all 0.2s'
                          }}>
                            <input 
                              type="radio" 
                              name={`mcq-${i}`} 
                              checked={mcqAnswers[i] === idx}
                              onChange={() => !mcqSubmitted && setMcqAnswers(prev => ({...prev, [i]: idx}))}
                              disabled={mcqSubmitted}
                              style={{ marginTop: '4px' }}
                            />
                            <span style={{ fontWeight: 'bold' }}>{String.fromCharCode(65 + idx)}.</span>
                            <span dangerouslySetInnerHTML={{ __html: opt }} />
                          </label>
                        );
                      })}
                    </div>
                    {mcqSubmitted && mcq.explanation && (
                      <div style={{ padding: '12px 16px', background: 'rgba(242, 169, 74, 0.1)', borderLeft: '4px solid var(--amber)', borderRadius: '4px', fontSize: '13px', color: '#e8eaed', marginTop: '16px' }}>
                        <strong>Explanation:</strong> <span dangerouslySetInnerHTML={{ __html: mcq.explanation }} />
                      </div>
                    )}
                  </div>
                );
              })}
              
              {(activeTopic.content?.mcqQuestions?.length > 0) ? (
                <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {!mcqSubmitted ? (
                    <button 
                      className="io-submit-btn"
                      onClick={() => setMcqSubmitted(true)}
                    >
                      Submit Answers
                    </button>
                  ) : (() => {
                    const total = activeTopic.content.mcqQuestions.length;
                    const correct = activeTopic.content.mcqQuestions.filter((q, i) => mcqAnswers[i] === q.answer).length;
                    const pct = Math.round((correct / total) * 100);
                    const passed = pct >= 70;
                    
                    return (
                      <div style={{
                        padding: '16px 24px',
                        background: passed ? 'rgba(72,187,120,0.1)' : 'rgba(242, 169, 74, 0.1)',
                        border: `1px solid ${passed ? '#48bb78' : 'var(--amber)'}`,
                        borderRadius: '8px',
                        color: 'var(--text)'
                      }}>
                        <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px', color: passed ? '#48bb78' : 'var(--amber)' }}>
                          {correct}/{total} correct ({pct}%)
                        </div>
                        <div style={{ fontSize: '14px', color: 'var(--text-dim)' }}>
                          {passed ? '✅ Great job! You have a solid understanding of this topic.' : '📖 Review the material and try again.'}
                        </div>
                        <button 
                          className="io-complete-btn"
                          onClick={() => { setMcqSubmitted(false); setMcqAnswers({}); }}
                          style={{ marginTop: '16px' }}
                        >
                          Retake Quiz
                        </button>
                      </div>
                    );
                  })()}
                </div>
              ) : (
                <EmptyState message="No judge questions available for this topic." />
              )}
            </div>
          )}
          
          {activeTab === "code" && (
            <div className="io-code-examples">
              {activeTopic.content?.codeExamples?.length > 0 ? (
                Array.isArray(activeTopic.content.codeExamples) ? (
                  activeTopic.content.codeExamples.map((ex, i) => (
                    <div key={i} style={{ marginBottom: '24px' }}>
                      <h4 style={{ fontSize: '14px', marginBottom: '6px', color: 'var(--text)' }}>{ex.title}</h4>
                      {ex.description && <p style={{ fontSize: '13px', color: 'var(--text-dim)', marginBottom: '8px' }}>{ex.description}</p>}
                      <pre className="io-code">
                        <code dangerouslySetInnerHTML={{ __html: highlightCode(ex.code) }} />
                      </pre>
                    </div>
                  ))
                ) : (
                  <div style={{ background: 'var(--panel-alt)', padding: '16px', borderRadius: '8px', overflowX: 'auto' }} dangerouslySetInnerHTML={{ __html: activeTopic.content.codeExamples }} />
                )
              ) : (activeTopic.content?.code || activeTopic.code) ? (
                <pre className="io-code">
                  <code dangerouslySetInnerHTML={{ __html: highlightCode(activeTopic.content?.code?.snippet || activeTopic.code?.snippet) }} />
                </pre>
              ) : <EmptyState message="No code examples available for this topic." />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
