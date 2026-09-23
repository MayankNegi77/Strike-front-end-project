import React, { useState, useEffect } from 'react';

const heroSlides = [
  {
    id: 1,
    badge: "PLUS",
    title: "Strike Plus Membership",
    price: "₹6,249",
    origPrice: "₹12,499",
    off: "50% OFF",
  },
  {
    id: 2,
    badge: "ULTRA",
    title: "Strike Ultra Membership",
    price: "₹6,749",
    origPrice: "₹13,499",
    off: "50% OFF",
  },
  {
    id: 3,
    badge: "COMBO",
    title: "DSA + GenAI Combo",
    price: "₹7,499",
    origPrice: "₹14,999",
    off: "50% OFF",
  },
  {
    id: 4,
    badge: "BOOTCAMP",
    title: "Thunder: 100 Days of Code",
    price: "₹6,499",
    origPrice: "₹12,999",
    off: "50% OFF",
  },
];

export default function StrikeLogo() {
  const [heroSlideIdx, setHeroSlideIdx] = useState(0);

  // Auto-rotate hero membership slideshow every 3.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlideIdx((prev) => (prev + 1) % heroSlides.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);
  // Active tab on right panel: 'ai' | 'bugs' | 'static'
  const [activeRightTab, setActiveRightTab] = useState('ai');
  
  // Floating Gear/Wrench quick tools widget state
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  
  // Terminal logs state
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'system', text: 'Welcome to Strike Terminal! ✨' }
  ]);
  const [isRunning, setIsRunning] = useState(false);

  // Editable code state
  const [codeText, setCodeText] = useState(`// Strike Platform - Welcome Code
const welcome = async () => {
  const user = await getUser();
  console.log(\`Welcome \${user.name}!\`);
  console.log(\`Level: \${user.level}\`);
  return { status: "success" };
};

const getUser = async () => ({
  name: "Guest User",
  level: "Beginner"
});

welcome();`);

  // Run code execution handler
  const handleRunCode = () => {
    setIsRunning(true);
    setTerminalLogs((prev) => [
      ...prev,
      { type: 'command', text: '$ node strike.js' },
      { type: 'info', text: '⚡ Running Strike sandbox execution engine...' }
    ]);

    setTimeout(() => {
      setTerminalLogs((prev) => [
        ...prev,
        { type: 'output', text: 'Welcome Guest User!' },
        { type: 'output', text: 'Level: Beginner' },
        { type: 'success', text: 'Result: { status: "success" } (Executed in 8ms)' }
      ]);
      setIsRunning(false);
    }, 600);
  };

  // Suggestion click handler
  const handleSuggestionClick = (title) => {
    if (title.includes('validation')) {
      setCodeText((prev) => prev + `\n\n// Added input validation\nif (!user.level) throw new Error("Invalid level");`);
    } else if (title.includes('error handling')) {
      setCodeText(`// Strike Platform - Welcome Code with Try/Catch
const welcome = async () => {
  try {
    const user = await getUser();
    console.log(\`Welcome \${user.name}!\`);
    console.log(\`Level: \${user.level}\`);
    return { status: "success" };
  } catch (err) {
    console.error("Execution error:", err);
  }
};

const getUser = async () => ({ name: "Guest User", level: "Beginner" });
welcome();`);
    }
  };

  const codeLines = codeText.split('\n');

  return (
    <>
      {/* Fixed Gear/Wrench Quick Tools Floating Widget across the page */}
      <div className="fixed-quick-tools-wrapper">
        <button 
          className={`fixed-gear-btn ${isToolsOpen ? 'open' : ''}`}
          onClick={() => setIsToolsOpen(!isToolsOpen)}
          aria-label="Toggle Quick Tools"
          title="Quick Tools"
        >
          <svg 
            className="gear-wrench-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </button>

        {isToolsOpen && (
          <div className="fixed-tools-menu">
            <div className="fixed-tool-option" onClick={() => {
              const el = document.querySelector('.code-editor');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span className="tool-option-icon">&lt;/&gt;</span>
              <span className="tool-option-label">Compiler</span>
            </div>
            <div className="fixed-tool-option">
              <span className="tool-option-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
              <span className="tool-option-label">Drawing</span>
            </div>
          </div>
        )}
      </div>

      <section className="strike-thought">
        <div className="logo-div">
          <h1 className="logo-heading">
            <span id="logo-part">Take control of your </span>
            <span id="logo-strike">
              <span id="future">Future</span> With <span id="strike">Strike</span>
            </span>
          </h1>
          <p className="paragraph">Master DSA, System Design & AI with interactive coding </p>
          <span id="evn" className="paragraph">environments</span>

          {/* Standard Monochrome Hero Membership Ticker Slideshow */}
          <div
            className="hero-membership-ticker"
            onClick={() => {
              const el = document.querySelector(".member-ship");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            title="Click to view all Membership Plans"
          >
            <span className="ticker-badge">
              {heroSlides[heroSlideIdx].badge}
            </span>
            <div className="ticker-content-area">
              <span className="ticker-title">{heroSlides[heroSlideIdx].title}</span>
              <div className="ticker-prices">
                <span className="ticker-price">{heroSlides[heroSlideIdx].price}</span>
                <span className="ticker-orig">{heroSlides[heroSlideIdx].origPrice}</span>
              </div>
              <span className="ticker-off-pill">{heroSlides[heroSlideIdx].off}</span>
            </div>
            <div className="ticker-controls">
              <button
                type="button"
                className="ticker-nav-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setHeroSlideIdx((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
                }}
              >
                ‹
              </button>
              <div className="ticker-dots">
                {heroSlides.map((_, idx) => (
                  <span
                    key={idx}
                    className={`ticker-dot ${heroSlideIdx === idx ? "active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setHeroSlideIdx(idx);
                    }}
                  />
                ))}
              </div>
              <button
                type="button"
                className="ticker-nav-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setHeroSlideIdx((prev) => (prev + 1) % heroSlides.length);
                }}
              >
                ›
              </button>
            </div>
          </div>

          <button id="join-us" className="nav-button">Join us</button>
        </div>

        <div className="code-editor">
          <div className="ide-window">
            
            {/* Top Window Header Bar */}
            <div className="ide-header">
              <div className="header-left-controls">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="file-tab active">
                  <span className="file-icon">&lt;/&gt;</span>
                  <span className="file-name">strike.js</span>
                  <span className="tab-status-dot"></span>
                </div>
              </div>

              <div className="header-right-controls">
                <span className="status-pill-ready">READY</span>
                <button 
                  onClick={handleRunCode} 
                  disabled={isRunning}
                  className={`run-code-btn ${isRunning ? 'running' : ''}`}
                >
                  <i className={`fa-solid ${isRunning ? 'fa-spinner fa-spin' : 'fa-play'}`}></i>
                  <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                </button>
              </div>
            </div>

            {/* Main IDE Body split into Code Editor + AI Suggestions Panel */}
            <div className="ide-body-split">
              
              {/* LEFT AREA: Code lines + Terminal */}
              <div className="ide-editor-area">
                
                {/* Code lines container */}
                <div className="code-content-wrapper">
                  <div className="line-numbers">
                    {codeLines.map((_, idx) => (
                      <span key={idx}>{idx + 1}</span>
                    ))}
                  </div>

                  <div className="code-area">
                    <textarea
                      value={codeText}
                      onChange={(e) => setCodeText(e.target.value)}
                      className="code-textarea"
                      spellCheck="false"
                    />
                    <div className="code-highlighted-overlay">
                      {codeLines.map((line, idx) => (
                        <div key={idx} className="code-line">
                          {line.startsWith('//') ? (
                            <span className="token-comment">{line}</span>
                          ) : (
                            <span>
                              {line
                                .replace(/(const|async|await|return)/g, '___KEYWORD_$1___')
                                .replace(/(console\.log|console\.error|getUser|welcome)/g, '___FUNC_$1___')
                                .replace(/("[^"]*"|`[^`]*`)/g, '___STR_$1___')
                                .split('___')
                                .map((part, pIdx) => {
                                  if (part.startsWith('KEYWORD_')) return <span key={pIdx} className="token-keyword">{part.replace('KEYWORD_', '')}</span>;
                                  if (part.startsWith('FUNC_')) return <span key={pIdx} className="token-function">{part.replace('FUNC_', '')}</span>;
                                  if (part.startsWith('STR_')) return <span key={pIdx} className="token-string">{part.replace('STR_', '')}</span>;
                                  return part;
                                })}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Terminal */}
                <div className="ide-terminal">
                  <div className="terminal-bar-header">
                    <span className="terminal-header-icon"><i className="fa-solid fa-terminal"></i></span>
                    <span className="terminal-header-text">TERMINAL</span>
                  </div>
                  <div className="terminal-body-content">
                    {terminalLogs.map((log, index) => (
                      <div key={index} className={`terminal-log-line ${log.type}`}>
                        {log.type === 'command' && <span className="prompt-symbol">$ </span>}
                        {log.text}
                      </div>
                    ))}
                    <div className="prompt-line">
                      <span className="prompt-symbol">$</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT AREA: AI Assistant & Suggestions */}
              <div className="ide-sidebar-panel">
                
                {/* Sidebar Tabs */}
                <div className="sidebar-tabs">
                  <button 
                    className={`sidebar-tab ${activeRightTab === 'ai' ? 'active' : ''}`}
                    onClick={() => setActiveRightTab('ai')}
                  >
                    AI Assistant
                  </button>
                  <button 
                    className={`sidebar-tab ${activeRightTab === 'bugs' ? 'active' : ''}`}
                    onClick={() => setActiveRightTab('bugs')}
                  >
                    Bug Shots
                  </button>
                  <button 
                    className={`sidebar-tab ${activeRightTab === 'static' ? 'active' : ''}`}
                    onClick={() => setActiveRightTab('static')}
                  >
                    Static
                  </button>
                </div>

                {/* Quick Suggestions Cards */}
                <div className="sidebar-scrollable-content">
                  <span className="section-label">QUICK SUGGESTIONS</span>

                  <div className="suggestion-card" onClick={() => handleSuggestionClick('Refactor welcome()')}>
                    <h4>Refactor welcome()</h4>
                    <p>Extract user fetch and logging into separate utils for better testability.</p>
                  </div>

                  <div className="suggestion-card" onClick={() => handleSuggestionClick('Add input validation')}>
                    <h4>Add input validation</h4>
                    <p>Validate user.level against enum: Beginner | Advanced | Expert.</p>
                  </div>

                  <div className="suggestion-card" onClick={() => handleSuggestionClick('Improve typing')}>
                    <h4>Improve typing</h4>
                    <p>Define User type and return type for getUser and welcome functions.</p>
                  </div>

                  <div className="suggestion-card" onClick={() => handleSuggestionClick('Implement error handling')}>
                    <h4>Implement error handling</h4>
                    <p>Add try-catch blocks and custom error messages for async operations.</p>
                  </div>

                  <div className="suggestion-card">
                    <h4>Add loading states</h4>
                    <p>Show skeleton loaders while fetching user data for better UX.</p>
                  </div>

                  <div className="suggestion-card">
                    <h4>Optimize re-renders</h4>
                    <p>Wrap components with React.memo and use useMemo for expensive calculations.</p>
                  </div>

                  {/* Thoughts Section */}
                  <span className="section-label" style={{ marginTop: '20px' }}>THOUGHTS</span>
                  
                  <div className="thought-bullet-card">
                    <p>• Consider debouncing setDisplayedCode typing to save renders.</p>
                  </div>
                  <div className="thought-bullet-card">
                    <p>• Memoize highlightCode with code length as key for performance.</p>
                  </div>
                  <div className="thought-bullet-card">
                    <p>• Split regex patterns into precompiled list outside component.</p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}