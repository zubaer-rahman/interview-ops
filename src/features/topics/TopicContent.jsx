import React, { useState, useEffect } from "react";
import { Check, BookOpen, Lightbulb, Layers, MessageSquare, Workflow, Code2, ArrowRight, Target, Clock } from "lucide-react";
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
        <div className="io-breadcrumb" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <span>{activeTopic.categoryName}</span>
          <div className="io-mobile-meta" style={{ display: 'none', gap: '8px' }}>
            {activeTopic.difficulty && (
              <div className={`io-meta-badge diff-${activeTopic.difficulty.toLowerCase()}`}>
                <Target size={12} />
                <span>{activeTopic.difficulty}</span>
              </div>
            )}
            {activeTopic.estimatedMinutes && (
              <div className="io-meta-badge time-badge">
                <Clock size={12} />
                <span>{activeTopic.estimatedMinutes}m</span>
              </div>
            )}
          </div>
        </div>
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
                  ? <ul style={{ paddingLeft: '20px' }}>{activeTopic.content.tldr.map((p, i) => <li key={i} dangerouslySetInnerHTML={{ __html: p }} style={{ marginBottom: '8px' }} />)}</ul>
                  : <p dangerouslySetInnerHTML={{ __html: activeTopic.content?.tldr || activeTopic.tldr }} />
              ) : <EmptyState message="No overview available for this topic." />}
            </div>
          )}
          
          {activeTab === "plain" && (
            <div className="io-plain">
              {activeTopic.content?.laymanDefinition || activeTopic.content?.layman || activeTopic.layman ? (
                (() => {
                  const plainContent = activeTopic.content?.laymanDefinition || activeTopic.content?.layman || activeTopic.layman;
                  return Array.isArray(plainContent) ? (
                    plainContent.map((p, idx) => (
                      <p key={idx} dangerouslySetInnerHTML={{ __html: p }} style={{ marginBottom: idx < plainContent.length - 1 ? '12px' : 0 }} />
                    ))
                  ) : (
                    <p dangerouslySetInnerHTML={{ __html: plainContent }} />
                  );
                })()
              ) : <EmptyState message="No plain English explanation available." />}
            </div>
          )}
          
          {activeTab === "deepdive" && (
            <div className="io-deepdive">
              {activeTopic.content?.deepDive?.length > 0 || activeTopic.deepDive ? (
                Array.isArray(activeTopic.content?.deepDive) 
                  ? activeTopic.content.deepDive.map((section, i) => (
                      <div key={i} style={{ marginBottom: '1.5rem' }}>
                        {section.heading && <h3 style={{ color: 'var(--amber)', fontSize: '15px', marginBottom: '8px' }}>{section.heading}</h3>}
                        {section.text && <p dangerouslySetInnerHTML={{ __html: section.text }} />}
                        {Array.isArray(section.list) && section.list.length > 0 && (
                          <ul className="io-deepdive-list">
                            {section.list.map((item, idx) => (
                              <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                          </ul>
                        )}
                        {!section.text && !section.list && section.content && (
                          <p dangerouslySetInnerHTML={{ __html: section.content }} />
                        )}
                      </div>
                    ))
                  : <p dangerouslySetInnerHTML={{ __html: activeTopic.content?.deepDive || activeTopic.deepDive }} />
              ) : <EmptyState message="No deep dive content available for this topic." />}
            </div>
          )}
          
          {activeTab === "blueprint" && (
            <>
              {activeTopic.content?.diagramSvg ? (
                <div className="io-blueprint-svg" dangerouslySetInnerHTML={{ __html: activeTopic.content.diagramSvg }} />
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
                <div className="io-qa-item io-qa-summary">
                  <h4 style={{ color: 'var(--text)', marginBottom: '8px', fontSize: '14px' }}>How to answer in an interview:</h4>
                  <div dangerouslySetInnerHTML={{ __html: activeTopic.content?.interviewAnswer || activeTopic.interviewAnswer }} style={{ fontSize: '14.5px', lineHeight: '1.6', color: 'var(--text)' }} />
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
          
          {activeTab === "mcq" && (() => {
            const rawQuestions = Array.isArray(activeTopic.content?.mcqQuestions)
              ? activeTopic.content.mcqQuestions
              : (Array.isArray(activeTopic.mcqQuestions) ? activeTopic.mcqQuestions : []);
            
            const mcqList = rawQuestions.filter((q) => q && q.question);

            if (mcqList.length === 0) {
              return <EmptyState message="No judge questions available for this topic." />;
            }

            return (
              <div className="io-mcq-list">
                {mcqList.map((mcq, i) => {
                  const options = Array.isArray(mcq.options)
                    ? mcq.options
                    : (Array.isArray(mcq.components) ? mcq.components : (Array.isArray(mcq.answers) ? mcq.answers : []));
                  
                  const resolvedAnswer = typeof mcq.answer === "number"
                    ? mcq.answer
                    : (typeof mcq.answer === "string"
                        ? options.findIndex((o) => String(o).trim().toLowerCase() === String(mcq.answer).trim().toLowerCase())
                        : -1);

                  const isCorrect = mcqAnswers[i] === resolvedAnswer;
                  const hasAnswered = mcqAnswers[i] !== undefined;

                  return (
                    <div className="io-mcq-item" key={i} style={{ marginBottom: "32px" }}>
                      <h4 style={{ fontSize: "15px", color: "var(--text)", marginBottom: "16px" }}>{i + 1}. {mcq.question}</h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "12px" }}>
                        {options.map((opt, idx) => {
                          let bg = "var(--panel-alt)";
                          let border = "var(--border)";
                          let color = "var(--text)";
                          
                          if (mcqSubmitted) {
                            if (idx === resolvedAnswer) {
                              bg = "var(--success-bg)";
                              border = "var(--success-border)";
                              color = "var(--success-text)";
                            } else if (mcqAnswers[i] === idx && idx !== resolvedAnswer) {
                              bg = "var(--danger-bg)";
                              border = "var(--danger-border)";
                              color = "var(--danger-text)";
                            }
                          } else if (mcqAnswers[i] === idx) {
                            border = "var(--teal)";
                            bg = "var(--teal-dim)";
                            color = "var(--text)";
                          }

                          return (
                            <label key={idx} style={{ 
                              padding: "12px 16px", 
                              background: bg, 
                              border: `1px solid ${border}`, 
                              borderRadius: "8px",
                              color: color,
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "12px",
                              cursor: mcqSubmitted ? "default" : "pointer",
                              transition: "all 0.2s"
                            }}>
                              <input 
                                type="radio" 
                                name={`mcq-${i}`} 
                                checked={mcqAnswers[i] === idx}
                                onChange={() => !mcqSubmitted && setMcqAnswers((prev) => ({ ...prev, [i]: idx }))}
                                disabled={mcqSubmitted}
                                style={{ marginTop: "4px", accentColor: "var(--teal)" }}
                              />
                              <span style={{ fontWeight: "bold" }}>{String.fromCharCode(65 + idx)}.</span>
                              <span dangerouslySetInnerHTML={{ __html: opt }} />
                            </label>
                          );
                        })}
                      </div>
                      {mcqSubmitted && mcq.explanation && (
                        <div style={{ padding: "12px 16px", background: "var(--amber-dim)", border: "1px solid var(--amber-border)", borderLeft: "4px solid var(--amber)", borderRadius: "6px", fontSize: "13.5px", lineHeight: "1.6", color: "var(--text)", marginTop: "16px" }}>
                          <strong style={{ color: "var(--amber)" }}>Explanation:</strong> <span dangerouslySetInnerHTML={{ __html: mcq.explanation }} />
                        </div>
                      )}
                    </div>
                  );
                })}
                
                <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  {!mcqSubmitted ? (
                    <button 
                      className="io-submit-btn"
                      onClick={() => setMcqSubmitted(true)}
                    >
                      Submit Answers
                    </button>
                  ) : (() => {
                    const total = mcqList.length;
                    const correct = mcqList.filter((q, i) => {
                      const options = Array.isArray(q.options)
                        ? q.options
                        : (Array.isArray(q.components) ? q.components : (Array.isArray(q.answers) ? q.answers : []));
                      const resolvedAnswer = typeof q.answer === "number"
                        ? q.answer
                        : (typeof q.answer === "string"
                            ? options.findIndex((o) => String(o).trim().toLowerCase() === String(q.answer).trim().toLowerCase())
                            : -1);
                      return mcqAnswers[i] === resolvedAnswer;
                    }).length;
                    const pct = Math.round((correct / total) * 100);
                    const passed = pct >= 70;
                    
                    return (
                      <div style={{
                        padding: "16px 24px",
                        background: passed ? "var(--success-bg)" : "var(--amber-dim)",
                        border: `1px solid ${passed ? "var(--success-border)" : "var(--amber-border)"}`,
                        borderRadius: "8px",
                        color: "var(--text)"
                      }}>
                        <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "4px", color: passed ? "var(--success-text)" : "var(--amber)" }}>
                          {correct}/{total} correct ({pct}%)
                        </div>
                        <div style={{ fontSize: "14px", color: "var(--text-muted)" }}>
                          {passed ? "✅ Great job! You have a solid understanding of this topic." : "📖 Review the material and try again."}
                        </div>
                        <button 
                          className="io-complete-btn"
                          onClick={() => { setMcqSubmitted(false); setMcqAnswers({}); }}
                          style={{ marginTop: "16px" }}
                        >
                          Retake Quiz
                        </button>
                      </div>
                    );
                  })()}
                </div>
              </div>
            );
          })()}
          
          {activeTab === "code" && (
            <div className="io-code-examples">
              {activeTopic.content?.codeExamples?.length > 0 ? (
                Array.isArray(activeTopic.content.codeExamples) ? (
                  activeTopic.content.codeExamples.map((ex, i) => (
                    <div key={i} style={{ marginBottom: '24px' }}>
                      <h4 style={{ fontSize: '14px', marginBottom: '6px', color: 'var(--text)' }}>{ex.title || ex.useCase || `Example ${i + 1}`}</h4>
                      {ex.title && ex.useCase && <div style={{ fontSize: '12px', color: 'var(--teal)', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>Use Case: {ex.useCase}</div>}
                      {ex.description && <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>{ex.description}</p>}
                      <pre className="io-code">
                        <code dangerouslySetInnerHTML={{ __html: highlightCode(ex.code || ex.snippet || '') }} />
                      </pre>
                    </div>
                  ))
                ) : (
                  <div className="io-code-raw" dangerouslySetInnerHTML={{ __html: activeTopic.content.codeExamples }} />
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
