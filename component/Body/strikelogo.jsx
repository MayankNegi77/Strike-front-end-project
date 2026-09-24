import React, { useState, useEffect, useRef } from 'react';
import Card from './commentCard.jsx';
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

// Target code for strike.js
const DEFAULT_STRIKE_CODE = `// Strike Platform - Welcome Code
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

welcome();
`;

// AI suggestions codes for typewriter animations
const SUGGESTIONS_MAP = {
  'Refactor welcome()': `// Strike Platform - Refactored welcome()
const fetchUserProfile = async () => ({
  name: "Guest User",
  level: "Beginner"
});

const printWelcomeBadge = (user) => {
  console.log(\`Welcome \${user.name}!\`);
  console.log(\`Level: \${user.level}\`);
};

const welcome = async () => {
  const user = await fetchUserProfile();
  printWelcomeBadge(user);
  return { status: "success" };
};

welcome();`,

  'Add input validation': `// Strike Platform - Input Validation
const validTiers = ["Beginner", "Advanced", "Expert"];

const welcome = async () => {
  const user = await getUser();
  if (!validTiers.includes(user.level)) {
    throw new Error(\`Invalid tier detected: \${user.level}\`);
  }
  console.log(\`Welcome \${user.name}!\`);
  console.log(\`Level: \${user.level} (Validated)\`);
  return { status: "success", validated: true };
};

const getUser = async () => ({
  name: "Guest User",
  level: "Beginner"
});

welcome();`,

  'Improve typing': `// Strike Platform - Type Safety (JSDoc)
/**
 * @typedef {Object} StrikeUser
 * @property {string} name
 * @property {'Beginner' | 'Advanced' | 'Expert'} level
 */

/** @returns {Promise<StrikeUser>} */
const getUser = async () => ({
  name: "Guest User",
  level: "Beginner"
});

const welcome = async () => {
  const user = await getUser();
  console.log(\`Welcome \${user.name}!\`);
  console.log(\`Level: \${user.level}\`);
  return { status: "success" };
};

welcome();`,

  'Implement error handling': `// Strike Platform - Error Handling
const welcome = async () => {
  try {
    const user = await getUser();
    console.log(\`Welcome \${user.name}!\`);
    console.log(\`Level: \${user.level}\`);
    return { status: "success" };
  } catch (err) {
    console.error("Execution error:", err.message);
    return { status: "failed" };
  }
};

const getUser = async () => ({
  name: "Guest User",
  level: "Beginner"
});

welcome();`,

  'Add loading states': `// Strike Platform - Async Loading Skeleton
let isLoading = true;

const welcome = async () => {
  console.log("Loading user session from cloud...");
  const user = await getUser();
  isLoading = false;
  console.log(\`Loaded: \${user.name} [\${user.level}]\`);
  return { status: "ready", isLoading };
};

const getUser = async () => {
  await new Promise((res) => setTimeout(res, 250));
  return { name: "Guest User", level: "Beginner" };
};

welcome();`,

  'Optimize re-renders': `// Strike Platform - Memoized Execution
const cache = new Map();

const getUser = async () => {
  if (cache.has("user")) return cache.get("user");
  const data = { name: "Guest User", level: "Beginner" };
  cache.set("user", data);
  return data;
};

const welcome = async () => {
  const user = await getUser();
  console.log(\`Welcome \${user.name}! (Cache Hit)\`);
  return { status: "success" };
};

welcome();`
};

// Bug Shots issues matching the Strike platform bug tracker
const BUG_SHOTS = [
  {
    id: 'BUG-241',
    title: "BUG-241: Terminal doesn't auto-focus after run",
    badge: 'MEDIUM',
    badgeType: 'medium',
    fix: 'Fix: Call inputRef.current?.focus() in setTimeout after setIsExecuting(false).'
  },
  {
    id: 'BUG-198',
    title: 'BUG-198: Syntax highlight overlaps on template tokens',
    badge: 'LOW',
    badgeType: 'low',
    fix: 'Fix: Run template expression match before string match.'
  }
];

// Fast and clean syntax highlighter supporting partial strings and tokens during typing
function highlightCodeLine(line) {
  if (!line && line !== '') return null;
  if (line.trimStart().startsWith('//')) {
    return <span className="token-comment">{line}</span>;
  }

  const tokenRegex = /(\/\/[^\n]*)|(\x60(?:\\.|[^\x60$\\])*(?:\$\{[^}]*\}|(?:\\.|[^\x60$\\])*)*\x60?)|("[^"\\]*(?:\\.[^"\\]*)*"?)|(\b(?:const|async|await|return|function|let|var|import|export|from|try|catch|new|throw)\b)|(\b(?:console\.log|console\.error|console|name|level|status)\b)|(=>|[{}()[\]])/g;

  const elements = [];
  let lastIndex = 0;
  let match;

  while ((match = tokenRegex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      elements.push(
        <span key={`plain-${lastIndex}`} className="token-plain">
          {line.substring(lastIndex, match.index)}
        </span>
      );
    }

    const [fullMatch, comment, templateStr, quoteStr, keyword, prop, bracket] = match;

    if (comment) {
      elements.push(<span key={`c-${match.index}`} className="token-comment">{comment}</span>);
    } else if (templateStr) {
      const parts = templateStr.split(/(\$\{[^}]*\}?)/g);
      elements.push(
        <span key={`tpl-${match.index}`}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('${')) {
              const varContent = part.endsWith('}') ? part.slice(2, -1) : part.slice(2);
              const isClosed = part.endsWith('}');
              return (
                <span key={pIdx}>
                  <span className="token-bracket">${'{'}</span>
                  <span className="token-prop">{varContent}</span>
                  {isClosed && <span className="token-bracket">{'}'}</span>}
                </span>
              );
            }
            return <span key={pIdx} className="token-string">{part}</span>;
          })}
        </span>
      );
    } else if (quoteStr) {
      elements.push(<span key={`s-${match.index}`} className="token-string">{quoteStr}</span>);
    } else if (keyword) {
      elements.push(<span key={`k-${match.index}`} className="token-keyword">{keyword}</span>);
    } else if (prop) {
      elements.push(<span key={`p-${match.index}`} className="token-prop">{prop}</span>);
    } else if (bracket) {
      elements.push(<span key={`b-${match.index}`} className="token-bracket">{bracket}</span>);
    } else {
      elements.push(fullMatch);
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < line.length) {
    elements.push(
      <span key={`tail-${lastIndex}`} className="token-plain">
        {line.substring(lastIndex)}
      </span>
    );
  }

  return elements.length > 0 ? elements : '\u00A0';
}

export default function StrikeLogo() {
  const [heroSlideIdx, setHeroSlideIdx] = useState(0);

  // Auto-rotate hero membership slideshow every 3.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlideIdx((prev) => (prev + 1) % heroSlides.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Active tab on right panel: 'ai' | 'bugs' (default: 'ai')
  const [activeRightTab, setActiveRightTab] = useState('ai');
  
  // Floating Gear/Wrench quick tools widget state
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  
  // Terminal logs state
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'system', text: 'Welcome to Strike Terminal!' },
    { type: 'gap' }
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const terminalBodyRef = useRef(null);
  const terminalEndRef = useRef(null);
  const runTimersRef = useRef([]);

  useEffect(() => {
    return () => {
      runTimersRef.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  // Editable code state with animated typewriter effect
  const [codeText, setCodeText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeFileName, setActiveFileName] = useState('strike.js');

  const typingTimerRef = useRef(null);
  const targetCodeRef = useRef(DEFAULT_STRIKE_CODE);
  const textareaRef = useRef(null);

  // Core Typewriter Animation Function (Optimized for fast, snappy streaming)
  const startTypewriter = (textToType, speed = 15, onFinish) => {
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
    }

    targetCodeRef.current = textToType;

    // Respect user's prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCodeText(textToType);
      setIsTyping(false);
      if (onFinish) onFinish();
      return;
    }

    setIsTyping(true);
    setCodeText('');
    let index = 0;

    const typeNext = () => {
      if (index < textToType.length) {
        // Fast-forward indentation spaces (4 spaces or 2 spaces at once)
        let step = 1;
        if (textToType.slice(index, index + 4) === '    ') {
          step = 4;
        } else if (textToType.slice(index, index + 2) === '  ') {
          step = 2;
        } else if (index + 2 <= textToType.length && textToType[index] !== '\n' && textToType[index + 1] !== '\n') {
          step = 2; // Stream in 2 characters per tick for snappy, high-speed typing
        }

        index += step;
        setCodeText(textToType.slice(0, index));

        const char = textToType[index - 1];
        let delay = speed;

        if (char === '\n') {
          delay = speed + 60; // Brief natural pause at line breaks
        } else if (char === ';' || char === '{' || char === '}') {
          delay = speed + 20; // Snappy pause after statements
        } else {
          delay = Math.max(7, speed + (Math.random() * 4 - 2));
        }

        typingTimerRef.current = setTimeout(typeNext, delay);
      } else {
        setIsTyping(false);
        if (onFinish) onFinish();
      }
    };

    typingTimerRef.current = setTimeout(typeNext, 170);
  };

  const stopTyping = () => {
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
    }
    setIsTyping(false);
  };

  const completeImmediately = () => {
    stopTyping();
    setCodeText(targetCodeRef.current);
  };

  // Start typing animation on mount
  useEffect(() => {
    startTypewriter(DEFAULT_STRIKE_CODE, 15);
    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
    };
  }, []);

  // Replay strike.js animation
  const handleReplay = () => {
    setActiveFileName('strike.js');
    startTypewriter(DEFAULT_STRIKE_CODE, 15);
  };

  // Run code execution handler
  const handleRunCode = () => {
    if (isTyping) {
      completeImmediately();
    }
    setIsRunning(true);
    runTimersRef.current.forEach(clearTimeout);
    runTimersRef.current = [];

    // Step 1: Initial execution command
    setTerminalLogs([
      { type: 'system', text: 'Welcome to Strike Terminal!' },
      { type: 'gap' },
      { type: 'command-green', text: `$ node ${activeFileName}` },
      { type: 'exec-info', text: 'Starting JavaScript execution...' }
    ]);

    // Step 2: Running welcome function
    const t1 = setTimeout(() => {
      setTerminalLogs([
        { type: 'system', text: 'Welcome to Strike Terminal!' },
        { type: 'gap' },
        { type: 'command-green', text: `$ node ${activeFileName}` },
        { type: 'exec-info', text: 'Starting JavaScript execution...' },
        { type: 'exec-info', text: 'Running welcome function...' }
      ]);
    }, 180);

    // Step 3: Complete execution output with results and success checkmark
    const t2 = setTimeout(() => {
      setTerminalLogs([
        { type: 'system', text: 'Welcome to Strike Terminal!' },
        { type: 'gap' },
        { type: 'command-green', text: `$ node ${activeFileName}` },
        { type: 'exec-info', text: 'Starting JavaScript execution...' },
        { type: 'exec-info', text: 'Running welcome function...' },
        { type: 'gap' },
        { type: 'output-cyan', text: 'Welcome Guest User!' },
        { type: 'output-plain', text: 'Level: Beginner' },
        { type: 'success-badge', text: '[SUCCESS] Program executed successfully!' },
        { type: 'gap' }
      ]);
      setIsRunning(false);
    }, 450);

    runTimersRef.current.push(t1, t2);
  };

  // AI Suggestion click handler with typewriter animation
  const handleSuggestionClick = (title) => {
    const code = SUGGESTIONS_MAP[title];
    if (code) {
      setTerminalLogs((prev) => [
        ...prev,
        { type: 'system', text: `[AI] Applying "${title}" suggestion...` }
      ]);
      startTypewriter(code, 10);
    }
  };

  // Bug shot card click handler
  const handleBugClick = (bug) => {
    setTerminalLogs((prev) => [
      ...prev,
      { type: 'exec-info', text: `[Bug Shots] Inspecting ${bug.id} (${bug.badge} priority)...` },
      { type: 'system', text: bug.fix }
    ]);
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
          <p className="paragraph">Master DSA, System Design & AI with interactive coding environments</p>
          {/* <span id="evn" className="paragraph"></span> */}

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

        <div className='user-comment-card'>
           <Card></Card>
        </div>

        <div className="code-editor">
          <div className="ide-window">
            
            {/* Top Window Header Bar */}
            <div className="ide-header">
              <div className="header-left-controls">
                <div className="window-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div 
                  className="file-tab active"
                  onClick={handleReplay}
                  title="Click to replay code writing animation"
                >
                  <span className="file-icon">&lt;/&gt;</span>
                  <span className="file-name">{activeFileName}</span>
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
                  {isRunning ? (
                    <i className="fa-solid fa-spinner fa-spin"></i>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
                    </svg>
                  )}
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
                    {codeLines.map((line, idx) => (
                      <span key={idx}>{line.trim().length > 0 ? idx + 1 : '\u00A0'}</span>
                    ))}
                  </div>

                  <div className="code-area">
                    <textarea
                      ref={textareaRef}
                      value={codeText}
                      onChange={(e) => {
                        stopTyping();
                        setCodeText(e.target.value);
                      }}
                      onFocus={() => {
                        if (isTyping) stopTyping();
                      }}
                      className="code-textarea"
                      spellCheck="false"
                      aria-label="Interactive Code Editor"
                    />
                    <div className="code-highlighted-overlay">
                      {codeLines.map((line, idx) => {
                        const isLastLine = idx === codeLines.length - 1;
                        return (
                          <div key={idx} className="code-line">
                            {highlightCodeLine(line)}
                            {isLastLine && (
                              <span 
                                className={`ide-cursor ${isTyping ? 'solid' : 'blinking'}`} 
                                aria-hidden="true"
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Bottom Terminal */}
                <div className="ide-terminal">
                  <div className="terminal-bar-header">
                    <span className="terminal-header-icon-badge">
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="4 17 10 11 4 5" />
                        <line x1="12" y1="19" x2="20" y2="19" />
                      </svg>
                    </span>
                    <span className="terminal-header-text">TERMINAL</span>
                  </div>
                  <div className="terminal-body-content" ref={terminalBodyRef}>
                    {terminalLogs.map((log, index) => {
                      if (log.type === 'gap') {
                        return <div key={index} className="terminal-gap" />;
                      }
                      return (
                        <div key={index} className={`terminal-log-line ${log.type}`}>
                          {log.text}
                        </div>
                      );
                    })}
                    <div className="terminal-prompt-line">
                      <span className="prompt-symbol">$</span>
                    </div>
                    <div ref={terminalEndRef} />
                  </div>
                </div>

              </div>

              {/* RIGHT AREA: AI Assistant & Suggestions */}
              <div className="ide-sidebar-panel">
                
                {/* Sidebar Tabs */}
                <div className="sidebar-tabs">
                  <div className="sidebar-tabs-left">
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
                  </div>
                  <span className="sidebar-static-label">Static</span>
                </div>

                {/* Viewport ensuring strict fixed height matching AI Assistant */}
                <div className="sidebar-panels-viewport">
                  {/* AI Assistant View */}
                  <div className={`sidebar-scrollable-content ${activeRightTab === 'ai' ? 'active' : 'hidden'}`}>
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

                    <div className="suggestion-card" onClick={() => handleSuggestionClick('Add loading states')}>
                      <h4>Add loading states</h4>
                      <p>Show skeleton loaders while fetching user data for better UX.</p>
                    </div>

                    <div className="suggestion-card" onClick={() => handleSuggestionClick('Optimize re-renders')}>
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

                  {/* Bug Shots Content Cards */}
                  <div className={`sidebar-scrollable-content bug-shots-container ${activeRightTab === 'bugs' ? 'active' : 'hidden'}`}>
                    {BUG_SHOTS.map((bug) => (
                      <div 
                        key={bug.id} 
                        className="bug-shot-card"
                        onClick={() => handleBugClick(bug)}
                        title={`Click to inspect ${bug.id} in terminal`}
                      >
                        <div className="bug-shot-header">
                          <h4 className="bug-shot-title">{bug.title}</h4>
                          <span className={`bug-shot-badge ${bug.badgeType}`}>
                            {bug.badge}
                          </span>
                        </div>
                        <p className="bug-shot-fix">{bug.fix}</p>
                      </div>
                    ))}
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