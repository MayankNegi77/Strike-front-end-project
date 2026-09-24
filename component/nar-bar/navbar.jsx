import React, { useState, useEffect } from 'react';
import { Lottie } from 'lottie-react';
import fistBumpAnimation from '../../public/animation/Fist Bump.lottie/animations/12345.json';

// Mobile Navigation Icons matching exact design in reference image
const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10.5L12 3l9 7.5V20a2 2 0 0 1-2 2h-4a1 1 0 0 1-1-1v-5a2 2 0 0 0-2-2 2 2 0 0 0-2 2v5a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2z"/>
  </svg>
);

const CoursesIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4.5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2z"/>
    <path d="M22 4.5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const PracticeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="7 8 3 12 7 16" />
    <polyline points="17 8 21 12 17 16" />
  </svg>
);

const ArticlesIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2.5" ry="2.5"/>
    <line x1="8" y1="8" x2="16" y2="8"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
    <line x1="8" y1="16" x2="13" y2="16"/>
  </svg>
);

const QuizIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2.5" ry="2.5"/>
    <path d="M9.5 9a2.5 2.5 0 0 1 4.5 1.5c0 1.5-2 2-2 3.2"/>
    <circle cx="12" cy="16.5" r="0.75" fill="currentColor"/>
  </svg>
);

const ContestsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4h12v5a6 6 0 0 1-12 0V4z"/>
    <path d="M6 6H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3h1"/>
    <path d="M18 6h3a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-1"/>
    <path d="M12 15v3"/>
    <path d="M8 21h8"/>
  </svg>
);

const SystemDesignIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 3a2.5 2.5 0 0 0-2.5 2.5c0 .3.05.6.15.86A3 3 0 0 0 4 9c0 1 .5 1.9 1.25 2.44A3 3 0 0 0 5 17a2.5 2.5 0 0 0 4.5 1.5"/>
    <path d="M14.5 3a2.5 2.5 0 0 1 2.5 2.5c0 .3-.05.6-.15.86A3 3 0 0 1 20 9c0 1-.5 1.9-1.25 2.44A3 3 0 0 1 19 17a2.5 2.5 0 0 1-4.5 1.5"/>
    <path d="M12 4v16"/>
    <path d="M8 12h4"/>
    <path d="M12 12h4"/>
    <path d="M8 8a2 2 0 0 1 2-2"/>
    <path d="M16 8a2 2 0 0 0-2-2"/>
  </svg>
);

const navItems = [
  { id: 'home', label: 'Home', icon: <HomeIcon /> },
  { id: 'courses', label: 'Courses', icon: <CoursesIcon /> },
  { id: 'practice', label: 'Practice', icon: <PracticeIcon /> },
  { id: 'articles', label: 'Articles', icon: <ArticlesIcon /> },
  { id: 'quiz', label: 'Quiz', icon: <QuizIcon /> },
  { id: 'contests', label: 'Contests', icon: <ContestsIcon /> },
  { id: 'system-design', label: 'System Design', icon: <SystemDesignIcon /> },
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('home');

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.scrollY > 40;
                    setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="navigation-container">
            <div className={`navigation-bar ${isMenuOpen ? 'mobile-open' : ''} ${isScrolled ? 'scrolled' : ''}`}>

                {/* Leftmost Handshake Lottie Animation */}
                <div className="nav-leftmost-animation">
                    <Lottie 
                        src={fistBumpAnimation} 
                        autoplay
                        loop 
                        style={{ width: 60, height: 60 }} 
                    />
                </div>

                {/* Logo Tag & Mobile Toggle Button */}
                <div className="span-tag">
                    <a href="/" className="strike-spantag">
                        STRIKE
                    </a>
                    <button 
                        className="mobile-toggle-btn" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </button>
                </div>

                <nav className={`navigation-button ${isMenuOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`nav-button ${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab(item.id);
                                setIsMenuOpen(false);
                            }}
                        >
                            <span className="nav-item-icon">{item.icon}</span>
                            <span className="nav-item-label">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className={`Get-start ${isMenuOpen ? 'open' : ''}`}>
                    <a href="/" onClick={() => setIsMenuOpen(false)}>Get Started</a>
                </div>

            </div>
        </div>
    );
};

export default NavBar;