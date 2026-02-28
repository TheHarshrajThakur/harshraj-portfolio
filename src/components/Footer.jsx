import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <a href="#home" className="logo">
                            <span className="text-gradient">&lt;HST /&gt;</span>
                        </a>
                        <p className="footer-text">
                            Building secure and scalable applications with modern technologies.
                        </p>
                    </div>

                    <div className="footer-socials">
                        <a href="https://github.com/TheHarshrajThakur" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
                            <FiGithub size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/harshraj-singh-thakur-ab732333b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                            <FiLinkedin size={22} />
                        </a>
                        <a href="https://twitter.com/_harshrajthakur" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
                            <FiTwitter size={22} />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; {new Date().getFullYear()} Harshraj Singh Thakur. All rights reserved.
                    </p>
                    <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
                        <FiArrowUp size={24} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
