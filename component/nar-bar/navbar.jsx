import React, { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="navigation-container">
            <div className={`navigation-bar ${isMenuOpen ? 'mobile-open' : ''}`}>

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