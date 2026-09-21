import React, { useState } from 'react';

export default function StrikeLogo() {
  // Active tab on right panel: 'ai' | 'bugs' | 'static'
  const [activeRightTab, setActiveRightTab] = useState('ai');
  
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