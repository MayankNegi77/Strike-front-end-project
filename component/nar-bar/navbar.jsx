import React, { useState, useEffect } from 'react';
import { Lottie } from 'lottie-react';
import fistBumpAnimation from '../../public/animation/Fist Bump.lottie/animations/12345.json';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="navigation-container">
            <div className={`navigation-bar ${isMenuOpen ? 'mobile-open' : ''} ${isScrolled ? 'scrolled' : ''}`}>

                {/* Leftmost Fist Bump / Handshake Lottie Animation */}
                <div className="nav-leftmost-animation">
                    <Lottie 
                        src={fistBumpAnimation} 
                        autoplay
                        loop 
                        style={{ width: 58, height: 58 }} 
                    />
                </div>

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
                    <button className="nav-button active">Home</button>
                    <button className="nav-button">Courses</button>
                    <button className="nav-button">Practice</button>
                    <button className="nav-button">CodeArena</button>
                    <button className="nav-button">Quiz</button>
                    <button className="nav-button">System Design</button>
                    <button className="nav-button">Contests</button>
                </nav>

                <div className={`Get-start ${isMenuOpen ? 'open' : ''}`}>
                    <a href="/">Get Started</a>
                </div>

            </div>
        </div>
    )
}

export default NavBar;