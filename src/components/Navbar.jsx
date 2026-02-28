import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX, HiSun, HiMoon } from 'react-icons/hi';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
            <div className="nav-container">
                <a href="#home" className="logo">
                    <span className="text-gradient">&lt;HST /&gt;</span>
                </a>

                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="nav-actions">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? <HiSun size={24} /> : <HiMoon size={24} />}
                    </button>

                    <div className="mobile-only menu-btn" onClick={toggleMenu}>
                        {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu glass ${isOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="mobile-link"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
